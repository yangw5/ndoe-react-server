import React from 'react';

import {   
	BrowserRouter as Router,
    Route,
    Link,} from 'react-router-dom'
import D from './D'
import D1 from './D1'
import D2 from './D2'

export default class Detail extends React.Component{
    render () {
        return (
            <div>Detail
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
            	<div>
	            	<Router>
	            		<div>
                            <p>点击你想去的连接,嵌套路由</p>

			            	<ul>
			            		<li> 
			            			<Link to={'/D1'} >D1</Link>
			            		</li>
			            		<li> 
			            			<Link to={'/D2'}>D2</Link>
			            		</li>
			            	</ul>
                            <p>Detail的子路由</p>
			            	<div>
			            		<hr/>
			             		<Route exact={true} path="/" component={D}  />
			            		<Route path="/D1"  component={D1}></Route>
			            		<Route path="/D2"  component={D2}></Route>
			           		 </div>
		           		 </div>
	            	</Router>
            	</div>
            	
            </div>
        )
    }
}
