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
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
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
    rowsMax: React.PropTypes.number,
    focusHighlight: React.PropTypes.bool,
    focusOnInvalid: React.PropTypes.bool,
    counter: React.PropTypes.bool,
    focus: React.PropTypes.bool,
    value: React.PropTypes.string,
  }

  static defaultProps = {
    focusHighlight: true,
  }

  constructor(props) {
    super();
    this.state = {
      error: props.counter && props.max ? `${props.value && props.value.length || 0}/${props.max}` : '',
      valid: false,
    };
  }

  componentDidMount() {
    if (this.props.focus) {
      const input = this.refs.field.input.focus ? this.refs.field.input : this.refs.field.input.refs.input;
      input.focus();
    }
  }

  onBlur = (event) => {
    const callback = (valid) => {
      if (!valid && this.props.focusOnInvalid) {
        event.preventDefault();
        this.refs.field.input.focus();
      }
      if (this.props.onBlur) {
        this.props.onBlur(event, valid);
      }
    };
    this.validate(callback);
  }

  onChange = (event, value, confirm) => {
    if (this.props.counter && this.props.max) {
      event.target.value = event.target.value.substring(0, this.props.max);
      if (this.props.rowsMax) {
        let lines = event.target.value.split('\n');
        if (lines.length > this.props.rowsMax) {
          lines = lines.slice(0, this.props.rowsMax);
        }
        event.target.value = lines.join('\n');
      }
      this.setState({
        error: `${event.target.value.length}/${this.props.max}`,
      });
    }
    else {
      this.setState({
        error: '',
      });
    }
    if (!confirm && this.props.onChange) {
      this.props.onChange(event, value);
    }
  }

  valid = (error, callback) => {
    const callCallback = !!(callback && callback.constructor && callback.call && callback.apply);
    if (error) {
      if (this.state.valid && this.props.decValid) {
        this.props.decValid();
      }
      this.setState({
        error,
        valid: false,
      }, () => callCallback ? callback(false) : null);
    }
    else {
      if (!this.state.valid && this.props.incValid) {
        this.props.incValid();
      }
      this.setState({
        error: '',
        valid: true,
      }, () => callCallback ? callback(true) : null);
    }
  }
  
  validate = (callback) => {
    if (this.props.type === 'password' && this.props.confirm) {
      if (this.refs.field.input.value !== this.refs.confirm.input.value) {
        return this.valid("The passwords don't match.", callback);
      }
    }
    return this.validateAll(this.refs.field.input.value, callback);
  }
  
  validateAll = (value, callback) => {
    if (this.props.required && value.length === 0) {
      return this.valid(this.props.required, callback);
    }
    if (this.props.min && value.length < this.props.min && value.length !== 0) {
      return this.valid(`Must have length of at least ${this.props.min} characters.`, callback);
    }
    
    if (this.props.max && value && value.length > this.props.max) {
      return this.valid(`Must have length no more than ${this.props.max} characters.`, callback);
    }
    
    if (this.props.type === 'username' || this.props.type === 'username&email') {
      if (!regex.username.test(value)) {
        if (this.props.type === 'username&email' && value.indexOf('@') > 0 && !regex.email.test(value)) {
          return this.valid('Not a valid email.', callback);
        }
        else if (this.props.type === 'username') {
          return this.valid('Not a valid username.\nOnly letters, numbers, underscore and dash are allowed.', callback);
        }
      }
    }
    if (this.props.type === 'email') {
      if (!regex.email.test(value)) {
        return this.valid('Not a valid email.', callback);
      }
    }
    return this.valid(null, callback);
  }
	
  render() {
    const { confirm, focusHighlight } = this.props;
    const inputProps = Object.assign({}, this.props);
    [
      'required', 'muiId', 'incValid', 'decValid',
      'confirm', 'min', 'max', 'rowsMax', 'focusHighlight',
      'focusOnInvalid', 'counter', 'focus',
    ].forEach(key => delete inputProps[key]);

    const confirmProps = Object.assign({}, inputProps);
    delete confirmProps.value;

    return (
      <div>
        <TextField
          {...inputProps}
          className={`${s.field} ${focusHighlight ? s.focusHighlight : ''}`}
          id={this.props.muiId}
          errorText={this.state.error}
          onBlur={this.onBlur}
          onChange={this.onChange}
          underlineStyle={this.state.valid ? styles.valid : null}
          ref="field"
        />
        {confirm &&
          <TextField
            {...confirmProps}
            className={`${s.field} ${focusHighlight ? s.focusHighlight : ''}`}
            id={`${this.props.muiId}_confirm`}
            floatingLabelText={`Confrim ${this.props.floatingLabelText}`}
            errorText={this.state.error}
            onBlur={this.onBlur}
            onChange={(e, v) => this.onChange(e, v, true)}
            underlineStyle={this.state.valid ? styles.valid : null}
            ref="confirm"
          />
        }
      </div>
    );
  }
}

export default withStyles(s)(ValidTextField);
