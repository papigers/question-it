import React from 'react';
import LoginForm from 'components/loginForm';
import LoginSocial from 'components/loginSocial';
import RegisterForm from 'components/registerForm';

if(process.env.BROWSER){
	require('./Login.scss');
}

class LoginPage extends React.Component{
	render(){
		return (
			<div className="Login">
			
				<div className="row">
					
					<div className="col-xs-12 col-md-7 col-md-push-5 Login-login">
						<h1 className="center-text">Login</h1>
						<LoginSocial />
						<h2 className="center-text">OR</h2>
						<LoginForm uniqueId="login-page" />
					</div>
					<div className="col-xs-12 col-md-5 col-md-pull-7 Login-register">
						<h1 className="center-text">Haven't joined yet?</h1>
						<RegisterForm uniqueId="login-page" />
					</div>
				</div>
			</div>
		);
	}
};

LoginPage.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};

export default LoginPage;