/* jslint node: true */
/* jshint esversion: 6 */
const gulp = require('gulp'),
      paths = require('./paths.json'),
      eslint = require('gulp-eslint'),
      del = require('del'),
      rs = require('run-sequence'),
      pug = require('gulp-pug'),
      flatten = require('gulp-flatten'),
      concat = require('gulp-concat');

gulp.task('clean', function() {
    return del(paths.clean.dev);
});

gulp.task('build-index', function() {
  gulp.src(paths.index)
  .pipe(pug())
  .pipe(gulp.dest(paths.dest.dev));
});

gulp.task('build-js', function() {
  return gulp.src(paths.nodeModules.js.concat(paths.js))
  .pipe(eslint())
  .pipe(concat('main.js'))
  .pipe(gulp.dest(paths.dest.dev + "/js"));
});

gulp.task('build-css', function() {
  return gulp.src(paths.nodeModules.css.concat(paths.css))
  .pipe(concat('main.css'))
  .pipe(gulp.dest(paths.dest.dev + "/css"));
});

gulp.task('build-assets', function() {
    return gulp.src(paths.assets)
    .pipe(flatten())
    .pipe(gulp.dest(paths.dest.assets));
});

gulp.task('build', function() {
  return rs('clean', 'build-index', 'build-css', 'build-js', 'build-assets');
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.*', function() {
    return rs('build', function(err) {
      if (err) {
        console.log(err);
      }
    });
  });
});
