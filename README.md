gulp-ozjs
=========
gulp tasks for oz.js and ozma.js  http://ozjs.org


Simple gulp file
---------

```javascript
ozma = require('gulp-ozjs')
uglify = require('gulp-uglify');

gulp.task('ozma', function(){
  gulp.src([
    'app.js',
    'subapp/app.js'
  ]).pipe(ozma({
    baseUrl: 'static/js',
    disableAutoSuffix: true,
    loader: 'lib/oz.js'
  })).pipe(uglify()).pipe(gulp.dest('dist'));
});
```

# TODO
1. read file in streams first, not in directly in filesystem.

