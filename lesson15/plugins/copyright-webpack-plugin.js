/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-09 22:15:31
 * @LastEditTime: 2020-03-09 22:53:51
 */

/** 
 * loader是一个函数 但是plugin是一个class
 * 同时loader是一个 类似分析器一样的东西 告诉webpack该如何解析相关模块
 * plugin是到一定时间 webpack自动执行 例如clean-webpack-plugin 在打包之前自动执行
*/

/** 
 * compiler 可以理解成webpack实例
 * 插件在constructor里通过options从配置文件接受参数
 * compiler包含多个hooks 可以通过多个hooks来触发不同的打包时段 其实就是类似生命周期
 * emit这个hooks是一个异步的hooks 同时接收两个参数 一个compilation 一个cb 异步钩子需要执行一次cb
 * compilation存放的是当前打包的内容
*/
class CopyRightWebpackPlugin {
  constructor(options) {
    console.log(options.name)
  }
  
  apply(compiler) {
    compiler.hooks.compile.tap('CopyRightWebpackPlugin', (compiler) => {
      console.log('编译')
    })

    compiler.hooks.emit.tapAsync('CopyRightWebpackPlugin', (compilation, cb) => {
      debugger
      compilation.assets['copyright.text'] = {
        source: function () {
          return '123'
        },
        size: function() {
          return 10
        }
      }
      cb()
    })
  }
}

module.exports = {
  CopyRightWebpackPlugin
}