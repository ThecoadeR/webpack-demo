/*
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-02 16:10:52
 * @LastEditTime: 2020-03-02 16:45:18
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundls.[contentHash:8].js'
  },
  module: {
    rules: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            targets: {
              chrome: '67' // 如果该浏览器版本对es6支持非常好 则不需要注入太多转译以后的代码
            },
            useBuiltIns: 'usage', // 不添加所有的新特性 只添加用到了的特性 减少打包以后的代码体积
            corejs: 3
          }]]
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8888
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}