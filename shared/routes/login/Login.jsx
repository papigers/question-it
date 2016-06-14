import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Dialog from 'material-ui/Dialog';
import RegisterSection from '../../components/registerSection';
import LoginSection from '../../components/loginSection';
import RegisterForm from '../../components/registerForm';

import s from './Login.css';

class LoginPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  
  handleClose(){
    this.setState({open: !this.state.open});
  }
  
	render(){
		return (
			<div className={s.root}>
			
				<div className={`row ${s.row}`}>
					
					<div className={`col-xs-12 ${s.login}`}>
						<LoginSection />
            <span className="center-text">Not registered yet? <a className={s.link} onClick={()=> this.setState({open: true})}>Join Now!</a></span>
					</div>
          
				</div>
        
        <Dialog
          title="Haven't joined yet?"
          titleClassName={"center-text " + s.dialogTitle}
          //bodyClassName={}
          open={this.state.open}
          onRequestClose={this.handleClose.bind(this)}
          autoScrollBodyContent={true}
        >
          <RegisterForm />
        </Dialog>
        
			</div>
		);
	}
};

LoginPage.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};

export default withStyles(s)(LoginPage);
