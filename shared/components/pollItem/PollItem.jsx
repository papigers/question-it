import React from 'react';
import Paper from 'material-ui/Paper';

import chartColors from './chartColors';

import s from './PollItem.css';

class PollItem extends React.Component{
	
	
	render(){
		let choices = this.props.choices;
		let colorSpread = choices.map((choice, i) => {
			return (
				<div key={i} className="colorSpread" style={{flexGrow: choice[1], backgroundColor: chartColors[i]}}>
				</div>
			);
		});
		
		return (
			<div className={`col-xs-6 col-sm-4 col-md-3 col-xlg-2 ${s.root}`}>
				<Paper zDepth={2}>
					<div className={`${s.colorSpreadContainer} ${s.top}`}>
						{colorSpread}
					</div>
					<div className={s.content}>
						<h4>
							<span className={s.user}>{this.props.username}</span> asked:
						</h4>
						<h2 className="center-text">{this.props.title}</h2>
						<div className={s.gradinetHide}></div>
					</div>
					<div className={s.colorSpreadContainer}>
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