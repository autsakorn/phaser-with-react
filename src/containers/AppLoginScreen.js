import React from 'react';
import {Login} from '../actions/ActionAuthen';

import {
	View,  Pages, Page, Button,
	List, ListItem,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput
} from 'framework7-react';
import LogoVspace from '../images/vspace-sky.png';
import {ActionLogin} from '../actions/ActionAuthen';
import firebase from '../core/FirebaseApp';
export class AppLoginScreen extends React.Component{
    constructor(props){
      super(props);
      this.state = {open:true,username:"",password:""}
    }
    // signIn = () => {
		// 	var {username,password} = this.state;
		// 	ActionLogin(username,password).then((res)=>{
		// 		console.log(res);
		// 		window.location = "";
		// 	})
    //   // localStorage.setItem("case_token","1");
    //   // this.setState({open:false});
    // }
		signIn() {
			var {username,password} = this.state;
			firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
				alert(errorMessage);
			  // ...
			}).then((res)=>{
				console.log(res);
				if(res){
					localStorage.setItem("case_token",res.uid);
					localStorage.setItem("case_email",res.email);
					window.location = "";
				}
			})

			// var credential = firebase.auth.FacebookAuthProvider.credential('321788724947836');
			//
			// // Sign in with credential from the Google user.
			// firebase.auth().signInWithCredential(credential).catch(function(error) {
			//   // Handle Errors here.
			//   var errorCode = error.code;
			//   var errorMessage = error.message;
			//   // The email of the user's account used.
			//   var email = error.email;
			//   // The firebase.auth.AuthCredential type that was used.
			//   var credential = error.credential;
			//   // ...
			// });
	  }

    render(){
      return(
      	<LoginScreen id="login-screen" opened={this.state.open}>
      		<View main url="/">
      			<Pages>
      				<Page loginScreen>
      					<LoginScreenTitle>HOMEWORK</LoginScreenTitle>
      					<List form>
      						<ListItem>
      							<FormLabel>Username</FormLabel>
      							<FormInput name="username" onChange={(e)=>this.setState({"username":e.target.value})} placeholder="Username" type="text" />
      						</ListItem>
      						<ListItem>
      							<FormLabel>Password</FormLabel>
      							<FormInput name="password" onChange={(e)=>this.setState({"password":e.target.value})} type="password" placeholder="Password" />
      						</ListItem>
      					</List>
      					<List>
      						<ListButton style={{background:'#00bcd4',color:'#ffffff',textAlign:'center'}} title="Sign In" onClick={()=>{this.signIn()}} />
      						<ListLabel>
                    <Button onClick={()=>this.props.onOpenSingUp()}>Sign Up</Button>
      						</ListLabel>
                  <ListLabel>
                    <Button onClick={()=>this.props.onOpenForgotPassword()}>Forgot Password</Button>
      						</ListLabel>

      					</List>
      				</Page>
      			</Pages>
      		</View>
      	</LoginScreen>
      );
    }
}
