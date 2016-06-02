import React from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

import PollItem from '../../components/pollItem';

class Home extends React.Component{
	render(){ 
		return (
			<div className="container">
				<div className="row">
					<h1 className="center-text">Popular Polls</h1>
					<PollItem
						username="papigers"
						title="Example Title"
						choices={[
							['Mushrooms', 3],
							['Onions', 1],
							['Olives', 1],
							['Zucchini', 1],
							['Pepperoni', 2]
						]}
					/>
				</div>
				<div className="row">
					<h1 className="center-text">Recent Polls</h1>
					<PollItem
						username="papigers"
						title="Example Title"
						choices={[
							['Mushrooms', 3],
							['Onions', 1],
							['Olives', 1],
							['Zucchini', 1],
							['Pepperoni', 2]
						]}
					/>
				</div>
			</div>
		);
	}
};

export default Home;