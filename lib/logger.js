const chalk = require('chalk')
const format = require('util').format
const leftpad = require('left-pad')

/**
 * Prefix.
 */

const prefix = leftpad('phaser-cli', 2)
const sep = chalk.gray('·')

/**
 * Log a `message` to the console.
 *
 * @param {String} message
 */

exports.log = function () {
  const msg = format.apply(format, arguments)
  console.log(chalk.white(prefix), sep, msg)
}

/**
 * Log an error `message` to the console and exit.
 *
 * @param {String} message
 */

exports.fatal = function (message) {
  if (message instanceof Error) message = message.message.trim()
  const msg = format.apply(format, arguments)
  console.error(chalk.red(prefix), sep, msg)
  process.exit(1)
}

/**
 * Log a success `message` to the console and exit.
 *
 * @param {String} message
 */

exports.success = function () {
  const msg = format.apply(format, arguments)
  console.log(chalk.white(prefix), sep, msg)
}
