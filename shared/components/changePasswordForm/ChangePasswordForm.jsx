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

class ChangePasswordForm extends React.Component {

  static contextTypes = {
    dialogController: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    uniqueId: React.PropTypes.string.isRequired,
  }

  constructor() {
    super();
    this.state = {
      pressed: false,
      maxValid: 2,
      numValid: 0,
      oldPassword: '',
      newPassword: '',
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
    e.preventDefault();
    this.setState({ pressed: true });
    this.validate.forEach(el => el._reactInternalInstance._renderedComponent._instance.validate()); // eslint-disable-line no-underscore-dangle, max-len
    if (this.state.maxValid !== this.state.numValid) {
      return;
    }
    const { newPassword, oldPassword } = this.state;

    fetch('/change-password', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
    }).then(result => result.json()).then(json => {
      if (json.success) {
        this.setState({ error: '' });
        this.showSuccessDialog();
      }
      else {
        this.setState({ error: json.error });
      }
    });
  }

  showSuccessDialog = () => {
    this.context.dialogController.openDialog({
      title: 'Password Changed!',
      children: <h3 className="center-text">Your password has been changed successfuly!</h3>,
    });
  }

  render() {
    const { pressed, numValid, maxValid, newPassword, oldPassword, error } = this.state;
    return (
      <form onSubmit={this.submit}>

        <ValidTextField
          floatingLabelText="Old Password"
          muiId={`register-form-pass-${this.props.uniqueId}`}
          style={styles.input}
          type="password"
          required="Old Password is required."
          underlineStyle={styles.blackStyle}
          incValid={this.incValid}
          decValid={this.decValid}
          min={8}
          ref={this.setValidateRef}
          onChange={(e) => this.setState({ oldPassword: e.target.value })}
          value={oldPassword}
        />

        <ValidTextField
          floatingLabelText="New Password"
          muiId={`register-form-pass-${this.props.uniqueId}`}
          style={styles.input}
          type="password"
          required="New Password is required."
          underlineStyle={styles.blackStyle}
          incValid={this.incValid}
          decValid={this.decValid}
          min={8}
          ref={this.setValidateRef}
          onChange={(e) => this.setState({ newPassword: e.target.value })}
          value={newPassword}
          confirm
        />

        <RaisedButton
          secondary
          fullWidth
          label="Change Password"
          className="formButton"
          disabled={pressed && (numValid !== maxValid)}
          type="submit"
          onClick={this.submit}
        />
        <span className="center-text" style={{ color: '#ad9d9d' }}>{error}</span>
      </form>
		);
  }
}

export default ChangePasswordForm;
