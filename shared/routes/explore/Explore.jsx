import React from 'react';
import Relay from 'react-relay';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Paper from 'material-ui/Paper';

import PollItem from '../../components/pollItem';

import s from './Explore.css';

const explore = {
  trending: {
    header: 'Trending',
    sort: 'TRENDING',
  },
  top: {
    header: 'Top',
    sort: 'TOP',
  },
  recent: {
    header: 'Recent',
    sort: 'RECENT',
  },
  search: {
    header: 'Search',
    sort: 'TOP',
  },
};

class Explore extends React.Component {

  static propTypes = {
    location: React.PropTypes.object.isRequired,
    routes: React.PropTypes.array.isRequired,
    params: React.PropTypes.object.isRequired,
    relay: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  componentWillMount() {
    const { tab } = this.props.params;
    if (!explore[tab]) {
      this.context.router.replace('/explore/trending');
    }
  }

  render() {
    const { tab } = this.props.params;

    let header = null;
    if (explore[tab]) {
      header = <h1 className={s.header}>{explore[tab].header} Polls</h1>;
    }

    const { store } = this.props;
    const polls = store.polls.edges.map(({ node }) => (
      <PollItem
        key={node.id}
        poll={node}
      />
    ));

    return (
      <div className={s.root}>
        <Paper zDepth={2} className="container center-text">
          {header}
          <div className={`${s.content}`}>
            {polls}
          </div>
        </Paper>
      </div>
    );
  }
}

Explore = withStyles(s)(Explore);

Explore = Relay.createContainer(Explore, {
  initialVariables: {
    limit: 12,
    sort: 'TRENDING',
    query: '',
  },

  fragments: {
    store: () => Relay.QL`
      fragment on Store{
        polls(orderBy: $sort, first: $limit, query: $query){
          edges{
            node{
              id,
              ${PollItem.getFragment('poll')}
            }
          }
        }
      }
    `,
  },
});

export default Explore;
