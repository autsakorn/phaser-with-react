import React from 'react';

import {
	View,  Pages, Page, Navbar,Popup,NavRight,ContentBlock,
	 Link,List,ListItem,FormLabel,FormInput,ListButton,ListLabel,Button
} from 'framework7-react';

import {ActionSignUpOtp,ActionLogin} from '../actions/ActionAuthen';

export default class AppSignUpConfirmOtp extends React.Component{
	constructor(props){
		super(props);
		this.state = {otp:""}
	}
	signUpOtp = () => {
		var {email,password,name,mobile} = this.props;
		var {otp} = this.state;
		ActionSignUpOtp(email,password,name,mobile,otp).then((res)=>{
			console.log(res);
			alert(res.message);
			ActionLogin(email, password).then((res)=>{
				window.location = "";
			});
		})
	}
  render(){
    return(
      <Popup id="confirmOtp" opened={this.props.open}>
        <View navbarFixed>
          <Pages>
            <Page>
              <Navbar title="Confirm OTP">
                <NavRight>
                  <Link onClick={this.props.onOpenSignUpConfirmOtp}>Close</Link>
                </NavRight>
              </Navbar>
              <List form>
                <ListItem>
                  <FormLabel>OTP</FormLabel>
                  <FormInput name="OTP" onChange={(e)=>this.setState({otp:e.target.value})} placeholder="OTP" type="text" />
                </ListItem>

      					<ListButton style={{textAlign:'center'}} title="Submit"
                  onClick={
                    ()=>{this.signUpOtp()}
                  } />

              </List>
            </Page>
          </Pages>
        </View>
      </Popup>
    )
  }
}
