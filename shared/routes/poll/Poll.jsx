import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import RefreshIndicator from 'material-ui/RefreshIndicator';

import VoteArea from '../../components/voteArea';

let googleLoader;

function GoogleChartsLoader() {
  /* eslint-disable no-undef */
  const script = require('scriptjs'); // eslint-disable-line global-require
  this.loading = false;
  this.loaded = false;
  const self = this;
  this.load = () => {
    if (this.loading) {
      return this.promise;
    }
    this.loading = true;
    this.promise = new Promise((resolve) => {
      script('https://www.gstatic.com/charts/loader.js', () => {
        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(() => {
          self.loaded = true;
          resolve();
        });
      });
    });
    return this.promise;
  };
  /* eslint-enable no-undef */
}

function getGoogleChartsLoader() {
  if (!googleLoader) {
    googleLoader = new GoogleChartsLoader();
  }
  return googleLoader;
}

import s from './Poll.css';

class Poll extends React.Component {
  static defaultProps = {
    title: 'Example Title',
    choices: [
      ['Mushrooms', 3],
      ['Onions', 1],
      ['Olives', 1],
      ['Zucchini', 1],
      ['Pepperoni', 2],
    ],
    multi: false,
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    choices: React.PropTypes.array.isRequired,
    multi: React.PropTypes.bool,
  }

  constructor(props) {
    super();
    const { title, choices, multi } = props;
    this.state = {
      title,
      choices,
      multi,
    };
  }
	
  componentDidMount() {
		// if ((typeof google === 'undefined') || (typeof google.visualization === 'undefined'))
    this.loadGoogleCharts = getGoogleChartsLoader();
    const self = this;
    if (!this.loadGoogleCharts.loaded) {
      this.loadGoogleCharts.load().then(() => {
        self.drawChart();
      });
    }
    else {
      self.drawChart();
    }
  }

  componentDidUpdate() {
    if (this.loadGoogleCharts.loaded) {
      this.drawChart();
    }
  }

  onSubmitVote = () => {
  }

  drawChart() {
    const data = new google.visualization.DataTable(); // eslint-disable-line no-undef
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Votes');
    data.addRows(this.props.choices);

    const col = document.getElementById('chart-col');
    const width = col.clientWidth * 0.9;
		// Set chart options
    const options = {
      is3D: true,
      legend: { position: 'top', alignment: 'center', maxLines: 2, textStyle: { fontSize: 16 } },
      titlePosition: 'none',
      width,
      height: width,
    };

		// Instantiate and draw our chart, passing in some options.
    const chart = new google.visualization.PieChart( // eslint-disable-line no-undef
      document.getElementById('chart-div')
    );
    chart.draw(data, options);
  }

  render() {
    return (
      <div className="container ChartPage">
        <div className="row">
          <div id="chart-col" className="col-xs-12 col-md-7">
            <div id="chart-div">
              <div
                style={{
                  display: 'flex',
                  flex: '1',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ position: 'relative', alignSelf: 'center' }}>
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
            <VoteArea
              choices={this.props.choices}
              multi={this.props.multi}
              title={this.props.title}
              onSubmit={this.onSubmitVote}
            />
          </div>
        </div>
      </div>
		);
  }
}

export default withStyles(s)(Poll);
