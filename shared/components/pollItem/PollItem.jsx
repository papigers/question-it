import React from 'react';
import Paper from 'material-ui/Paper';

import chartColors from './chartColors';

if(process.env.BROWSER){
	require('./PollItem.scss');
}

class PollItem extends React.Component{
	
	
	render(){
		let choices = this.props.choices;
		let colorSpread = choices.map((choice, i) => {
			return (
				<div key={i} className="PollItem-color-spread" style={{flexGrow: choice[1], backgroundColor: chartColors[i]}}>
				</div>
			);
		});
		
		return (
			<div className="col-xs-6 col-sm-4 col-md-3 col-xlg-2 PollItem">
				<Paper zDepth={2}>
					<div className="PollItem-color-spread-container top">
						{colorSpread}
					</div>
					<div className="PollItem-content">
						<h4>
							<span style={{color: this.context.muiTheme.palette.primary1Color}}>{this.props.username}</span> asked:
						</h4>
						<h2 className="center-text">{this.props.title}</h2>
						<div className="PollItem-gradinet-hide"></div>
					</div>
					<div className="PollItem-color-spread-container">
						{colorSpread}
					</div>
				</Paper>
			</div>
		);
	}
}

PollItem.contextTypes = {
	muiTheme: React.PropTypes.object.isRequired
};

export default PollItem;