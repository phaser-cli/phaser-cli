'use strict'

const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appEntry: resolveApp('src/main.js'),
  appSrc: resolveApp('src'),
  appHtml: resolveApp('index.html'),
  appStatic: resolveApp('static')
}

// @remove-on-eject-begin
const resolveOwn = relativePath => path.resolve(__dirname, '..', relativePath)

module.exports = Object.assign({}, module.exports, {
  ownPath: resolveOwn('.')
})
// @remove-on-eject-end
