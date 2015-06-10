var commonConfig = require('./webpack.common.config')
var _ = require('lodash')
var HtmlWebpackPlugin = require('html-webpack-plugin')

config = _.extend(
  commonConfig,
  {
    devtool: 'cheap-module-eval-source-map',
    debug: true,
    plugins: [
      new HtmlWebpackPlugin(
        {
          template: 'index.reload.html',
          inject: 'body'
          //reload: 'http://localhost:8080/webpack-dev-server.js'
          //https://github.com/ampedandwired/html-webpack-plugin/pull/58
        }
      )
    ]
  }
)

console.log('config=%j', config)
module.exports = config
