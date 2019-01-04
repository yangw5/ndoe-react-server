import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuExampleSimple from '../material/MenuExampleSimple'
require('./Notfound.css');

export default class Home extends React.Component{
    render () {
        return (
            <MuiThemeProvider>
              <div className='notfound-containner'>


              </div>
               <div className='notfound-bottom'>
                <MenuExampleSimple />
              </div>
            </MuiThemeProvider>


        )
    }
}
