/* eslint-env node */

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'MultiLevelMenu.js',
    library: 'MultiLevelMenu',
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
