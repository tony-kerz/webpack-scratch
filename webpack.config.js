var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/app.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.js$/, loader: 'babel', query: {stage: 1} }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  debug: true,
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html', inject: 'body'})
  ]
}
