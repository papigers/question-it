import React from 'react';
//import withStyles from 'isomorphic-style-loader/lib/withStyles';

import RegisterForm from '../registerForm';

class RegisterSection extends React.Component{
  render(){
    return (
      <div>
        <h1 className="center-text">Haven't joined yet?</h1>
        <RegisterForm uniqueId="login-page" />
      </div>
    );
  }
}

export default RegisterSection;
