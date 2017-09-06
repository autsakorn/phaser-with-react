import React,{PropTypes} from 'react';
import {
	Framework7App, Statusbar,Views, View, Navbar, Pages, Page, ContentBlock,
	Link, NavRight, Popup,NavLeft,NavCenter
} from 'framework7-react';

import {routes} from '../routes';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import {AppLoginScreen} from './AppLoginScreen';
import {AppMainViews} from './AppMainViews';

import AppSignUpScreen from './AppSignUpScreen';
import AppSignUpConfirmOtp from './AppSignUpConfirmOtp';
import AppForgotPassword from './AppForgotPassword';
import AppForgotPasswordReset from './AppForgotPasswordReset';

import InfoGen from '../core/InfoGen';

class MainViews extends React.Component {
	render(){
		// if(InfoGen.token){
			return <Views>
		      <View id="main-view" dynamicNavbar={true} main url="/">
		        <Pages>
							<AppMainViews  />
						</Pages>
					</View>
				</Views>
		// }else{
		// 	return <AppLoginScreen onOpenSingUp={this.props.onOpenSingUp} onOpenForgotPassword={this.props.onOpenForgotPassword} />
		// }
	}
};
MainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};

const AppPopup = () => (
	<Popup id="popup">
		<View navbarFixed>
			<Pages>
				<Page>
					<Navbar title="Popup">
						<NavRight>
							<Link closePopup>Close</Link>
						</NavRight>
					</Navbar>
					<ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
				</Page>
			</Pages>
		</View>
	</Popup>
);
let currentRoute;
export const getCurrentRoute = () => currentRoute;
export class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			openSignUp:false,
			openSignUpConfirmOtp:false,
			openForgotPassword:false,
			openForgotPasswordReset:false,
			email:"",password:"",name:"",mobile:""
		};
	}
	onOpenSingUp = () => {
		this.setState({openSignUp:!this.state.openSignUp})
	}
	onOpenSignUpConfirmOtp = (email,password,name,mobile) => {
		this.setState({openSignUpConfirmOtp:!this.state.openSignUpConfirmOtp,email,password,name,mobile});
	}
	onOpenForgotPassword = () => {
		this.setState({openForgotPassword:!this.state.openForgotPassword});
	}
	onOpenForgotPasswordReset = (email) => {
		this.setState({openForgotPasswordReset:!this.state.openForgotPasswordReset,email});
	}
	render(){
		var {openSignUp,openSignUpConfirmOtp,openForgotPassword,openForgotPasswordReset,
		email,password,name,mobile} = this.state;
		return(
			//Change themeType to "material" to use the Material theme
			<Framework7App onRouteChange={route => currentRoute = route} themeType="material" routes={routes}>
				<Statusbar />
				<LeftPanel />
				<RightPanel />
				<MainViews onOpenSingUp={this.onOpenSingUp} onOpenForgotPassword={this.onOpenForgotPassword} />
				<AppPopup />
				<AppSignUpScreen
					open={openSignUp}
					onOpenSingUp={this.onOpenSingUp}
					onSignUpConfirmOtp={this.onOpenSignUpConfirmOtp}  />
				<AppSignUpConfirmOtp email={email} password={password} name={name} mobile={mobile}
					open={openSignUpConfirmOtp}
					onOpenSignUpConfirmOtp={this.onOpenSignUpConfirmOtp}
					 />
				<AppForgotPassword
					onOpenForgotPassword={this.onOpenForgotPassword}
					open={openForgotPassword}
					onOpenForgotPasswordReset={this.onOpenForgotPasswordReset} />
				<AppForgotPasswordReset
				 	open={openForgotPasswordReset} email={email}
					onOpenForgotPassword={this.onOpenForgotPassword}
					onOpenForgotPasswordReset={this.onOpenForgotPasswordReset} />
			</Framework7App>
		);
	}
}
