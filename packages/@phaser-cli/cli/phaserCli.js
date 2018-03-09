'use-strict'

const chalk = require('chalk')
const commander = require('commander')
const fs = require('fs-extra')
const os = require('os')
const path = require('path')
const spawn = require('cross-spawn')

const packageJson = require('./package.json')

let projectName

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action(name => {
    projectName = name
  })
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

const createProject = name => {
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

  fs.writeFileSync(path.join(root, 'package.json'), JSON.stringify(packageJson, null, 2) + os.EOL)

  process.chdir(root)
  run(root, appName)
}

const run = (root, appName) => {
  const dependencies = ['phaser']

  console.log('Installing packages. This might take a couple of minutes.')

  install(root, dependencies)
}

const install = (root, dependencies) => {
  const command = 'npm'
  const args = ['install', '--save', '--loglevel', 'error'].concat(dependencies)

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

createProject(projectName)
