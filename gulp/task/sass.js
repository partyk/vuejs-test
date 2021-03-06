let config = require('./../helpers/getConfig');
let isProduction = require('./../helpers/isProduction');
let handler = require('./../helpers/handler');
let console = require('better-console');

let gulp = require('gulp');
let plugins = require('gulp-load-plugins');

const $ = plugins();


gulp.task('sass', (callback) => {

    console.info('SASS > compile sass to css');

    //nastavim config pro sass stream
    let settings = {
        postCssPlugins: [
            require('postcss-csscomb')('zen'),
            require('postcss-discard-duplicates')(),
            require('pixrem')({ rootValue: config.fontSize }), // rem -> px fallback, defaultni hodnota pro vypocet je 10px
            require('autoprefixer')({ browsers: config.browser }), // pridani prefixu
            // require('postcss-will-change')(),
            // require('postcss-color-rgba-fallback')(),
            // require('postcss-opacity')(),
            // require('postcss-pseudoelements')(),
            // require('postcss-vmin')(),
        ]
    };

    //pridam do postCssPluginy pro produkci
    if (isProduction()) {
        settings.postCssPlugins = settings.postCssPlugins.concat([
            require('cssnano')()
        ]);
    }

    //vytvorim cestu + filtr na soubory
    let src = config.app.sass.src + '**/*.+(scss|sass)';

    let stream = gulp.src(src, {
        // since: gulp.lastRun('sass') // This option takes a timestamp, and gulp.src will filter files that are older than the given time.
    });

    stream
        //nastavim plumber a v pripade chyby volam callback onError
        .pipe($.plumber({
            errorHandler: handler.error,
        }))
        // .on('error', (error) => {
        //     console.error(error);
        // })
        //sourcemaps init
        .pipe(
            isProduction()
                ? $.noop()
                : $.sourcemaps.init()
        )
        //kompilace sass
        .pipe($.sass())
        //postcss
        .pipe($.postcss(settings.postCssPlugins))
        //vygeneruji sourcemaps
        .pipe(
            isProduction()
                ? $.noop()
                : $.sourcemaps.write('./')
        )
        //zastavim plumber
        .pipe($.plumber.stop())
        //vygeneruji CSS soubory
        .pipe(gulp.dest(config.dist.styles.root))
        .on('finish', callback);
});