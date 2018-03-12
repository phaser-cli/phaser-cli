'use strict'

process.env.NODE_ENV = 'production'

const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config')

build()

function build () {
  const compiler = webpack(Object.assign({}, webpackConfig, { mode: 'production' }))

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }

      // TODO: Format this to be nicer
      console.log(stats)
    })
  })
}
