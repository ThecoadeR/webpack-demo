/*
 * @Descripttion: 注释
 * @Author: 朱海华
 * @Date: 2018-12-07 22:47:25
 * @LastEditTime: 2020-03-08 16:23:15
 */

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios'
import List from './list'
import Home from './home'

class App extends Component {
	componentDidMount() {
		axios.get('/react/api/header.json').then((res) => {
			console.log(res.data)
		})
	}
	render() {
		return (
			<div>
				<BrowserRouter>
					<Route path='/'	exact component={Home}></Route>
					<Route path='/list' exact compoonent={List}></Route>
				</BrowserRouter>
			</div>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'));
