import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
	input: {
		maxWidth: 500,
		margin: '0 auto',
		display: 'block'
	}
}

class LoginForm extends React.Component{
	render(){
		return (
			<div>
				<TextField
					floatingLabelText="Username or Email"
					id={"login-form-email-" + this.props.uniqueId}
					style={styles.input}
					type="email"
				/>
				<TextField
					id={"login-form-pass-" + this.props.uniqueId}
					floatingLabelText="Password"
					style={styles.input}
					type="password"
				/>
				<RaisedButton
					secondary={true}
					label="Login"
					className="LoginForm-btn"
				/>
			</div>
		);
	}
}

export default LoginForm;