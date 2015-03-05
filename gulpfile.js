var gulp = require('gulp'),
    svgSprite = require("gulp-svg-sprites"),
    rename = require("gulp-rename"),
    svgmin = require('gulp-svgmin'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    notify = require("gulp-notify"),
    concat = require('gulp-concat'),
    shell = require('gulp-shell')
    connect = require('gulp-connect');


gulp.task('connect', function() {
  connect.server({
      livereload: true,
      port: 1111,
      root: './_site'
    });
});

gulp.task('svg-sprites', function () {
  return gulp.src('assets/img/svg_icons/*.svg')
    .pipe(svgmin())
    .pipe(svgSprite({
      mode: 'defs',
    }))
    .pipe(rename({
        extname: '.html'
    }))
    .pipe(gulp.dest("_includes/sprites"))
    .pipe(notify('SVG sprite created!'))
    .on('error', swallowError);
});


gulp.task('js-concat', function(){
  return gulp.src([
    'assets/js/components/waves.js',
    'assets/js/components/global.js',
    'assets/js/components/preloader.js',
    'assets/js/components/navigation.js',
    'assets/js/components/dropdown.js',
    'assets/js/components/lang-switcher.js',
    'assets/js/vendor/cookie.js',
    'assets/js/sections/section-expierence.js',
    'assets/js/sections/section-contact.js',
    'assets/js/sections/section-work.js',
    'assets/js/sections/section-about.js',
    'assets/js/sections/section-blog.js'
  ])
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(notify('JS concated!'))
  .pipe(gulp.dest('assets/js/'))
  .on('error', swallowError);
});


gulp.task('reload', function() {
  return gulp.src('')
    .pipe(shell(['jekyll build']))
    .pipe(notify('Jekyll built!'))
    .pipe(connect.reload())
});

gulp.task('watch', function() {
    gulp.watch([
      '*.*',
      './write/**/*.*',
      './blog-avas/**/*.*',
      './blog-images/**/*.*',
      './blog-posters/**/*.*',
      './assets/**/*.*',
      './_posts/**/*.*',
      './_includes/**/*.*',
      './_data/**/*.*',
      './ru/**/*.*', './en/**/*.*'
      ], ['reload']);
    gulp.watch(['assets/img/svg_icons/*.svg'], ['svg-sprites']);
    gulp.watch(['assets/js/*/*.js'], ['js-concat']);
});


gulp.task('default', ['watch', 'connect']);

function swallowError (error) {
    //If you want details of the error in the console
    console.log(error.toString());
    this.emit('end');
}
