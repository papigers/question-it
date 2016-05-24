import React from 'react';

import VoteArea from 'pages/chart/voteArea';

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
			legend: {position: 'top', alignment: 'center', maxLines: 2},
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
			this.drawChart();
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
	}
	
	render(){
		return (
			<div className="container ChartPage">
				<div className="row">
					<div id="chart-col" className="col-xs-12 col-md-7">
						<h2 className="center-no-margin">{this.props.title}</h2>
						<div id="chart-div">
						</div>
					</div>
					<div className="col-xs-12 col-md-5">
						<VoteArea choices={this.props.choices} multi={this.props.multi} title={this.props.title} onSubmit={this.onSubmitVote}/>
					</div>
				</div>
			</div>
		);
	}
}

export default ChartPage;