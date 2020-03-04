/*
 * @Descripttion: 注释
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-04 21:25:23
 * @LastEditTime: 2020-03-04 21:30:11
 */
import _ from 'lodash'
import $ from 'jquery'

const dom = $('<div>')
dom.html(_.join(['zhu', 'javascript'], '-'))
$('body').append(dom)