var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');

var config = {
  entry: './app.js',
  output: {
    path: '',
    filename: BUILD_DIR + '/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.jsx|js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:
        {
          presets:['es2015', 'react']
        }
      }
    ]
  },
  watch: true,
  devtool: 'source-map'
};

module.exports = config;  