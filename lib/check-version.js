const chalk = require('chalk')
const leftpad = require('left-pad')
const request = require('request')
const semver = require('semver')

const packageConfig = require('../package.json')

module.exports = function (done) {
  // Ensure minimum supported node version is used
  if (!semver.satisfies(process.version, packageConfig.engines.node)) {
    return console.log(chalk.red(
      leftpad('You must upgrade node to >=', 2) + packageConfig.engines.node + '.x to use phaser-cli'
    ))
  }

  request({
    url: 'https://registry.npmjs.org/phaser-cli',
    timeout: 1000
  }, function (err, res, body) {
    if (!err && res.statusCode === 200) {
      const latestVersion = JSON.parse(body)['dist-tags'].latest
      const localVersion = packageConfig.version
      if (semver.lt(localVersion, latestVersion)) {
        console.log(chalk.yellow(leftpad('A newer version of phaser-cli is available.', 2)))
        console.log()
        console.log(leftpad('latest:    ', 2) + chalk.green(latestVersion))
        console.log(leftpad('installed: ', 2) + chalk.red(localVersion))
        console.log()
      }
    }
    done()
  })
}
