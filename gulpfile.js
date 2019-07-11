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

gulp.task('clean', () => del(paths.clean.path));

gulp.task('build-index', () =>
  gulp.src(paths.index)
  .pipe(pug())
  .pipe(gulp.dest(paths.dest.path)));

gulp.task('build-js', () =>
  gulp.src(paths.nodeModules.js.concat(paths.js))
  .pipe(eslint())
  .pipe(concat('main.js'))
  .pipe(gulp.dest(`${paths.dest.path}/js`)));

gulp.task('build-css', () =>
  gulp.src(paths.nodeModules.css.concat(paths.css))
  .pipe(concat('main.css'))
  .pipe(gulp.dest(`${paths.dest.path}/css`)));

gulp.task('build-assets', () =>
    gulp.src(paths.assets)
    .pipe(flatten())
    .pipe(gulp.dest(paths.dest.assets)));

gulp.task('build', () =>
  rs('clean', 'build-index', 'build-css', 'build-js', 'build-assets'));

gulp.task('watch', () =>
  gulp.watch('./src/**/*.*', () =>
    rs('build', err => {
      if (err) console.log(err);
    })
  )
);
