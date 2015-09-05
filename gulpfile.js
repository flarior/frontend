var path  = require('path');

global.gulp = require('gulp');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');

global.flariorPaths = {
  app : path.resolve('./app/'),
  sass : path.resolve('./app/sass'),
  sassGlob: path.resolve('./app/sass/**/*.scss'),
  css: path.resolve('./app/css')
}

gulp.task('webserver',['sass', 'watch'], function() {
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
  .pipe(gulp.dest('./app/css'))
});

gulp.task('watch', function(){
  gulp.watch(flariorPaths.sassGlob, ['sass']);
});

gulp.task('default', ['webserver']);
