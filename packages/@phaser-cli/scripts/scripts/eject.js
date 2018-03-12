'use strict'

const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer
  .prompt({
    type: 'confirm',
    name: 'shouldEject',
    message: 'Are you sure you want to eject? This action is permanent',
    default: false
  })
  .then(answer => {
    if (!answer.shouldEject) {
      console.log(chalk.cyan('Close one! Eject aborted.'))
      return
    }

    console.log('Ejecting...')

    // TODO: Actually eject the project
  })
