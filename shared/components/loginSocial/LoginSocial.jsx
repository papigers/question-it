import React from 'react';

import SocialButton from '../socialButton';

import s from './LoginSocial.css';

class LoginSocial extends React.Component{
	render(){
		return (
			<div className={s.root}>
				<SocialButton type='facebook' />
				<SocialButton type='twitter' />
				<SocialButton type='google' />
			</div>
		);
	}
}

export default LoginSocial;