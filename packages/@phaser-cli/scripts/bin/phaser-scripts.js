'use-strict'

const spawn = require('cross-spawn')
const args = process.argv.slice(2)

const scriptIndex = args.findIndex(x => x === 'start')
const script = scriptIndex === -1 ? args[0] : args[scriptIndex]
const nodeArgs = scriptIndex > 0 ? args.slice(0, scriptIndex) : []

switch (script) {
  case 'start':
    const result = spawn.sync(
      'node',
      nodeArgs
        .concat(require.resolve('../scripts/' + script))
        .concat(args.slice(scriptIndex + 1)),
      { stdio: 'inherit' }
    )
    process.exit(result.status)
  default:
    console.log('Unknown script "' + script + '".')
    break
}
