import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../container/Home/Home'
import List from '../container/List/List'
import Detail from '../container/Detail/Detail'
import Notfound from '../container/Notfound/Notfound'
import Login from '../container/Notfound/Login/Login'


const BasicRoute = () => (
    <HashRouter >
        <Switch>
              <Route  exact path="/" component={Home}/>
			  <Route exact  path="/list" component={List}/>
			  <Route exact path="/detail" component={Detail}/>
			  <Route exact path="/notfound" component={Notfound}/>
			  <Route exact path="/login" component={Login}/>
        </Switch>
    </HashRouter>
);

export default BasicRoute