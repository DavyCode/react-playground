const path = require('path')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


const isDev = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist')
  },
  devtool:'inline-source-map',
})

module.exports = (env) => {
  return isDev
}

