/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-05 21:55:13
 * @LastEditTime: 2020-03-08 12:53:53
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
    filename: 'library.js',
    library: 'library', // 把lib挂载到全局
    libraryTarget: 'umd', // 支持所有规范引入library.js
    libraryExport: 'default' // 对外暴露default属性 可以直接略过default 通过点语法调用
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}