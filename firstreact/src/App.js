import React from 'react'
import Todolist from './Todolist';

export default class App extends React.Component{

	render(){
		return (
			<div>
			<ul>
				<li>路由1</li>
				<li>路由2</li>
				<li>路由3</li>
				<li>路由4</li>
			</ul>
			<p>这是首页</p>
			<Todolist/>
			</div>
			)
	}

}
