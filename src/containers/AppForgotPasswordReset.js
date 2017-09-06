import React from 'react';

import {
	View,  Pages, Page, Navbar,Popup,NavRight,ContentBlock,
	 Link,List,ListItem,FormLabel,FormInput,ListButton
} from 'framework7-react';

import {ActionResetPassword} from '../actions/ActionAuthen';

export default class AppForgotPasswordReset extends React.Component{
	constructor(props){
		super(props);
		this.state = {password:"",otp:""};
	}
	resetPassword = () => {
		var {email} = this.props;
		var {password,otp} = this.state;
		var that = this;
		ActionResetPassword(email,password, otp).then((res)=>{
			console.log(res);
			that.props.onOpenForgotPasswordReset();
			that.props.onOpenForgotPassword();
		});
	}
  render(){

    return(
      <Popup id="ForgotPasswordReset" opened={this.props.open}>
        <View navbarFixed>
          <Pages>
            <Page>
              <Navbar title="New Password">
                <NavRight>
                  <Link onClick={this.props.onOpenForgotPasswordReset}>Close</Link>
                </NavRight>
              </Navbar>
              <List form>
                <ListItem>
                  <FormLabel>OTP</FormLabel>
                  <FormInput name="OTP" onChange={(e)=>this.setState({otp:e.target.value})} placeholder="OTP" type="text" />
                </ListItem>
                <ListItem>
                  <FormLabel>New Password</FormLabel>
                  <FormInput name="password" onChange={(e)=>this.setState({password:e.target.value})} type="password" placeholder="Password" />
                </ListItem>

                <ListButton style={{textAlign:'center'}} title="Submit"
                  onClick={()=>{this.resetPassword()}} />
              </List>
            </Page>
          </Pages>
        </View>
      </Popup>
    )
  }
}
