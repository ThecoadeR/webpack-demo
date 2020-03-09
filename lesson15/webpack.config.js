/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-09 21:16:29
 * @LastEditTime: 2020-03-09 22:24:52
 */
const path = require('path')
const { CopyRightWebpackPlugin } = require('./plugins/copyright-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.[contentHash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  // 配置resoloveLoaders 如果自己写了loader可以直接写loader的名字 简化路径 类似alise
  resolveLoader: {
    modules: ['node_modules', './loaders']
  },
  module: {
    rules: [
      {
        test: /\.js/,
        // use: [path.resolve(__dirname, './loaders/replaceLoader.js')] 基础写法 
        //同时可以配置options loader可以通过this获取options的内容
        use: [
          {
            loader: 'replaceLoader',
            options: {
              name: 'ZhuHaiHua',
              host: '127.0.0.1'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyRightWebpackPlugin({
      name: 'Zhu'
    })
  ]
}