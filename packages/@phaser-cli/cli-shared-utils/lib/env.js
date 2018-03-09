const { execSync } = require('child_process')

let yarn

exports.hasYarn = () => {
  if (yarn != null) {
    return yarn
  }

  try {
    execSync('yarnpkg --version', { stdio: 'ignore' })
    yarn = true
    return yarn
  } catch (err) {
    yarn = false
    return yarn
  }
}
