import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';

import s from './SocialButton.css';


class SocialButton extends React.Component{
	
	render(){
		let type = this.props.type;
		return type !== 'add' ? (
			<FloatingActionButton linkButton={true} className={`${s.root} ${s[type]} ${this.props.className}`} iconClassName={`icon-${type}`} />
		) :
    (
      <FloatingActionButton linkButton={true} className={`${s.root} ${s.disabled} ${this.props.className}`}>
        <AddIcon className={s.largeIcon} />
      </FloatingActionButton>
    );
	}
}

export default withStyles(s)(SocialButton);
