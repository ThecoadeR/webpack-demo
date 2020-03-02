/*
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-02 14:38:06
 * @LastEditTime: 2020-03-02 15:20:19
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    contentBase: './dist', // 当前服务起在哪个路径下(打包后的dist文件夹下)
    open: true, // 自动打开浏览器
    port: 8888, // 端口
    hot: true,
    hotOnly: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}