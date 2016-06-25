import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import ValidTextField from '../validTextField';

const styles = {
  input: {
    maxWidth: 500,
    margin: '0 auto',
    display: 'block',
  },
};

class RegisterForm extends React.Component {

  static propTypes = {
    uniqueId: React.PropTypes.string.isRequired,
  }
  render() {
    return (
      <div>
        <ValidTextField
          muiId={`register-form-username-${this.props.uniqueId}`}
          style={styles.input}
          label="Username"
          required="Username is required."
        />
			
        <TextField
          id={`register-form-pass-${this.props.uniqueId}`}
          floatingLabelText="Password"
          style={styles.input}
          type="password"
        />
        
        <TextField
          id={`register-form-pass-confirm-${this.props.uniqueId}`}
          floatingLabelText="Confirm Password"
          style={styles.input}
          type="password"
        />
        
        <TextField
          floatingLabelText="Email"
          id={`register-form-email-${this.props.uniqueId}`}
          style={styles.input}
          type="email"
        />

        <RaisedButton
          secondary
          fullWidth
          label="Register"
          className="formButton"
        />
      </div>
		);
  }
}

export default RegisterForm;
