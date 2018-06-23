const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const common = require('./webpack.common.js');

const isProd = merge(common, {
  mode: 'production',
  devtool:'source-map',
  plugins: [
    new CleanWebpackPlugin(['public']),
  ]
});

module.exports = (env) => {
  return isProd
}
