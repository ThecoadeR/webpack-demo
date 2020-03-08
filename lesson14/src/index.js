/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2018-12-22 21:52:00
 * @LastEditTime: 2020-03-08 21:01:38
 */
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Child from 'api/child.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <div> This is App Component</div>
        <Child></Child>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))