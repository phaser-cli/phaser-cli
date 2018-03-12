'use strict'

const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')

module.exports = (appPath, appName) => {
  const ownPackageName = require(path.join(__dirname, '..', 'package.json')).name
  const ownPath = path.join(appPath, 'node_modules', ownPackageName)
  const appPackage = require(path.join(appPath, 'package.json'))

  appPackage.dependencies = appPackage.dependencies || {}

  appPackage.scripts = {
    start: 'phaser-scripts start',
    build: 'phaser-scripts build',
    eject: 'phaser-scripts eject'
  }

  fs.writeFileSync(
    path.join(appPath, 'package.json'),
    JSON.stringify(appPackage, null, 2)
  )

  const templatePath = path.join(ownPath, 'template')

  if (!fs.existsSync(templatePath)) {
    console.error(`Could not locate supplied template: ${chalk.green(templatePath)}`)
    return
  }

  fs.copySync(templatePath, appPath)
  fs.moveSync(path.join(appPath, 'gitignore'), path.join(appPath, '.gitignore'))

  console.log(`Success! Created ${appName} at ${appPath}`)
}
