/* eslint-env node */

module.exports = {
  entry: './lib/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'MenuList.js',
    library: 'MenuList',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx|js?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
};
