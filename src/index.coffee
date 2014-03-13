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

    onSuccess = (output, output_code, output_mods, callback)=>
      joinedFile = new gutil.File({
        # cwd: '',
        # base: firstFile.base,
        path: output,
        contents: new Buffer(output_code)
      })
      this.push(joinedFile)

    ozma({
      gulp: onSuccess
    }).exec({
      config: opts
      _: [file.path]
    })
    # callback()
  )

###
ozma({
  gulp: true
}).exec
  config:
    baseUrl: root
    distUrl: path.join(root, 'dist')
    disableAutoSuffix: true
  _: [root + '/app.js']

ozma()
###
