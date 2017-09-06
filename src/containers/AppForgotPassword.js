import React from 'react';

import {
	View,  Pages, Page, Navbar,Popup,NavRight,ContentBlock,
	 Link,List,ListItem,FormLabel,FormInput,ListButton
} from 'framework7-react';

import {ActionForgot} from '../actions/ActionAuthen';
import firebase from '../core/FirebaseApp';

export default class AppForgotPassword extends React.Component{
	constructor(props){
		super(props);
		this.state = {email:""};
	}
	sendEmail = () => {
		var auth = firebase.auth();
		var emailAddress = this.state.email;

		auth.sendPasswordResetEmail(emailAddress).then(function(res) {
		  // Email sent.
			console.log(res);
			alert('Email sent');
		}, function(error) {
			alert(error.message);
			console.log(error);
		  // An error happened.
		});
	}
  render(){
    return(
      <Popup id="ForgotPassword" opened={this.props.open}>
        <View navbarFixed>
          <Pages>
            <Page>
              <Navbar title="Forgot password">
                <NavRight>
                  <Link onClick={this.props.onOpenForgotPassword}>Close</Link>
                </NavRight>
              </Navbar>
              <List form>
                <ListItem>
                  <FormLabel>Email</FormLabel>
                  <FormInput name="email" onChange={(e)=>this.setState({email:e.target.value})} placeholder="Email" type="text" />
                </ListItem>
                <ListButton style={{textAlign:'center'}} title="Send Email"
                  onClick={()=>this.sendEmail()} />
              </List>
            </Page>
          </Pages>
        </View>
      </Popup>
    )
  }
}
