const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: [
      'phaser',
      path.resolve(__dirname, 'src/main.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: [/\.js$/],
        use: 'babel-loader',
        include: path.resolve(__dirname, 'src')
      },
      {
        test: [/\.(png|jpg|gif)$/],
        use: 'file-loader'
      },
      {
        test: [/\.(vert|frag)$/],
        use: 'raw-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /phaser/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      CANVAS_RENDERER: true,
      WEBGL_RENDERER: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
