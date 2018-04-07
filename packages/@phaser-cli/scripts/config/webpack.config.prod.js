const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const paths = require('./paths')

// Define plugin
const definePluginOptions = {
  'CANVAS_RENDERER': JSON.stringify(true),
  'WEBGL_RENDERER': JSON.stringify(true)
}

// Html webpack plugin
const htmlPluginOptions = {
  inject: true,
  template: paths.appHtml
}

// Clean webpack plugin
const pathsToClean = ['build']
const cleanOptions = {
  root: paths.appPath
}

// Uglify js plugin
const uglifyOptions = {
  cache: true,
  parallel: true,
  uglifyOptions: {
    ecma: 6,
    output: {
      comments: false
    }
  }
}

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
    filename: 'js/[name].[chunkhash:8].bundle.js'
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
    minimizer: [
      new UglifyJsPlugin(uglifyOptions)
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /phaser/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin(definePluginOptions),
    new HtmlWebpackPlugin(htmlPluginOptions),
    new CleanWebpackPlugin(pathsToClean, cleanOptions)
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
