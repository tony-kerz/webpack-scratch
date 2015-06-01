module.exports = {
  entry: './app/app.coffee',
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.json', '.coffee'],
    modulesDirectories: ['node_modules', 'bower_components'],
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.coffee$/, loader: 'coffee' }
    ]
  },
  debug: true
};
