const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const paths = require('./paths')

module.exports = {
  mode: 'production',
  entry: {
    app: [
      'phaser',
      paths.appEntry
    ]
  },
  output: {
    path: paths.appBuild,
    publicPath: '/',
    filename: 'js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.js$/],
        use: 'babel-loader',
        include: paths.appSrc
      },
      {
        loader: 'file-loader',
        test: [/\.(png|jpg|gif)$/],
        options: {
          name: 'assets/[name].[hash:8].[ext]'
        }
      },
      {
        loader: 'raw-loader',
        test: [/\.(vert|frag)$/],
        options: {
          name: 'assets/[name].[hash:8].[ext]'
        }
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
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      '@': paths.appSrc
    }
  },
  performance: {
    hints: false
  }
}
