import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import s from './SocialButton.css';


class SocialButton extends React.Component{
	
	render(){
		let type = this.props.type;
		return (
			<FloatingActionButton linkButton={true} className={`${s.root} ${s[type]}`} iconClassName={`icon-${type}`} />
		);
	}
}

export default withStyles(s)(SocialButton);