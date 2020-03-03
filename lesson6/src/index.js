/*
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-02 20:02:00
 * @LastEditTime: 2020-03-03 15:01:32
 */
import { add } from 'npm-test'

const dom = document.createElement('p')
const result = add(1, 2)
dom.innerHTML = `函数调用的结果为${result}`
document.body.appendChild(dom)