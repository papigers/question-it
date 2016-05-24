import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

if(process.env.BROWSER){
	require('./LoginSocial.scss');
}

class LoginSocial extends React.Component{
	render(){
		return (
			<div className="LoginSocial">
					<FloatingActionButton linkButton={true} className="LoginSocial-btn LoginSocial-fb" iconClassName="fa fa-facebook" />
				
					<FloatingActionButton linkButton={true} className="LoginSocial-btn LoginSocial-tw" iconClassName="fa fa-twitter" />
				
					<FloatingActionButton linkButton={true} className="LoginSocial-btn LoginSocial-gg" iconClassName="fa fa-google" />
				
			</div>
		);
	}
}

export default LoginSocial;