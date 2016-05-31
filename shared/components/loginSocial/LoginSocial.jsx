import React from 'react';

import SocialButton from '../socialButton';

if(process.env.BROWSER){
	require('./LoginSocial.scss');
}

class LoginSocial extends React.Component{
	render(){
		return (
			<div className="LoginSocial">
				<SocialButton type='facebook' />
				<SocialButton type='twitter' />
				<SocialButton type='google' />
			</div>
		);
	}
}

export default LoginSocial;