import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const types = {
	facebook: {class: 'facebook', icon: 'fa-facebook'},
	twitter: {class: 'twitter', icon: 'fa-twitter'},
	google: {class: 'google', icon: 'fa-google'}
};

if(process.env.BROWSER){
	require('./SocialButton.scss');
}

class SocialButton extends React.Component{
	render(){
		let type = types[this.props.type];
		
		return (
			<FloatingActionButton linkButton={true} className={`SocialButton ${type.class}`} iconClassName={`fa ${type.icon}`} />
		);
	}
}

export default SocialButton;