	// 这是一个记事本小demo 
	import React,{Fragment}from 'react';
	import List from "./List.js"
	import PropTypes from 'prop-types';
	import axios from 'axios';
	
	export default class Todolist extends React.Component{
		constructor(props){
			super(props);
			this.state={
				inputvalue: '',
				list: []
			}
		}
		onChangeinput(e){
			this.setState({
				inputvalue:e.target.value
			})
		}
		onbutton(){
			if(this.state.inputvalue===""){
				alert("请输入内容");
				return;
			}
			this.setState({
				list:[...this.state.list,this.state.inputvalue],
				inputvalue: ''
				// inputvalue:""
			})
		}
		onbutton1(){
			//通过给定的ID来发送请求
			axios.get('http://localhost:8888/?ID=12345')
			  .then(function(response){
			  	alert(response.data)
			    console.log(response);
			  })
			  .catch(function(err){
			    console.log(err);
			  });
			//以上请求也可以通过这种方式来发送
			/*axios.get('/user',{
			  params:{
			    ID:12345
			  }
			})
			.then(function(response){
			  console.log(response);
			})
			.catch(function(err){
			  console.log(err);
			});*/

		}
		deleteon(index,event){
			const list=[...this.state.list];
			list.splice(index,1);
			this.setState({
				list:list
			})
		}
		

		render() {
			return (
				<Fragment>
					<div>
						<input value= { this.state.inputvalue } onChange={this.onChangeinput.bind(this)} ></input>
						<button onClick={this.onbutton.bind(this)}>提交</button>
						<button onClick={this.onbutton1.bind(this)}>请求后台数据</button>
					</div>
					<List data={this.state.list} deleteietm={this.deleteon.bind(this)}></List>
				</Fragment>
				)
		}
	}
Todolist.propTypes={
			inputvalue:PropTypes.number
		}
Todolist.defaultProps = {
  inputvalue:1
};