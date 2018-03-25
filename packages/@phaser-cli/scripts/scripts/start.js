'use strict'

process.env.NODE_ENV = 'development'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../config/webpack.config')

const port = parseInt(process.env.PORT, 10) || 8080
const host = process.env.HOST || '0.0.0.0'

const server = new WebpackDevServer(webpack(config), {
  mode: 'development',
  hot: true
})

server.listen(port, host, () => {
  console.log(`Starting server on ${host}:${port}`)
})

const close = () => {
  server.close()
  process.exit()
}

process.on('SIGINT', close)
process.on('SIGTERM', close)
