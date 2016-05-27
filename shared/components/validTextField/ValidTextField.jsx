import React from 'react';
import TextField from 'material-ui/TextField';


const regex = {
	email : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}
class ValidTextField extends React.Component{
	constructor(){
		super();
		this.state = {
			error: ""
		};
	}
	validate(event){
		let value = event.target.value;
		if(this.props.required && value.length == 0){
			this.setState({error: this.props.required});
			return;
		}
		if(this.props.email && !regex.email.test(value)){
			this.setState({error: this.props.email});
			return;
		}
		this.setState({error: ""});
	}
	
	render(){
		return (
			<TextField
				floatingLabelText={this.props.label}
				style={this.props.style}
				id={this.props.muiId}
				errorText={this.state.error}
				onChange={this.validate.bind(this)}
			/>
		);
	}
}

export default ValidTextField;