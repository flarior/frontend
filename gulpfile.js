var path  = require('path');

global.gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var reactify = require('reactify');
var babel = require('gulp-babel');

global.flariorPaths = {
  app : path.resolve('./app/'),
  sass : path.resolve('./app/sass'),
  sassGlob: path.resolve('./app/sass/**/*.scss'),
  javascript: path.resolve('./app/js/**/*.js*'),
  jsxEntry: path.resolve('./app/js/app.jsx'),
  backend: path.resolve('./app/livereload.txt'),
  css: path.resolve('./app/css')
}

gulp.task('webserver',['sass', 'watch', 'compileJs', 'backend'], function() {
  gulp.src(flariorPaths.app)
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8000,
      livereload: true
    }));
});



gulp.task('sass', function compileInuit(){
  gulp.src(flariorPaths.sassGlob)
  .pipe(sass({
    errLogToConsole: true
  }))
  .pipe(gulp.dest('./app/static/css'))
});

gulp.task('compileJs', function(){
  gulp.src(flariorPaths.jsxEntry)
    .pipe(browserify({
      transform: [reactify]
    }))
    .pipe(babel())
    .pipe(rename('app.js'))
    .pipe(gulp.dest('./app/static/js'))
});

gulp.task('backend', function() {
});

gulp.task('watch', function(){
  gulp.watch(flariorPaths.sassGlob, ['sass']);
  gulp.watch(flariorPaths.javascript, ['compileJs']);
  gulp.watch(flariorPaths.backend, ['backend']);
});

gulp.task('default', ['webserver']);
