import React from 'react';
import Relay from 'react-relay';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from 'react-router/lib/Link';

import RaisedButton from 'material-ui/RaisedButton';

import PollItem from '../../components/pollItem';

import s from './Home.css';

class Home extends React.Component {

  static propTypes = {
    store: React.PropTypes.object.isRequired,
  }

  render() {
    const { store } = this.props;
    const polls = store.polls.edges.map(({ node }) => (
      <PollItem
        key={node.id}
        poll={node}
      />
    ));

    return (
      <div className="container">
        <div className="row">
          <h1 className="center-text">
            Trending Polls
          </h1>

          <RaisedButton
            linkButton
            containerElement={
              <Link to="/explore" />
            }
            label="Explore More"
            className={s.exploreBtn}
            primary
          />

          <div>
            {polls}
          </div>
        </div>
      </div>
		);
  }
}

Home = withStyles(s)(Home);

Home = Relay.createContainer(Home, {

  initialVariables: {
    limit: 4,
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

export default Home;
