/*
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-01 22:43:27
 * @LastEditTime: 2020-03-01 22:56:37
 */

alert('打开控制台')

setTimeout(() => {
  console.log(1)
}, 0)

new Promise((reslove) => {
  console.log('promise')
  reslove()
}).then(() => {
  console.log(2)
})