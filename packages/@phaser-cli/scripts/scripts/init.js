// @remove-file-on-eject
'use strict'

const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')

module.exports = (appPath, appName) => {
  const ownPackageName = require(path.join(__dirname, '..', 'package.json'))
    .name
  const ownPath = path.join(appPath, 'node_modules', ownPackageName)
  const appPackage = require(path.join(appPath, 'package.json'))
  const phaserScripts = ['@phaser-cli/scripts']

  appPackage.scripts = {
    start: 'phaser-scripts start',
    build: 'phaser-scripts build',
    eject: 'phaser-scripts eject',
  }

  appPackage.dependencies = appPackage.dependencies || {}
  appPackage.devDependencies = appPackage.devDependencies || {}

  // Move phaser-scripts to dev dependencies
  if (appPackage.dependencies[phaserScripts]) {
    appPackage.devDependencies[phaserScripts] =
      appPackage.dependencies[phaserScripts]
    delete appPackage.dependencies[phaserScripts]
  }

  fs.writeFileSync(
    path.join(appPath, 'package.json'),
    JSON.stringify(appPackage, null, 2)
  )

  const templatePath = path.join(ownPath, 'template')

  if (!fs.existsSync(templatePath)) {
    console.error(
      `Could not locate supplied template: ${chalk.green(templatePath)}`
    )
    return
  }

  fs.copySync(templatePath, appPath)
  fs.moveSync(path.join(appPath, 'gitignore'), path.join(appPath, '.gitignore'))
  fs.moveSync(
    path.join(appPath, 'prettierrc'),
    path.join(appPath, '.prettierrc')
  )

  console.log(`Success! Created ${appName} at ${appPath}`)
}
