'use strict'

process.env.NODE_ENV = 'production'

const chalk = require('chalk')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config')

build()
  .then(({ stats, warnings }) => {
    if (warnings.length) {
      console.log(chalk.yellow('Compiled with warnings'))
      console.log(warnings.join('\n\n'))
      return
    }

    console.log(chalk.green('Compiled successfully!\n'))
  })
  .catch(err => {
    console.log(chalk.red('Failed to compile.'))
    console.log(err)
    process.exit(1)
  })

const formatMessage = (message, type) => {
  const lines = message.split('\n')

  if (lines[0].lastIndexOf('!') !== -1) {
    lines[0] = lines[0].substr(lines[0].lastIndexOf('!') + 1)
  }

  message = lines.join('\n')
  return message.trim()
}

const formatWebpackMessages = json => {
  const errors = json.errors.map(message => formatMessage(message, 'error'))
  const warnings = json.warnings.map(message => formatMessage(message, 'warning'))

  if (errors.length > 1) {
    errors.length = 1
  }

  const result = {
    errors,
    warnings
  }

  return result
}

function build () {
  const compiler = webpack(Object.assign({}, webpackConfig, { mode: 'production' }))

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err)
      }

      const messages = formatWebpackMessages(stats.toJson({}, true))
      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n\n')))
      }

      return resolve({
        stats,
        warnings: messages.warnings
      })
    })
  })
}
