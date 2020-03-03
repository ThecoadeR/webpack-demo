/*
 * @Descripttion: 注释
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-03 21:22:27
 * @LastEditTime: 2020-03-03 22:02:04
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
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
  // code splitting
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}