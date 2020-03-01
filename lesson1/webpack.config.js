/*
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-01 22:42:39
 * @LastEditTime: 2020-03-01 23:13:47
 */
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contentHash:8].js',
    path: path.resolve(__dirname, 'src/dist')
  }
}