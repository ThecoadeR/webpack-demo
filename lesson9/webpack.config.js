/*
 * @Descripttion: 注释
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-04 20:49:46
 * @LastEditTime: 2020-03-04 21:24:08
 */
/*
 * @Descripttion: 注释
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-04 20:49:46
 * @LastEditTime: 2020-03-04 21:12:07
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contentHash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'] 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}