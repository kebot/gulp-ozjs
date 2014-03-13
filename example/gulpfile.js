var gulp = require('gulp');

gulp.task('ozma', function(){
  gulp.src('app.js').pipe(require('../index.js')({
    baseUrl: '.',
    disableAutoSuffix: true
  })).pipe(gulp.dest('./dist'));
});

