let path = require('path');

let optionsApp = {
    develop: {
        browserSync: false,
    }
};

let dirName = {
    root: '/',
    temp: 'temp',
    app: 'app',
    src: 'src',
    dist: 'www',
    scripts: 'js',
    styles: 'css',
    images: 'images',
    fonts: 'fonts',
    extends: 'extends',
    static: 'static'
};

let basePath = {
    absoluteRoot: __dirname,
    app: dirName.app + '/',
    dist: dirName.dist + '/ui/',
    temp: dirName.temp + '/gulp/',
    nodeModule: 'node_modules/',
    bowerComponents: 'bower_components/',
};

let publicPath = {
    root: '/',
    images: {
        root: '/' + dirName.images + '/',
        extends: '/' + dirName.images + '/' + dirName.extends + '/'
    },
    styles: {
        root: '/' + dirName.styles + '/'
    },
    fonts: {
        root: '/' + dirName.fonts + '/'
    }
}

let app = {
    less: {
        root: basePath.app + 'less/',
        src: basePath.app + 'less/' + dirName.src + '/',
    },
    sass: {
        root: basePath.app + 'sass/',
        src: basePath.app + 'sass/' + dirName.src + '/'
    },
    scripts: {
        root: basePath.app + dirName.scripts + '/',
        src: basePath.app + dirName.scripts + '/' + dirName.src + '/',
        extends: basePath.app + dirName.scripts  + '/' + dirName.src + '/' + dirName.extends + '/',
        static: basePath.app + dirName.scripts + '/' + dirName.static + '/',
    },
    images: {
        root: basePath.app + dirName.images + '/',
        extends: basePath.dist + dirName.images + '/' + dirName.extends + '/',
    },
    fonts: {
        root: basePath.app + dirName.fonts + '/',
        extends: basePath.dist + dirName.fonts + '/' + dirName.extends + '/',
    }
};

let dist = {
    styles: {
        root: basePath.dist + dirName.styles + '/',
        extends: basePath.dist + dirName.styles + '/' + dirName.extends + '/',
    },
    scripts: {
        root: basePath.dist + dirName.scripts + '/',
        extends: basePath.dist + dirName.scripts + '/' + dirName.extends + '/',
        static: basePath.app + dirName.scripts + '/' + dirName.static + '/',
    },
    images: {
        root: basePath.dist + dirName.images + '/',
        extends: basePath.dist + dirName.images + '/' + dirName.extends + '/',
    },
    fonts: {
        root: basePath.dist + dirName.fonts + '/',
        extends: basePath.dist + dirName.fonts + '/' + dirName.extends + '/',
    }
};

let webpack = {
	stats: {
		colors: true,
		hash: false,
		timings: true,
		assets: true,
		chunks: false,
		chunkModules: false,
		modules: false,
		children: true,
		version: false,
	},
};

//podpora prohlizece
let browser = ['> 2% in CZ', 'last 3 version', 'iOs >= 7', 'Explorer >= 10'];

//velikost vychoziho pisma
let fontSize = 10;

// uglify options
let optionsUglify = {
    /*
    compress: {

    },
    output: {
        // output options
    },
    sourceMap: {
        // source map options
    },
    parse: {
        // parse options
    },*/

    /* mangle: true,
    ecma: 5, // specify one of: 5, 6, 7 or 8
    keep_classnames: false,
    keep_fnames: false,
    ie8: false,
    nameCache: null, // or specify a name cache object
    safari10: false,
    toplevel: false,
    warnings: false,
    unsafe: false, */
};

let optionsJs = {
    extends: [
        app.scripts.extends + '**/*.js'
    ]
};

module.exports = {
    optionsApp: optionsApp,
    basePath: basePath,
    publicPath: publicPath,
    app: app,
    dist: dist,
    dirName: dirName,
    webpack: webpack,
    browser: browser,
    fontSize: fontSize,
    optionsUglify: optionsUglify,
    optionsJs: optionsJs
};