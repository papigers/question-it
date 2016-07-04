import React from 'react';
import Relay from 'react-relay';
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

  static propTypes = {
    node: React.PropTypes.object.isRequired,
  }

  constructor() {
    super();
    this.state = {
      noVotes: false,
    };
  }

  componentDidMount() {
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
    if (this.loadGoogleCharts.loaded && !this.state.noVotes) {
      this.drawChart();
    }
  }

  onSubmitVote = () => {
  }

  drawChart() {
    const { node } = this.props;
    const votes = node.options.map((option) => (
      [
        option,
        0,
      ]
    ));
    node.votes.edges.forEach(vote => vote.node.options.forEach(option => votes[option][1]++));

    const noVotes = votes.every(vote => vote[1] === 0);
    if (noVotes) {
      this.setState({ noVotes });
      return;
    }

    const data = new google.visualization.DataTable(); // eslint-disable-line no-undef
    data.addColumn('string', 'Options');
    data.addColumn('number', 'Votes');
    data.addRows(votes);

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
    const { node } = this.props;
    const { noVotes } = this.state;

    return (
      <div className="container ChartPage">
        <div className="row">
          <div id="chart-col" className="col-xs-12 col-md-7">
            <div id="chart-div">
              {(noVotes)
                ?
                <div className="center-text" style={{ marginTop: 50 }}>
                  <h1>No Votes</h1>
                  <h3>Be the first!</h3>
                </div>
                :
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
              }
            </div>
          </div>

          <div className="col-xs-12 col-md-5">
            <VoteArea
              choices={node.options}
              title={node.title}
              multi={node.multi}
              onSubmit={this.onSubmitVote}
            />
          </div>
        </div>
      </div>
		);
  }
}

Poll = withStyles(s)(Poll);

Poll = Relay.createContainer(Poll, {
  initialVariables: {
    optionLimit: 10,
  },

  fragments: {
    node: (() => Relay.QL`
      fragments on Poll{
        id,
        title,
        multi,
        options,
        votes(first: $optionLimit){
          edges{
            node{
              options
            }
          }
        }
      }
    `),
  },
});

export default Poll;
