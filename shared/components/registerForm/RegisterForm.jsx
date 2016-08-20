import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import ValidTextField from '../validTextField';

const styles = {
  input: {
    maxWidth: 500,
    margin: '0 auto',
    display: 'block',
  },
  blackStyle: {
    borderColor: 'black',
  },
};

class RegisterForm extends React.Component {

  static propTypes = {
    uniqueId: React.PropTypes.string.isRequired,
  }
  
  constructor() {
    super();
    this.state = {
      maxValid: 3,
      numValid: 0,
    };
  }

  componentWillMount() {
    this.validate = [];
  }

  setValidateRef = (el) => {
    this.validate.push(el);
  }

  incValid = () => this.setState({ numValid: this.state.numValid + 1 });

  decValid = () => this.setState({ numValid: this.state.numValid - 1 });

  submit = () => {
    this.validate.forEach(el => el.validate());
    if (this.state.maxValid !== this.state.numValid) {
      return;
    }
  }

  render() {
    return (
      <div>
        <ValidTextField
          muiId={`register-form-username-${this.props.uniqueId}`}
          style={styles.input}
          type="username"
          floatingLabelText="Username"
          required="Username is required."
          underlineStyle={styles.blackStyle}
          incValid={this.incValid}
          decValid={this.decValid}
          min={6}
          max={12}
          ref={this.setValidateRef}
        />
        
        <ValidTextField
          floatingLabelText="Email"
          muiId={`register-form-email-${this.props.uniqueId}`}
          style={styles.input}
          type="email"
          required="Email is required."
          underlineStyle={styles.blackStyle}
          incValid={this.incValid}
          decValid={this.decValid}
          ref={this.setValidateRef}
        />
			
        <ValidTextField
          floatingLabelText="Password"
          muiId={`register-form-pass-${this.props.uniqueId}`}
          style={styles.input}
          type="password"
          required="Password is required."
          confirm
          underlineStyle={styles.blackStyle}
          incValid={this.incValid}
          decValid={this.decValid}
          min={8}
          ref={this.setValidateRef}
        />

        <RaisedButton
          secondary
          fullWidth
          label="Register"
          className="formButton"
          disabled={this.state.numValid !== this.state.maxValid}
          onClick={this.submit}
        />
      </div>
		);
  }
}

export default RegisterForm;
