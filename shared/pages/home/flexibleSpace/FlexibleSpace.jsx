import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

if(process.env.BROWSER)
	require('./FlexibleSpace.scss');

class FlexibleSpace extends React.Component{
	render(){
		return (
			<div className="container flexibleSpace">
				<h1>QUESTION IT</h1>
				<img src="/logo.png" className="logo" />
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
					className="FlexibleSpace-join-btn"
			 	/>
			</div>
		);
	}
}

FlexibleSpace.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};

export default FlexibleSpace;