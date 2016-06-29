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
  new: {
    header: 'New',
    sort: 'NEW',
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
//    if (!this.props.location.query.q) {
//      this.context.router.push('/explore');
//    }
  }

//  componentDidMount() {
//    this.unregister = this.context.router.listen(this.locationHasChanged);
//    console.log(this.unregister);
//  }
//
//  componentWillUnmount() {
//    this.unregister();
//  }
//
//  locationHasChanged = (location) => {
//    console.log(this.context.router);
//    const { tab } = this.props.params;
//    console.log(tab, location);
//    this.props.relay.setVariables({
//      sort: explore[tab].sort,
//    });
//  }

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
  },

  fragments: {
    store: () => Relay.QL`
      fragment on Store{
        polls(orderBy: $sort, first: $limit){
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
