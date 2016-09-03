import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import SocialButton from '../socialButton';

import s from './LoginSocial.css';

class LoginSocial extends React.Component {

  onClick = () => {
    sessionStorage.setItem('oauth-after-login', sessionStorage.getItem('after-login'));
  }

  render() {
    const buttons = ['facebook', 'google', 'linkedin'].map(
      (social, i) => <SocialButton type={social} key={i} link={`/login/${social}`} onClick={this.onClick} />);
    return (
      <div className={s.root}>
        {buttons}
      </div>
		);
  }
}

export default withStyles(s)(LoginSocial);
