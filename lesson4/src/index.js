/*
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-02 14:38:27
 * @LastEditTime: 2020-03-02 15:15:16
 */
import './index.css'

var btn = document.createElement('button')
btn.innerHTML = '点击'
document.body.appendChild(btn)
btn.onclick = function () {
  var div = document.createElement('div')
  div.innerHTML = '新增的div'
  document.body.appendChild(div)
}
