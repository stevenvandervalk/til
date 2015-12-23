var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx', '.json']
  },
  debug: true,
  devtool: 'source-map',
  module: {
    noParse: /highlight\.js\/lib\/languages\/.*\.js/,
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
}