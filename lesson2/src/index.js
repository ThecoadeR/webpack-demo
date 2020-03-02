/*
 * @Descripttion: 
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-01 23:31:53
 * @LastEditTime: 2020-03-02 13:09:01
 */

import avatar from './avatar.png'
import './index.css'

const img = new Image()
img.src = avatar
img.classList.add('avatar')

const dom = document.getElementById('root')
dom.append(img)
