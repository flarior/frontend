var path  = require('path');

global.gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var rename = require('gulp-rename');
var reactify = require('gulp-reactify');
var source = require('vinyl-source-stream');

global.flariorPaths = {
  app : path.resolve('./app/'),
  sass : path.resolve('./app/sass'),
  sassGlob: path.resolve('./app/sass/**/*.scss'),
  javascript: path.resolve('./app/js/**/*.js*'),
  jsxEntry: path.resolve('./app/js/app.jsx'),
  css: path.resolve('./app/css')
}

gulp.task('webserver',['sass', 'watch', 'compileJs'], function() {
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
});

gulp.task('watch', function(){
  gulp.watch(flariorPaths.sassGlob, ['sass']);
  gulp.watch(flariorPaths.javascript, ['compileJs']);
});

gulp.task('default', ['webserver']);
