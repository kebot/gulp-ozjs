gulp-ozjs
=========
gulp tasks for oz.js and ozma.js  http://ozjs.org


Simple gulp file
---------

```javascript
ozma = require('gulp-ozjs')
uglify = require('gulp-uglify');

gulp.task('ozma', function(){
  var stream = gulp.src([
    'app.js',
    'subapp/app.js'
  ]).pipe(ozma({
    baseUrl: 'static/js',
    disableAutoSuffix: true,
    loader: 'lib/oz.js'
  })).pipe(uglify()).pipe(gulp.dest('dist'));
  return stream;
});

gulp.task('watch', function(){
  return gulp.watch(['static/js/**/*.js'], ['ozma']);
});
```

# TODO
1. read file in streams first, not in directly in filesystem.

