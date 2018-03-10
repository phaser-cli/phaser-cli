#!/usr/bin/env node

'use strict'

var chalk = require('chalk')

var currentNodeVersion = process.versions.node
var semver = currentNodeVersion.split('.')
var major = semver[0]

if (major < 6) {
  console.error(
    chalk.red(
      'You are running Node ' +
      currentNodeVersion +
      '.\n' +
      'Phaser CLI requires Node 6 or higher. \n' +
      'Please update your version of Node.'
    )
  )
  process.exit(1)
}

require('./phaserCli')
