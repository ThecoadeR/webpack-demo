/*
 * @Descripttion: 注释
 * @Author: Zhu Hai Hua
 * @Date: 2020-03-04 14:59:10
 * @LastEditTime: 2020-03-04 15:20:48
 */

async function getComponent() {
  const {default:_} = await import('lodash')
  const ele = document.createElement('div')
  ele.innerHTML = _.join(['lazy', 'loading'], '-')
  return ele
}

document.addEventListener('click', () => {
  getComponent().then((ele) => {
    document.body.append(ele)
  })
})