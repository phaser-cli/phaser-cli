const { execSync } = require('child_process')

exports.hasYarn = () => {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' })
    return true
  } catch (err) {
    return false
  }
}
