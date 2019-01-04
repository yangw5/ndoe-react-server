import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
// import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import SvgIcon from 'material-ui/SvgIcon';
import {   
  BrowserRouter as Router,
    Route,
    Link,} from 'react-router-dom'
import DMyInf from './MyInf/MyInf'
import MyShop from './MyShop/MyShop'
import ShopHome from './ShopHome/ShopHome'


require('./Notfound.css');


const iconStyles = {
  marginRight: 24,
};


const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <a href="#/login">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </a>
  </SvgIcon>
);


export default class Home extends React.Component{
    render () {
        return (
        <MuiThemeProvider>
          <div>
            <div className="gologn">
               <HomeIcon style={iconStyles} color={red500} hoverColor={greenA200} />
            </div>
            <Router>
              <div>
                  <div className='notfound-containner'>
                    <Route exact={true} path="/" component={ShopHome}  />
                    <Route path="/ShopHome"  component={ShopHome}></Route>
                    <Route path="/MyShop"  component={MyShop}></Route>
                    <Route path="/MyInf"  component={DMyInf}></Route>
                  </div>
                <div className='notfound-bottom'>
                    <div>
                     <Tabs>
                        <Tab icon={<FontIcon className="material-icons">
                          <Link to={'/ShopHome'}>首页</Link>
                        </FontIcon>} />
                        <Tab icon={<FontIcon className="material-icons">
                           <Link to={'/MyShop'}>订单信息</Link>
                        </FontIcon>} />
                        <Tab icon={<FontIcon className="material-icons">
                           <Link to={'/MyInf'}>个人信息</Link>
                        </FontIcon>} />
                      </Tabs>
                    </div>
                </div>
              </div>
            </Router>
          </div>
        </MuiThemeProvider>


        )
    }
}
