module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      './app/app.js'
    ]
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.js$/, loader: 'babel', query: {stage: 1}}
    ]
  }
}
