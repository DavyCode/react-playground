const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const CSSExtract = new ExtractTextPlugin('style.css')


module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(path.join(__dirname, 'dist')),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.s?(a|c)ss$/,
        use: CSSExtract.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: { sourceMap: true}
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true}
            }
          ]
        })
   	  }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html'
    }),
    CSSExtract
  ]
}
