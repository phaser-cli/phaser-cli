'use strict'

const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  appBuild: resolveApp('build'),
  appEntry: resolveApp('src/main.js'),
  appSrc: resolveApp('src'),
  appHtml: resolveApp('index.html')
}
