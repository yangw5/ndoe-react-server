	// 这是一个记事本小demo 
	import React,{Fragment}from 'react';
	import List from "./List.js"
	import PropTypes from 'prop-types';
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