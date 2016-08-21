import React from 'react';
import Relay from 'react-relay';
import { RegisterUserMutation } from '../../mutations';

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
  
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.state = {
      pressed: false,
      maxValid: 3,
      numValid: 0,
      username: '',
      email: '',
      password: '',
      error: '',
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
    this.setState({ pressed: true });
    this.validate.forEach(el => el._reactInternalInstance._renderedComponent._instance.validate()); // eslint-disable-line no-underscore-dangle, max-len
    if (this.state.maxValid !== this.state.numValid) {
      return;
    }
    const { username, email, password } = this.state;
    Relay.Store.commitUpdate(new RegisterUserMutation({ username, email, password }), {
      onSuccess: ({ registerUser: res }) => {
        if (res.error) {
          this.setState({ error: res.error });
          return;
        }
        // this.context.router.push('/login/local');
      },
      onFailure: () => {
        this.setState({ error: 'Something went wrong, try again later.' });
      },
    });
  }

  render() {
    const { pressed, numValid, maxValid, username, email, password, error } = this.state;
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
          onChange={(e) => this.setState({ username: e.target.value })}
          value={username}
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
          onChange={(e) => this.setState({ email: e.target.value })}
          value={email}
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
          onChange={(e) => this.setState({ password: e.target.value })}
          value={password}
        />

        <RaisedButton
          secondary
          fullWidth
          label="Register"
          className="formButton"
          disabled={pressed && (numValid !== maxValid)}
          onClick={this.submit}
        />
        <span className="center-text" style={{ color: '#ad9d9d' }}>{error}</span>
      </div>
		);
  }
}

export default RegisterForm;
