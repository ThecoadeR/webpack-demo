/*
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-01 23:33:12
 * @LastEditTime: 2020-03-02 11:49:53
 */
const path = require('path')

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
    }]
  },
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: 'bundle.js'
  }
}