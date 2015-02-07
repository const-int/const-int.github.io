var gulp = require('gulp');
var svgSprite = require("gulp-svg-sprites");
var rename = require("gulp-rename");
var svgmin = require('gulp-svgmin');

gulp.task('sprites', function () {
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