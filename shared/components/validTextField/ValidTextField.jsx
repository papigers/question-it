import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import TextField from 'material-ui/TextField';

import s from './ValidTextField.css';

const regex = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line max-len
  username: /^([a-zA-Z0-9_-]+)$/,
};

const styles = {
  valid: {
    borderColor: '#3cba54',
    borderWidth: 2,
  },
};

class ValidTextField extends React.Component {

  static propTypes = {
    required: React.PropTypes.string,
    floatingLabelText: React.PropTypes.string,
    style: React.PropTypes.object,
    type: React.PropTypes.string,
    muiId: React.PropTypes.string,
    incValid: React.PropTypes.func,
    decValid: React.PropTypes.func,
    confirm: React.PropTypes.bool,
    min: React.PropTypes.number,
    max: React.PropTypes.number,
  }
  constructor() {
    super();
    this.state = {
      error: '',
      valid: false,
    };
  }

  valid = (error) => {
    if (error) {
      if (this.state.valid) {
        this.props.decValid();
      }
      this.setState({
        error,
        valid: false,
      });
    }
    else {
      if (!this.state.valid) {
        this.props.incValid();
      }
      this.setState({
        error: '',
        valid: true,
      });
    }
  }

  onBlur = (event) => {
    const value = event.target.value;
    this.validate(value);
  }
  
  validate = () => {
    if (this.props.type === 'password' && this.props.confirm) {
      if (this.refs.field.input.value !== this.refs.confirm.input.value) {
        return this.valid("The passwords don't match.");
      }
    }
    return this.validateAll(this.refs.field.input.value);
  } 
  
  validateAll = (value) => {
    if (this.props.required && value.length === 0) {
      return this.valid(this.props.required);
    }
    if (this.props.min && value.length < this.props.min) {
      return this.valid(`Must have length of at least ${this.props.min} characters.`);
    }
    
    if (this.props.max && value.length > this.props.max) {
      return this.valid(`Must have length no more than ${this.props.max} characters.`);
    }
    
    if (this.props.type === 'username' || this.props.type === 'username&email') {
      if (!regex.username.test(value)) {
        if (this.props.type !== 'username' && value.indexOf('@') > 0 && !regex.email.test(value)) {
          return this.valid('Not a valid email.');
        }
        return this.valid('Not a valid username.\nOnly letters, numbers, underscore and dash are allowed.');
      }
    }
    if (this.props.type === 'email') {
      if (!regex.email.test(value)) {
        return this.valid('Not a valid email.');
      }
    }
    return this.valid();
  }
	
  render() {
    const { confirm } = this.props;
    return (
      <div>
        <TextField
          {...this.props}
          className={`${s.field} ${this.state.focusField && s.focus}`}
          id={this.props.muiId}
          errorText={this.state.error}
          onBlur={this.onBlur}
          underlineStyle={this.state.valid ? styles.valid : null}
          onChange={() => this.setState({ error: '' })}
          ref="field"
        />
        {confirm &&
          <TextField
            {...this.props}
            className={`${s.field} ${this.state.focusConfirm && s.focus}`}
            id={`${this.props.muiId}_confirm`}
            floatingLabelText={`Confrim ${this.props.floatingLabelText}`}
            errorText={this.state.error}
            onBlur={this.onBlur}
            onChange={() => this.setState({ error: '' })}
            underlineStyle={this.state.valid ? styles.valid : null}
            ref="confirm"
          />
        }
      </div>
    );
  }
}

export default withStyles(s)(ValidTextField);
