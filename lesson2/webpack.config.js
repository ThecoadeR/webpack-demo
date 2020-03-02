/*
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-01 23:33:12
 * @LastEditTime: 2020-03-02 13:07:54
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.(png|jpeg|jpg)$/,
      use: {
        // 对于图片的处理 url-loader和file-loader的作用非常接近 同时 url-loader提供了limit配置项
        // 也就是说 当超过limit的时候 会被打包到outputPath文件夹里 如果没有超过limit则会直接打包到js里
        // 对于小图片 limti配置项可以直接让图片打包到js里 减少网页http请求
        loader: 'file-loader',
        options: {
          // placeholder 占位符 打包以后的文件名字和原文件名一致
          name: '[name].[ext]',
          outputPath: 'images/'
        }
      }
    },{
      test: /\.css$/,
      // css-loader会帮助梳理css文件之间的关系 并打包为一段css代码
      // style-loader会将打包好的css挂载到页面上
      // 多个loader之间的执行顺序是 从右到左 从下到上
      // 如果要使用postcss-loader 需要额外配置 postcss.config.js
      use:['style-loader', 'css-loader', 'postcss-loader']
    }]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contentHash:8].js'
  },
  // HtmlWebpackPlugin插件会自动生成一个html模板 同时会自动引入打包好的js文件
  // 并且可以指定模板 temlplate配置项
  plugins: [
    new HtmlWebpackPlugin({
    template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}