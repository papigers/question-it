import React from 'react';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

if(process.env.BROWSER){
	require('./Footer.scss');
}

class Footer extends React.Component{
	render(){
		return (
			
			<div>
				<h4 className="center-text">Created By Gershon Papi</h4>
				<p className="center-text" style={{padding: "0 20px", margin: 0}}>papigers93@gmail.com</p>
				<div className="center-div">
					<a href="http://www.facebook.com/GershonPapi" target="_blank">
						<IconButton iconClassName="fa fa-facebook" />
					</a>
					<a href="http://www.linkedin.com/in/gershonpapi" target="_blank">
						<IconButton iconClassName="fa fa-linkedin" />
					</a>
					<a href="http://github.com/papigers" target="_blank">
						<IconButton iconClassName="fa fa-github" />
					</a>
					<a href="mailto:papigers93@gmail.com" target="_blank">
						<IconButton iconClassName="fa fa-envelope" />
					</a>
				</div>
			</div>
			
		);
	}
}

Footer.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired
}



export default Footer;