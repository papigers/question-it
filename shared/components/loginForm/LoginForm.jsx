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

class LoginForm extends React.Component {

  static propTypes = {
    uniqueId: React.PropTypes.string.isRequired,
  }
  
  constructor() {
    super();
    this.state = {
      pressed: false,
      maxValid: 2,
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
    this.setState({ pressed: true });
    this.validate.forEach(el => el._reactInternalInstance._renderedComponent._instance.validate()); // eslint-disable-line no-underscore-dangle, max-len
    if (this.state.maxValid !== this.state.numValid) {
      return;
    }
  }

  render() {
    return (
      <div>
        
        <ValidTextField
          muiId={`login-form-username-${this.props.uniqueId}`}
          style={styles.input}
          type="username&email"
          floatingLabelText="Username or Email"
          required="Oops, forgot me!"
          underlineStyle={styles.blackStyle}
          incValid={this.incValid}
          decValid={this.decValid}
          ref={this.setValidateRef}
        />
        
        <ValidTextField
          muiId={`login-form-pass-${this.props.uniqueId}`}
          style={styles.input}
          type="password"
          floatingLabelText="Password"
          required="Password is required."
          underlineStyle={styles.blackStyle}
          incValid={this.incValid}
          decValid={this.decValid}
          ref={this.setValidateRef}
        />

        <RaisedButton
          secondary
          label="Login"
          className="formButton"
          onClick={this.submit}
          disabled={this.state.pressed && (this.state.numValid !== this.state.maxValid)}
        />
      </div>
		);
  }
}

export default LoginForm;
