import React from 'react';
import Relay from 'react-relay';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Helmet from 'react-helmet';

import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';

import PollItem from '../../components/pollItem';

import debounce from '../../utils/debounce';

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

  constructor() {
    super();
    this.state = { done: false, loading: false };
    this.handleScroll = debounce(this.handleScroll, 250);
  }

  componentWillMount() {
    const { tab } = this.props.params;
    if (!explore[tab]) {
      this.context.router.replace('/explore/trending');
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    NProgress.done();
  }

  componentDidUpdate() {
    NProgress.done();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { relay, store } = this.props;
    const elm = this.refs.polls;
    if (elm && elm.clientHeight <= window.scrollY + 112 + elm.offsetTop + 500 && !this.state.loading) {
      if (store.polls.pageInfo.hasNextPage) {
        this.setState({ loading: true });
        NProgress.start();

        relay.setVariables({
          pageSize: relay.variables.pageSize + 20,
        }, ({ done }) => {
          if (done) {
            this.setState({ loading: false });
          }
        });
      }
      else {
        if (!this.state.done) {
          this.setState({ done: true });
        }
      }
    }
  }

  render() {
    const { tab } = this.props.params;

    let header = null;
    let title = null;
    if (explore[tab]) {
      header = <h1 className={s.header}>{explore[tab].header} Polls</h1>;
      if (explore[tab].header.toLowerCase() === 'search') {
        title = 'Search Polls';
      }
      else {
        title = `Explore ${explore[tab].header} Polls`;
      }
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
        <Helmet
          title={title}
        />

        <Paper zDepth={2} className="container center-text">
          {header}
          <div className={`${s.content}`}>
            <div className="row" ref="polls">
              {polls}
            </div>
            <div className="row">
              {this.state.loading || store.polls.pageInfo.hasNextPage ?
                <div className="loadmore">
                  <CircularProgress size={1.5} />
                </div> : ''
              }
              {this.state.done || !store.polls.pageInfo.hasNextPage ?
                <div className="loadmore-done">
                  <p>No more polls to load</p>
                </div> : ''
              }
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

Explore = withStyles(s)(Explore);

Explore = Relay.createContainer(Explore, {
  initialVariables: {
    pageSize: 20,
    sort: 'TRENDING',
    query: '',
  },

  fragments: {
    store: () => Relay.QL`
      fragment on Store{
        polls(orderBy: $sort, first: $pageSize, query: $query){
          pageInfo{
            hasNextPage
          },
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
