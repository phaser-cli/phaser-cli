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

exports.isYarnOnline = (useYarn) => {
  // npm doesn't have offline cache so just assume it's online
  if (!useYarn) {
    return Promise.resolve(true)
  }

  return new Promise(resolve => {
    dns.lookup('registry.yarnpkg.com', err => {
      resolve(err == null)
    })
  })
}
