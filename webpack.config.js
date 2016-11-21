/* eslint-env node */

module.exports = {
  entry: './src/menu-list/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'MultiLevelMenu.js',
    library: 'MultiLevelMenu',
    libraryTarget: 'umd'
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
