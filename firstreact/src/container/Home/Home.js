import React from 'react';
import  {createStore} from 'redux'
import reducer from '../../redux/Action.js';
import Todolist from '../../Http/Todolist';

const store =createStore(reducer)//创建store

export default class Home extends React.Component{
     constructor(props) {
        super(props);
        this.state = {
            count:0
        };
    }
    handleAdd = () => {
        store.dispatch({//调用acton方法修改store
            type: 'INCREMENT',//属性类型
            new:++this.state.count//传递的数据
        });
    }
    handleDel = () => {
        store.dispatch({
            type: 'DECREMENT',
            new:--this.state.count
        });
    }
    handleGet = () => {
        store.dispatch({
            type: 'getSource'
        })
    }
    gitstore=() =>{
       console.log(store.getState());
       /* return store.getState();*/
    }
    render () {
        let _this = this;
        store.subscribe(() => {
            let o = store.getState();
            _this.setState({
                [o.type]: store.getState()[o.type]
            })
        });
        return (
            <div>Home
            	<p>这home页面</p>
            	<p>你可以选择已下连接前往你想去的网站,大路由</p>
            	<ul>
            		<li>
            		 	<a href='#/detail'>Detail</a></li>
            		<li>
            			<a href='#/list'>List</a></li>
            		<li>
            			<a href='#/'>Home</a></li>
            		<li>
            			<a href='#/notfound'>Notfound</a></li>
            	</ul>
                <p>父子组件后台请求数据</p>
                <Todolist/>
                <p>reaux</p>
                <div>
                    <span>{ this.state.count }</span>
                    <button onClick={ this.handleAdd }>add</button>
                    <button onClick={ this.handleDel}>del</button>
                </div>

            </div>
        )
    }
}
