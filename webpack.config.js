const path = require('path')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')

const pkg = require('./package')
const PORT = 8080

const hmrEntries = [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${PORT}`,
  'webpack/hot/only-dev-server'
]

module.exports = (env, argv) => {

  return {
    node: { fs: 'empty' },
    entry: {
      vendor: (argv.mode !== 'production' ? hmrEntries : []).concat(Object.keys(pkg.dependencies)),
      app: ['./src/index.js']
    },
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: __dirname + '/public',
      publicPath: '/'
    },
    devServer: {
      contentBase: 'public/',
      historyApiFallback: true,
      port: PORT
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "all"
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /.styl$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
              }
            },
            {
              loader: 'stylus-loader'
            }
          ]
        },
        {
          test: /\.(jpg|png|gif|jpeg)$/,
          loader: 'url-loader'
        }
      ]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new htmlPlugin({
        template: 'src/index.html'
      })
    ].concat(
      argv.mode === 'production' ?
        [
          new UglifyJSPlugin(),
          new CompressionPlugin()
        ] : []
    )
  }
}
