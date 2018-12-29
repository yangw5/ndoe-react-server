import React from 'react';
export default class List extends React.Component{
/*	  constructor(props) {
        super(props);
    }*/
    render () {
        return (
            <div>Link
            <p>你可以选择已下连接前往你想去的网站,大路由</p>
            	<ul>
            		<li>
            			<a href='#/detail'>Detail</a></li>
            		<li>
            			<a href='#/list'>List</a>
            		</li>
            		<li><a href='#/'>Home</a>
            			
            		</li>
            		<li><a href='#/notfound'>Notfound
            			
            		</a></li>
            	</ul>
            </div>
        )
    }
}