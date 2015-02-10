var gulp = require('gulp');
var svgSprite = require("gulp-svg-sprites");
var rename = require("gulp-rename");
var svgmin = require('gulp-svgmin');
var watch = require('gulp-watch');

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



gulp.task('watch', function() {
    gulp.watch([
        'assets/img/svg_icons/*.svg'
      ],
      ['svg-sprites']);
});


gulp.task('default', ['watch']);