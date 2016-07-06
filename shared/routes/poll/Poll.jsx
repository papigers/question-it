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
    store: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object.isRequired,
    relay: React.PropTypes.object.isRequired,
  }
  
  constructor() {
    super();
    this.state = {
      loading: false,
      noVotes: false,
    };
  }

  componentDidMount = () => {
    this.loadGoogleCharts = getGoogleChartsLoader();
    if (!this.loadGoogleCharts.loaded) {
      this.loadGoogleCharts.load().then(() => {
        this.drawChart();
      });
    }
    else {
      this.drawChart();
    }
  }

  componentDidUpdate = () => {
    if (this.loadGoogleCharts.loaded && !this.state.noVotes) {
      this.drawChart();
    }
  }

  getViewerVote = () => {
    if (!this.state.loading) {
      const { viewer } = this.props;
      const { votes } = this.props.node;

      let votedOptions = null;
      votes.edges.some(({ node: vote }) => {
        if (vote.user.id === viewer.id) {
          votedOptions = vote.options;
          return true;
        }
        return false;
      });

      return votedOptions;
    }
    return null;
  }

  loadPage = () => {
    const { relay, node } = this.props;
    const { votesPageSize } = relay.variables;

    relay.setVariables({
      votesPageSize: votesPageSize + 30,
    }, ({ ready, done }) => {
      if (ready && done) {
        if (node.votes.pageInfo.hasNextPage) {
          this.loadPage();
        }
        else {
          this.setState({ loading: false }, this.drawChart);
        }
      }
    });
  }

  loadVotes = () => {
    if (!this.state.loading) {
      this.setState(
        { loading: true },
        this.loadPage
      );
    }
  }

  drawChart = () => {
    const { node } = this.props;
    const votes = node.options.map((option) => (
      [
        option,
        0,
      ]
    ));
    node.votes.edges.forEach(vote => vote.node.options.forEach(option => votes[option][1]++));

    const noVotes = votes.every(vote => vote[1] === 0);
    
    if (noVotes !== this.state.noVotes) {
      this.setState({ noVotes });
    }

    if (noVotes) {
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

    if (node.votes.pageInfo.hasNextPage && !this.state.loading) {
      this.loadVotes();
    }
  }

  render = () => {
    const { node, store, viewer } = this.props;
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
              poll={node}
              viewer={viewer}
              store={store}
              loading={this.state.loading}
              selected={this.getViewerVote()}
              onSubmit={this.loadVotes}
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
    votesPageSize: 30,
  },

  fragments: {
    node: (() => Relay.QL`
      fragments on Poll{
        options,
        votes(first: $votesPageSize){
          edges{
            node{
              user{
                id,
              }
              options
            }
          },
          pageInfo{
            hasNextPage,
          }
        },
        ${VoteArea.getFragment('poll')}
      }
    `),
    viewer: (() => Relay.QL`
      fragment on User{
        id,
        ${VoteArea.getFragment('viewer')}
      }
    `),
    store: (() => Relay.QL`
      fragment on Store{
        ${VoteArea.getFragment('store')}
      }
    `),
  },
});

export default Poll;
