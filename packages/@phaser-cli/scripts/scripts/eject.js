// @remove-file-on-eject
'use strict'

const chalk = require('chalk')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const path = require('path')

const paths = require('../config/paths')

const ownPath = paths.ownPath
const appPath = paths.appPath

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
    const folders = ['config', 'scripts']

    const files = folders.reduce((files, folder) => {
      return files.concat(
        fs
          .readdirSync(path.join(ownPath, folder))
          .map(file => path.join(ownPath, folder, file))
          .filter(file => fs.lstatSync(file).isFile())
      )
    })

    folders.forEach(folder => fs.mkdirSync(path.join(appPath, folder)))
    files.forEach(file => {
      let content = fs.readFileSync(file, 'utf-8')

      // Skip flagged files
      if (content.match(/\/\/ @remove-file-on-eject/)) {
        return
      }

      // Remove flagged sections of code
      content = content.replace(/\/\/ @remove-on-eject-begin([\s\S]*?)\/\/ @remove-on-eject-end/gm, '')

      console.log(`Adding ${chalk.cyan(file.replace(ownPath, ''))} to the project`)
      fs.writeFileSync(file.replace(ownPath, appPath), content)
    })

    const appPackage = require(path.join(appPath, 'package.json'))
    const ownPackage = require(path.join(ownPath, 'package.json'))

    const ownPackageName = ownPackage.name

    if (appPackage.devDependencies[ownPackageName]) {
      console.log(`  Removing ${chalk.cyan(ownPackageName)} from dependencies`)
      delete appPackage.devDependencies[ownPackageName]
    }

    delete appPackage.scripts['eject']

    Object.keys(appPackage.scripts).forEach(key => {
      console.log(`Replacing script ${chalk.cyan(`"phaser-scripts ${key}"`)} with ${chalk.cyan(`"node scripts/${key}.js"`)}`)
      appPackage.scripts[key].replace('phaser-scripts ', 'node scripts/')
    })

    fs.writeFileSync(path.join(appPath, 'package.json'), appPackage)

    console.log(chalk.green('Ejected successfully!'))
  })
