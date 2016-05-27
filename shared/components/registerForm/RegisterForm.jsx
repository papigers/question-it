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

class RegisterForm extends React.Component{
	render(){
		return (
			<div>
				<TextField
					floatingLabelText="Username"
					id={"register-form-username-" + this.props.uniqueId}
					style={styles.input}
				/>
				<TextField
					id={"register-form-pass-" + this.props.uniqueId}
					floatingLabelText="Password"
					style={styles.input}
					type="password"
				/>
				<TextField
					floatingLabelText="Email"
					id={"register-form-email-" + this.props.uniqueId}
					style={styles.input}
					type="email"
				/>
				<RaisedButton
					primary={true}
					fullWidth={true}
					label="Register"
					className="LoginForm-btn"
				/>
			</div>
		);
	}
}

export default RegisterForm;