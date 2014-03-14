print = console.log
path = require('path')
root = path.resolve(__dirname, '../example')
ozma = require('ozma').ozma
gutil = require('gulp-util')
through = require('through2')

module.exports = (opts)->
  return through.obj((file, enc, callback)->
    if not file.isBuffer()
      this.push(file)
      return callback()

    contents = file.contents.toString('utf8')

    onWrite = (output, output_code, output_mods, successCallback)=>
      joinedFile = new gutil.File({
        # cwd: file.cwd,
        base: opts.baseUrl,
        path: output,
        contents: new Buffer(output_code)
      })
      this.push(joinedFile)
      successCallback()

    ozma({
      gulp: onWrite
      success: callback
    }).exec({
      config: opts
      _: [file.path]
    }, callback)
  )

