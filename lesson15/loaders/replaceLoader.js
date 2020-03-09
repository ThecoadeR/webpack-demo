/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2020-03-09 21:19:57
 * @LastEditTime: 2020-03-09 21:47:10
 */

// source是源代码
// 可以通过this.query接受options传递过来的内容
// 可以通过loader-utils来帮助我们自动分析options 不通过this.query的形式获取具体值
// const options = loaderUtils.getOptions(this)
// 传递过个信息 可以使用this.callback
// 通过this.async来执行异步代码

module.exports = function Loader(source) {
  // console.log(this.query)
  // const result = source.replace('Zhu', this.query.name)
  // return result
  const cb = this.async()
  setTimeout(() => {
    const result = source.replace('Zhu', this.query.name)
    cb(null, result)
  }, 1000);
}