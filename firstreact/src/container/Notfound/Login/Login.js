import React from 'react';
 import {SetCookie,GetCookie} from '../../../assets/js/Cookies';
 import Storage from '../../../assets/js/Storages';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// import PropTypes from 'prop-types';
import axios from 'axios';
require('./login.css');
const style = {
  margin: 12,
};

class TextFieldExampleSimple extends React.Component{
   constructor(props) {
        super(props);
        this.state = {
            name:'',
            password:''
        };
    }
    componentWillMount(){
      var name=GetCookie("name");//获取账号  账号初始化
      var password=GetCookie("password");
       this.setState({
              name:name,
              password:password
            })
    }

    login= () =>{
      SetCookie('name',this.state.name);//设置账号cookie
      Storage.set('name',this.state.name);
      SetCookie('password',this.state.password);
     axios.get('http://localhost:8888/',{
        　params: { 'name': this.state.name,
                    'password': this.state.password
         }
      }).then(function(response){
          alert(response.data)
          console.log(response);
        })
        .catch(function(err){
          console.log(err);
        });

    }
    zc=()=>{
       var name=GetCookie("name");
       var name1=Storage.get('name');
       alert(name1);
    }

  render(){
    return(
      <MuiThemeProvider>
      <div className='login-text'>
        <TextField
          hintText="账号"
          floatingLabelText="手机号或邮箱"
          value={ this.state.name} 
          onChange={(event, newValue) => {
             this.setState({
              name:newValue
            })
          }}
        /><br />
        <TextField
          hintText="Password"
          floatingLabelText="密码"
          type="password"
          value={ this.state.password} 
          onChange={(event,newValue) =>{
            this.setState({
              password:newValue
            })
          }}
        /><br />
        <RaisedButton label="登录" primary={true} onClick={ this.login } style={style} />
        <RaisedButton label="注册" secondary={true} onClick={ this.zc} style={style} />
      </div>
      </MuiThemeProvider>
    )
  }
};

export default TextFieldExampleSimple;
