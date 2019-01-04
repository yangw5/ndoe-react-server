import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';


 class MyAwesomeReactComponent  extends React.Component{
   render(){
    return(
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
     
    );
  }
}


export default MyAwesomeReactComponent;