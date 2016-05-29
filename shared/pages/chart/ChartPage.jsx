import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import VoteArea from 'components/voteArea';


const GoogleChartsLoader = function(){
	let script = require('scriptjs');
	this.loading = false;
	this.loaded = false;
	let self = this;
	this.load = function(){
		if(this.loading)
			return this.promise;
		this.loading = true;
		this.promise = new Promise((resolve, reject) => {
			script("https://www.gstatic.com/charts/loader.js", () => {
				google.charts.load('current', {'packages':['corechart']});
				google.charts.setOnLoadCallback(() =>{
					self.loaded = true;
					resolve();
				});
			});
		});
		return this.promise;
	};
}

let loadGoogleCharts;

if(process.env.BROWSER){
	require('./ChartPage.scss');
	 loadGoogleCharts = new GoogleChartsLoader();
}

class ChartPage extends React.Component{
	constructor(props){
		super();
		this.loadGoogleCharts = loadGoogleCharts;
		const {title, choices, multi} = props;
		this.state= {
			title,
			choices,
			multi
		}	
	}
	
	drawChart(){
		let data = new google.visualization.DataTable();
		data.addColumn('string', 'Topping');
		data.addColumn('number', 'Votes');
		data.addRows(this.props.choices);
		
		let col = document.getElementById("chart-col"),
				width = col.clientWidth * .9;
		// Set chart options
		var options = {
			'is3D': true,
			legend: {position: 'top', alignment: 'center', maxLines: 2, textStyle: {fontSize: 16}},
			titlePosition: 'none',
			width,
			height: width
		};

		// Instantiate and draw our chart, passing in some options.
		var chart = new google.visualization.PieChart(document.getElementById('chart-div'));
		chart.draw(data, options);
	}
	
	componentDidMount(){
		let self = this;
		if (!this.loadGoogleCharts.loaded){
			this.loadGoogleCharts.load().then(function(){
				self.drawChart();
			});
		}
		else
			self.drawChart();
	}

	componentDidUpdate(){
		if (this.loadGoogleCharts.loaded){
			this.drawChart();
		};
	}
	
	static defaultProps = {
			title: 'Example Title',
			choices: [
				['Mushrooms', 3],
				['Onions', 1],
				['Olives', 1],
				['Zucchini', 1],
				['Pepperoni', 2]
			],
			multi: true
		}
	
	onSubmitVote(){
		console.log("got here");
		let choices = this.state.choices;
		console.log(choices);
		choices[1][1] += 2;
		console.log(choices);
		this.setState({choices});
	}
	
	render(){
		return (
			<div className="container ChartPage">
				<div className="row">
					<div id="chart-col" className="col-xs-12 col-md-7">
						<div id="chart-div">
							<div style={{ display: "flex", flex: "1", alignItems: "center", justifyContent: "center" }}>
								<div style={{ position: "relative", alignSelf: "center" }}>
									<RefreshIndicator
										size={90}
										left={-50}
										top={150}
										status="loading"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-md-5">
						<VoteArea choices={this.props.choices} multi={this.props.multi} title={this.props.title} onSubmit={this.onSubmitVote.bind(this)}/>
					</div>
				</div>
			</div>
		);
	}
}

export default ChartPage;