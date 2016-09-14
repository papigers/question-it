import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Dialog from 'material-ui/Dialog';

import ChangePasswordForm from '../changePasswordForm';

import s from './UserPassword.css';

class UserPassword extends React.Component {

  constructor() {
    super();
    this.state = {
      changePassword: false,
    };
  }

  openChangePassword = () => this.setState({ changePassword: true })

  closeChangePassword = () => this.setState({ changePassword: false })

  render() {
    return (
      <div>
        <h2 className="categoryHeader">Change Password</h2>
        <Paper zDepth={2} className="category">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <ListItem className="item center-text" disabled>
                Change password
              </ListItem>
              <RaisedButton
                label="change"
                secondary
                className={s.pwdButton}
                onClick={this.openChangePassword}
              />
              <Subheader className="subheader center-text">If you remember your old one</Subheader>
            </div>

            <div className="col-xs-12 col-md-6">
              <ListItem className="item center-text" disabled>
                Reset password
              </ListItem>
              <RaisedButton
                label="reset"
                secondary
                className={s.pwdButton}
                disabled
              />
              <Subheader className="subheader center-text">
                We will send you a new one to your email
                <br />
                <i>Currently not supported</i>
              </Subheader>
            </div>
          </div>
        </Paper>

        <Dialog
          title="Change Password"
          titleClassName={`center-text ${s.dialogTitle}`}
          open={this.state.changePassword}
          onRequestClose={this.closeChangePassword}
          autoScrollBodyContent
        >
          <ChangePasswordForm uniqueId="change-password" />
        </Dialog>

      </div>
    );
  }
}

export default withStyles(s)(UserPassword);
