import React from 'react';
import Relay from 'react-relay';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { DeletePollMutation } from '../../mutations';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import RaisedButton from 'material-ui/RaisedButton';

import VoteArea from '../../components/voteArea';
import UnavailablePoll from '../../components/unavailablePoll';

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

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  static propTypes = {
    store: React.PropTypes.object.isRequired,
    relay: React.PropTypes.object.isRequired,
    node: React.PropTypes.object,
    viewer: React.PropTypes.object,
  }
  
  constructor() {
    super();
    this.state = {
      loading: false,
      noVotes: false,
      deleteOpen: false,
      available: true,
    };
  }

  componentWillMount = () => {
    if (!this.props.node || this.props.node.deleted) {
      this.setState({ available: false });
    }
  }

  componentDidMount = () => {
    NProgress.done();

    if (this.state.avilable) {
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
  }

  componentDidUpdate = () => {
    if (this.loadGoogleCharts && this.loadGoogleCharts.loaded && !this.state.noVotes) {
      this.drawChart();
    }
  }

  getViewerVote = () => {
    if (!this.state.loading) {
      const { viewer } = this.props;
      const { votes } = this.props.node;

      if (!viewer) {
        return null;
      }

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
    // const height = document.getElementById('vote-col').clientHeight;

		// Set chart options
    const options = {
      is3D: true,
      legend: { position: 'top', alignment: 'center', maxLines: 2, textStyle: { fontSize: 16 } },
      titlePosition: 'none',
      width,
      height: width * 0.8,
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

  showDeleteDialog = () => {
    this.setState({ deleteOpen: true });
  }

  hideDeleteDialog = () => {
    this.setState({ deleteOpen: false });
  }

  deletePoll = () => {
    const { relay, store, viewer, node: poll } = this.props;
    const { router } = this.context;

    this.setState({ deleteOpen: false });
    relay.commitUpdate(new DeletePollMutation({ store, viewer, poll }), {
      onSuccess: (() => router.push('/explore')),

      // TODO: replace alert with a dialog.
      onFailure: (() => alert('Couldn\'t delete poll. Try again later...')),
    });
  }

  render = () => {
    const { node, store, viewer } = this.props;
    const { noVotes, available } = this.state;

    const deleteActions = [
      <FlatButton
        label="Cancel"
        secondary
        onTouchTap={this.hideDeleteDialog}
      />,
      <FlatButton
        label="Delete"
        primary
        onTouchTap={this.deletePoll}
      />,
    ];

    return available ? (
      <div className="container ChartPage">
        <div className="row">

          <div className={`col-xs-12 col-md-5 ${s.vote}`} id="vote-col">
            <VoteArea
              poll={node}
              viewer={viewer}
              store={store}
              loading={this.state.loading}
              selected={this.getViewerVote()}
              onSubmit={this.loadVotes}
            />
          </div>

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

          {
            node.author.id === viewer.id ?
              <RaisedButton
                label="Delete"
                primary
                className={`${s.deleteBtn} hide-md-down`}
                onMouseUp={this.showDeleteDialog}
              /> :
            null
          }
        </div>

        <Dialog
          title="Delete Poll?"
          actions={deleteActions}
          modal
          open={this.state.deleteOpen}
        >
          Are you sure you want to delete this poll? This cannot be undone.
        </Dialog>
      </div>
		) :
    (
      <UnavailablePoll />
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
        deleted,
        author{
          id,
        },
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
        ${VoteArea.getFragment('poll')},
        ${DeletePollMutation.getFragment('poll')}
      }
    `),
    viewer: (() => Relay.QL`
      fragment on User{
        id,
        ${VoteArea.getFragment('viewer')},
        ${DeletePollMutation.getFragment('viewer')}
      }
    `),
    store: (() => Relay.QL`
      fragment on Store{
        ${VoteArea.getFragment('store')},
        ${DeletePollMutation.getFragment('store')}
      }
    `),
  },
});

export default Poll;
