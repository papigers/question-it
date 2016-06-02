import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

import s from './FlexibleSpace.css';

class FlexibleSpace extends React.Component{
	render(){
		return (
			<div className={`container ${s.root}`}>
				<h1>QUESTION IT</h1>
				<img src={this.props.logo} className={s.logo} />
				<h2 style={{color: this.context.muiTheme.palette.accent2Color}} >Online Voting Application</h2>
				<p>Question It is an online voting application, inspired by a FreeCodeCamp project.<br/>
				It is created using React and Material-UI.</p>
				<RaisedButton 
					linkButton={true}
					containerElement={
						<Link to="/login"/>
					}
					label='Join Us'
					secondary={true}
					className={s.joinBtn}
			 	/>
			</div>
		);
	}
}

FlexibleSpace.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};

export default withStyles(s)(FlexibleSpace);