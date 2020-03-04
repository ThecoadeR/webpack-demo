/*
 * @Descripttion: 注释
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-04 14:55:31
 * @LastEditTime: 2020-03-04 15:11:07
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contentHash:8].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}