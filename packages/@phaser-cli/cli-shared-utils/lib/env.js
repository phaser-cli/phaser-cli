const { execSync } = require('child_process')
const dns = require('dns')

exports.hasYarn = () => {
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' })
    return true
  } catch (err) {
    return false
  }
}

exports.isYarnOnline = () => {
  return new Promise(resolve => {
    dns.lookup('registry.yarnpkg.com', err => {
      resolve(err == null)
    })
  })
}
