import React from "react";
require('./common.css');
export default class List extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:'1213'
		}
	}
	componentDidMount() {

  }
  componentWillUnmount() {

  }
  deleteitem = (index,event) => {
  	this.props.deleteietm(index);
  }
	render(){
		return (
			<div>
				<ul>
					{
						this.props.data.map((item,index)=>{
							return (
								<div key={index} className='iteamli'>
									<li>{item}</li>
									<button onClick={this.deleteitem.bind(this,index)}>删除</button>
								</div>
								)
						})
					}
				</ul>
			</div>
			)
	}
}