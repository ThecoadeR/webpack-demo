/*
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-01 23:33:12
 * @LastEditTime: 2020-03-01 23:57:02
 */
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [{
      test: /\.png$/,
      use: {
        loader: 'file-loader'
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: 'bundle.js'
  }
}