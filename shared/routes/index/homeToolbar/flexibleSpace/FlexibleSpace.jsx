import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

import s from './FlexibleSpace.css';

class FlexibleSpace extends React.Component{
  static contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
    loggedOn: React.PropTypes.object
  };

	render(){
    let {loggedOn, muiTheme} = this.context;
		return (
			<div className={`container ${s.root}`}>
				<h1>QUESTION IT</h1>
				<img src={this.props.logo} className={s.logo} />
				<h2 style={{color: muiTheme.palette.accent2Color}} >Online Voting Application</h2>
				<p>Question It is an online voting application, inspired by a FreeCodeCamp project.<br/>
				It is created using React and Material-UI.</p>
				<RaisedButton
					linkButton={true}
					containerElement={
						<Link to={loggedOn ? "/polls/create" : "/login"} />
					}
					label={loggedOn ? 'Create Poll' : 'Join Us'}
					secondary={true}
					className={s.joinBtn}
			 	/>
			</div>
		);
	}
}

export default withStyles(s)(FlexibleSpace);
