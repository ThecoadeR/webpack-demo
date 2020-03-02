/*
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-02 16:11:29
 * @LastEditTime: 2020-03-02 16:29:45
 */
import "@babel/polyfill"

let arr = [
  new Promise(),
  new Promise()
]

arr.map((item) => {
  console.log(item)
})