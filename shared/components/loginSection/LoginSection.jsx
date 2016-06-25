import React from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';

import LoginForm from '../loginForm';
import LoginSocial from '../loginSocial';

// import s from './LoginSection.css';

class LoginSection extends React.Component {
  render() {
    return (
      <div>
        <h1 className="center-text">Login</h1>
        <LoginSocial />
        <h2 className="center-text">OR</h2>
        <LoginForm uniqueId="login-page" />
      </div>
    );
  }
}

export default LoginSection;
