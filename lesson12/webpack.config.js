/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-08 14:08:26
 * @LastEditTime: 2020-03-08 14:22:30
 */
const path = require('path')
// 打包ts文件 需要额外配置一个tsconfig.js 以及引入ts-loader处理tsx文件
module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.tsx'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}