'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
 
gulp.task('sass', function () {
  gulp.src('./style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('typescript', function() {
  gulp.src('script/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'output.js'
        }))
        .pipe(gulp.dest('js'));
});
 
gulp.task('watch', function () {
  gulp.watch('./style/**/*.scss', ['sass']);
  gulp.watch('./script/**/*.ts', ['typescript']);
});