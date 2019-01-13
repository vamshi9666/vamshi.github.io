'use strict';
let cleanCSS = require('gulp-clean-css');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');

// Gulp task to minify CSS files
gulp.task('css', function () {
  return gulp.src('./css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    // Output
    .pipe(gulp.dest('./docs/css'))
});

gulp.task('js', function() {
  return gulp.src('./js/*.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./docs/js'))
});
gulp.task('html', function() {
  return gulp.src(['./*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./docs/'));
});

gulp.task('default', gulp.series('html','css','js'))