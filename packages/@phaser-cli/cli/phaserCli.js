'use-strict'

const chalk = require('chalk')
const commander = require('commander')
const fs = require('fs-extra')
const os = require('os')
const path = require('path')
const spawn = require('cross-spawn')

const { env } = require('@phaser-cli/cli-shared-utils')

const packageJson = require('./package.json')

let projectName

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    projectName = name
  })
  .option('--use-npm')
  .parse(process.argv)

if (typeof projectName === 'undefined') {
  console.error('Please specify the project directory:')
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
  )
  console.log()
  console.log('For example:')
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-phaser-project')}`)
  console.log()
  console.log(
    `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  )
  process.exit(1)
}

createProject(projectName, program.useNpm)

function createProject (name, useNpm) {
  const root = path.resolve(name)
  const appName = path.basename(root)

  fs.ensureDirSync(name)

  console.log(`Creating your new Phaser project in ${chalk.green(root)}.`)
  console.log()

  const packageJson = {
    name: appName,
    version: '0.1.0',
    private: true
  }

  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2) + os.EOL
  )

  const useYarn = useNpm ? false : env.hasYarn()

  process.chdir(root)
  run(root, appName, useYarn)
}

function run (root, appName, useYarn) {
  const dependencies = ['phaser']

  console.log('Installing packages. This might take a couple of minutes.')

  install(root, useYarn, dependencies)
}

function install (root, useYarn, dependencies) {
  let command
  let args

  if (useYarn) {
    command = 'yarnpkg'
    args = ['add'].concat(dependencies)
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
