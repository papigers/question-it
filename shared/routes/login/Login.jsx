import React from 'react';
import Relay from 'react-relay';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Helmet from 'react-helmet';

import LoginSection from '../../components/loginSection';
import RegisterForm from '../../components/registerForm';

import s from './Login.css';

class LoginPage extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    dialogController: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    location: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object,
  }
  
  componentDidMount() {
    if (this.props.viewer) {
      let redirect = '/';
      const { query } = this.props.location;
      if (query && query.callback) {
        redirect = sessionStorage.getItem('oauth-after-login') || '/';
      }
      this.context.router.replace(redirect);
      sessionStorage.removeItem('oauth-after-login');
    }
    NProgress.done();
  }

  componentWillUnmount() {
    sessionStorage.removeItem('after-login');
  }

  openRegisterDialog = () => {
    this.context.dialogController.openDialog({
      title: 'Haven\'t joined yet?',
      children: <RegisterForm uniqueId="register-page" />,
    });
  }
  
  render() {
    return (
      <div className={s.root}>
        <Helmet
          title="Login"
        />
        <div className={`row ${s.row}`}>
          
          <div className={`col-xs-12 ${s.login}`}>
            <LoginSection />
            <span className="center-text">
              Not registered yet?
              {' '}
              <a className={s.link} onClick={this.openRegisterDialog}>Join Now!</a>
            </span>
          </div>

        </div>
      </div>
		);
  }
}

LoginPage = withStyles(s)(LoginPage);

export default Relay.createContainer(LoginPage, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        id
      }
    `,
  },
});
