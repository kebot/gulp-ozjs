/*
 * Gulp-OZJS: gulp task for ozma
 *
 * Copyright (C) 2014, Keith Yao, MIT License
 * vim: et:ts=2:sw=2:sts=2
 */

var gutil, ozma, path, print, root, through;

print = console.log;

path = require('path');

root = path.resolve(__dirname, '../example');

ozma = require('ozma').ozma;

gutil = require('gulp-util');

through = require('through2');

module.exports = function(opts) {
  return through.obj(function(file, enc, callback) {
    var contents, onWrite;
    if (!file.isBuffer()) {
      this.push(file);
      return callback();
    }
    contents = file.contents.toString('utf8');
    onWrite = (function(_this) {
      return function(output, output_code, output_mods, successCallback) {
        var joinedFile;
        joinedFile = new gutil.File({
          base: opts.baseUrl,
          path: output,
          contents: new Buffer(output_code)
        });
        _this.push(joinedFile);
        return successCallback();
      };
    })(this);
    return ozma({
      pipe: onWrite,
      success: callback
    }).exec({
      config: opts,
      _: [file.path]
    }, callback);
  });
};
