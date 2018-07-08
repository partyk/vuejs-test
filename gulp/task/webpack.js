let config = require('./../helpers/getConfig');
let isProduction = require('./../helpers/isProduction');
let console = require('better-console');

let path = require('path');
let webpack = require('webpack');
let gulp = require('gulp');
let plugins = require('gulp-load-plugins');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const $ = plugins();

let isMinwatch = function () {
    return $.util.env._[0] === 'minwatch';
};


gulp.task('webpack', function (callback) {

    console.info('Webpack compile');

    let isReady = false;
    let settings = {
        mode: isProduction() ? 'production' : 'development',
        resolve: {
            alias: {
                'jquery' : require.resolve('jquery'),
                'vue': require.resolve('vue/dist/vue.esm')
            },
            extensions: ['.js', '.json'],
            modules: [
                config.basePath.nodeModule,
                config.basePath.bowerComponents
            ],
        },
        entry: {
            front: path.resolve(config.app.scripts.src, 'front.js'),
        },
        output: {
            path: path.resolve(config.dist.scripts.root),
            filename: '[name].js',
            publicPath: '../js/',
            chunkFilename: '[name].chunk.js',
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'babel-loader'
                        }
                    }
                },
                {
                    test: /\.js(x)?$/,
                    exclude: /node_modules|bower_components/,
                    loader: 'babel-loader',
                },
            ],
        },
        plugins: [
            
        ],
        profile: true,
        watch: !isProduction() || isMinwatch(),
        watchOptions: {
            ignored: /node_modules|bower_components/,
        },
        devtool: isProduction() ? false : 'source-map',
        externals: {
            // 'jquery': 'jQuery',
        },
    };

	//automaticke nacitani modulu
	settings.plugins.push(new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        //Vue: 'vue/dist/vue.esm'
	}));

    if (isProduction()) {
        //priprava na prechod na webpack 4
        settings.plugins.push(new UglifyJsPlugin({
            uglifyOptions: {
              ecma: 5,
              warnings: false,
              output: {
                comments: false,
                beautify: false,
              },
              toplevel: false,
              ie8: false,
            }
        }));

        settings.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
    }

    let onError = $.notify.onError(function (error) {
        return {
            title: 'JS error!',
            message: error,
            sound: 'Beep',
        };
    });

    let bundle = webpack(settings, function (error, stats) {
        var jsonStats = stats.toJson();
        var errors = jsonStats.errors;
        var warnings = jsonStats.warnings;

        if (error) {
            onError(error);
        } else if (errors.length > 0) {
            onError(errors.toString());
        } else if (warnings.length > 0) {
            onError(warnings.toString());
        } else {
            $.util.log('[webpack]', stats.toString(config.webpack.stats));
        }

        if (!isReady) {
            callback();
        }

        return isReady = true;
    });

    //callback();
});