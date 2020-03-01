/*
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-01 23:31:53
 * @LastEditTime: 2020-03-02 00:04:46
 */

// console.log(avatar)

import avatar from './avatar.png'

const img = new Image()
img.src = avatar
const dom = document.getElementById('root')
dom.append(img)