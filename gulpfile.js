var gulp = require('gulp'),
    svgSprite = require("gulp-svg-sprites"),
    rename = require("gulp-rename"),
    svgmin = require('gulp-svgmin'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('svg-sprites', function () {
  return gulp.src('assets/img/svg_icons/*.svg')
    .pipe(svgmin())
    .pipe(svgSprite({
      mode: "defs",
    }))
    .pipe(rename({
        extname: '.html'
    }))
    .pipe(gulp.dest("_includes/sprites"));
});


gulp.task('js-concat', function(){
  return gulp.src([
    'assets/js/components/waves.js',
    'assets/js/components/global.js',
    'assets/js/components/preloader.js',
    'assets/js/components/navigation.js',
    'assets/js/sections/section-expierence.js',
    'assets/js/sections/section-contact.js',
    'assets/js/sections/section-work.js',
    'assets/js/sections/section-about.js',
    'assets/js/sections/section-blog.js'
  ])
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('assets/js/'));
});


gulp.task('watch', function() {
    gulp.watch(['assets/img/svg_icons/*.svg'], ['svg-sprites']);
    gulp.watch(['assets/js/*/*.js'], ['js-concat']);
});

gulp.task('default', ['watch']);

