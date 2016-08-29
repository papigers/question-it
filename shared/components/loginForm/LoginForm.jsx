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
  
  static contextTypes= {
    router: React.PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.state = {
      pressed: false,
      maxValid: 2,
      numValid: 0,
      username: '',
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

  submit = (e) => {
    this.validate.forEach(el => el._reactInternalInstance._renderedComponent._instance.validate()); // eslint-disable-line no-underscore-dangle, max-len
    e.preventDefault();
    this.setState({ pressed: true });
    if (this.state.maxValid !== this.state.numValid) {
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/login/local', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json, application/xml, text/plain, text/html, *.*');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        let res;
        try {
          res = JSON.parse(xhr.responseText);

          if (xhr.status === 200) {
            window.location.href = res.redirect;
          }
          else {
            this.setState({ error: (res.error || 'Login failed, please try again later') });
          }
        }
        catch (err) {
          this.setState({ error: 'Login failed, please try again later' });
        }
      }
    };
    xhr.send(JSON.stringify({
      username: this.state.username,
      password: this.state.password,
    }));
  }

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.submit} action="/login" method="POST" ref="form">
        
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
          value={username}
          onChange={(e) => this.setState({ username: e.target.value })}
          name="username"
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
          value={password}
          onChange={(e) => this.setState({ password: e.target.value })}
          name="password"
        />

        <RaisedButton
          secondary
          label="Login"
          className="formButton"
          disabled={this.state.pressed && (this.state.numValid !== this.state.maxValid)}
          type="submit"
        />
        {this.state.error && <p className="center-text" style={{ color: '#ad9d9d' }}>{this.state.error}</p>}
      </form>
		);
  }
}

export default LoginForm;
