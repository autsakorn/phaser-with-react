import React,{PropTypes} from 'react';

import {
	View,  Pages, Page, Navbar,Popup,NavRight,
	 Link,List,ListItem,FormLabel,FormInput,ListButton
} from 'framework7-react';
import {ActionSignUp} from '../actions/ActionAuthen';
import firebase from '../core/FirebaseApp';

export default class AppSignUpScreen extends React.Component{
	constructor(props){
		super(props);
		// console.log(firebase);
		this.state = {
			email:"",
			password:"",
			name:"",
			mobile:"",
		}
	}
	signup = () => {
		var {email,password,name,mobile} = this.state;
		if(email && password){
			firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // ...
				console.log(errorCode);
				alert(errorMessage);
			}).then((res)=>{
				console.log(res);
				if(res){
					firebase.auth().currentUser.sendEmailVerification().then(function() {
				        // Email Verification sent!
				        // [START_EXCLUDE]
				        alert('Sign Up Success and Email Verification Sent!');
								window.location = "";
				        // [END_EXCLUDE]

				  });
				}
			})
		}
	}
  render(){
    return(
      <Popup id="signup" opened={this.props.open}>
        <View navbarFixed>
          <Pages>
            <Page>
              <Navbar title="Sign up">
                <NavRight>
                  <Link onClick={()=>this.props.onOpenSingUp()}>Close</Link>
                </NavRight>
              </Navbar>
              <List form>
                <ListItem>
                  <FormLabel>Username</FormLabel>
                  <FormInput name="email" onChange={(e)=>this.setState({email:e.target.value})} placeholder="Email" type="text" />
                </ListItem>
                <ListItem>
                  <FormLabel>Password</FormLabel>
                  <FormInput name="password" onChange={(e)=>this.setState({password:e.target.value})} type="password" placeholder="Password" />
                </ListItem>

      					<ListButton style={{textAlign:'center'}} title="Sign Up" onClick={()=>this.signup()}/>
              </List>
            </Page>
          </Pages>
        </View>
      </Popup>
    )
  }
}

AppSignUpScreen.contextTypes = {
	framework7AppContext: PropTypes.object
};
