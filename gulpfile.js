'use strict';
var gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: "*",
        rename: {}
    });
var pathFile = require('fs'),
    paths = JSON.parse(pathFile.readFileSync('./paths.json'));

gulp.task('pug', function () {
   return gulp
       .src(paths.sources.pug)
       .pipe($.pug({'pretty':true}))
       .pipe($.rename({extname:'.php'}))
       .pipe(gulp.dest(paths.public.primary))
});
gulp.task('js',function () {
   return gulp
       .src(paths.sources.js)
       .pipe($.uglify())
       .pipe($.rename({suffix:'.min'}))
       .pipe(gulp.dest(paths.public.js))
});
gulp.task('js_lib',function () {
   return gulp
       .src(paths.sources.js_lib)
       .pipe(gulp.dest(paths.public.js_lib))
});
gulp.task('json',function () {
    return gulp
        .src(paths.sources.json)
        .pipe(gulp.dest(paths.public.primary))
});
gulp.task('php',function () {
    return gulp
        .src(paths.sources.php)
        .pipe(gulp.dest(paths.public.primary))
});
gulp.task('less', function () {
    return gulp
        .src([paths.sources.less,paths.sources.less_ignore])
        .pipe($.less())
        .pipe(gulp.dest(paths.dist.css))
});
gulp.task('css',function () {
   return gulp
       .src(paths.sources.css)
       .pipe($.sourcemaps.init())
       .pipe($.concat('style.min.css'))
       .pipe($.autoprefixer({browsers:['last 2 version']}))
       .pipe($.csscomb())
       .pipe($.csso())
       .pipe($.sourcemaps.write('.'))
       .pipe(gulp.dest(paths.public.css))

});
gulp.task('fonts',function () {
    return gulp
        .src(paths.sources.fonts)
        .pipe(gulp.dest(paths.public.fonts))
});
gulp.task('fonts_less', function () {
    return gulp
        .src(paths.sources.fonts_less)
        .pipe($.less())
        .pipe(gulp.dest(paths.dist.fonts_css))
});
gulp.task('fonts_css', function () {
    return gulp
        .src(paths.sources.fonts_css)
        .pipe($.sourcemaps.init())
        .pipe($.concat('fonts.min.css'))
        .pipe($.autoprefixer({browsers:['last 2 version']}))
        .pipe($.csscomb())
        .pipe($.csso())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(paths.public.fonts_css))
});
gulp.task('bootstrap_less', function () {
    return gulp
        .src(paths.sources.bootstrap)
        .pipe($.less())
        .pipe(gulp.dest(paths.dist.bootstrap))
});
gulp.task('bootstrap_css', function () {
    return gulp
        .src(paths.sources.bootstrap_css)
        .pipe($.sourcemaps.init())
        .pipe($.concat('bootstrap.min.css'))
        .pipe($.autoprefixer({browsers:['last 2 version']}))
        .pipe($.csscomb())
        .pipe($.csso())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(paths.public.bootstrap_css))
});
gulp.task('images', function () {

});
gulp.task('default', function () {

});