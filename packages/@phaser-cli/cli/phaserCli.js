'use strict'

const cac = require('cac')
const chalk = require('chalk')
const fs = require('fs-extra')
const os = require('os')
const path = require('path')
const spawn = require('cross-spawn')

const { env } = require('@phaser-cli/cli-shared-utils')

const handleCreate = (input, flags) => {
  const projectName = input[0]

  if (!projectName) {
    console.error('You must specify a project name:')
    console.log(`  phaser create ${chalk.green('<project-name>')} [options]`)
    console.log()
    console.error('For example:')
    console.log(`  phaser create ${chalk.green('my-project')}`)
    console.log()
    process.exit(1)
  }

  createProject(projectName, flags.useNpm)
}

const cli = cac()

cli
  .command('*', 'create a new phaser project', handleCreate)

cli
  .command('create', 'create a new phaser project', handleCreate)
  .option('use-npm', 'use npm instead of yarn')

cli.parse()

// Create a new Phaser project in the specified directory
function createProject (name, useNpm) {
  const root = path.resolve(name)
  const appName = path.basename(root)

  fs.ensureDirSync(name)

  console.log(`Creating your new Phaser project in ${chalk.green(root)}.`)
  console.log()

  const packageJson = {
    name: appName,
    version: '0.1.0',
    private: true,
    scripts: {}
  }

  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2) + os.EOL
  )

  const useYarn = useNpm ? false : env.hasYarn()

  process.chdir(root)
  run(root, appName, useYarn)
}

// Runs the init script in @phaser-cli/scripts
function run (root, appName, useYarn) {
  const dependencies = ['phaser', '@phaser-cli/scripts']

  console.log('Installing packages. This might take a couple of minutes.')
  console.log(`Installing ${chalk.cyan('phaser')} and ${chalk.cyan('@phaser-cli/scripts')}`)

  env.isYarnOnline(useYarn)
    .then(isOnline => {
      install(root, useYarn, dependencies, isOnline)
        .then(() => {
          const scriptsPath = path.resolve(
            process.cwd(),
            'node_modules/@phaser-cli/scripts/scripts/init.js'
          )

          const init = require(scriptsPath)
          init(root, appName)
        })
        .catch(err => {
          console.log('Aborting installation.')
          console.log(chalk.red('Unexpted error. Please report it as a bug:'))
          console.log(err)
        })
    })
}

// Installs all necessary dependencies
function install (root, useYarn, dependencies, isOnline) {
  let command
  let args

  if (useYarn) {
    command = 'yarnpkg'
    args = ['add']

    if (!isOnline) {
      args = args.concat(['--offline'])
    }

    args = args
      .concat(dependencies)
      .concat(['--cwd', root])
  } else {
    command = 'npm'
    args = ['install', '--save', '--loglevel', 'error'].concat(dependencies)
  }

  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: 'inherit' })
    child.on('close', code => {
      if (code !== 0) {
        reject(new Error({
          command: `${command} ${args.join(' ')}`
        }))
        return
      }
      resolve()
    })
  })
}
