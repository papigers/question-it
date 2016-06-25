import React from 'react';
import TextField from 'material-ui/TextField';


const regex = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line max-len
};
class ValidTextField extends React.Component {

  static propTypes = {
    required: React.PropTypes.boolean,
    email: React.PropTypes.boolean,
    label: React.PropTypes.string,
    style: React.PropTypes.object,
    muiId: React.PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      error: '',
    };
  }

  validate = (event) => {
    const value = event.target.value;
    if (this.props.required && value.length === 0) {
      this.setState({ error: this.props.required });
      return;
    }
    else if (this.props.email && !regex.email.test(value)) {
      this.setState({ error: this.props.email });
      return;
    }
    this.setState({ error: '' });
  }
	
  render() {
    return (
      <TextField
        floatingLabelText={this.props.label}
        style={this.props.style}
        id={this.props.muiId}
        errorText={this.state.error}
        onChange={this.validate}
      />
		);
  }
}

export default ValidTextField;
