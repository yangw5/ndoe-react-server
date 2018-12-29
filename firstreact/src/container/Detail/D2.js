import React from 'react';
export default class Detail extends React.Component{
    render () {
        return (
            <div>D2
				<p>你可以选择已下连接前往你想去的网站</p>
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
            </div>

        )
    }
}
