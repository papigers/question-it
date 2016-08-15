import React from 'react';
import Relay from 'react-relay';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from 'react-router/lib/Link';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { ListItem } from 'material-ui/List';

import s from './UserStats.css';

class UserStats extends React.Component {

  static propTypes = {
    user: React.PropTypes.object.isRequired,
  }

  render() {
    const { user } = this.props;
    const polls = user.polls.edges;
    const topPoll = polls[0] && polls[0].node;

    return (
      <div>
        <h2 className="categoryHeader">Stats</h2>
        <Paper zDepth={2} className="category">
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <Subheader className="subheader">Polls:</Subheader>
              <ListItem className="item" disabled>
                <span className={s.stat}>{user.pollCount}</span>
              </ListItem>
            </div>

            <div className="col-xs-6 col-md-3">
              <Subheader className="subheader">Votes:</Subheader>
              <ListItem className={s.item} disabled>
                <span className={s.stat}>{user.voteCount}</span>
              </ListItem>
            </div>

            <div className="col-xs-6 col-md-3">
              <Subheader className="subheader">Votes Recieved:</Subheader>
              <ListItem className="item" disabled>
                <span className={s.stat}>{user.recievedVotesCount}</span>
              </ListItem>
            </div>

            <div className="col-xs-6 col-md-3">
              <Subheader className="subheader">Most Voted Poll:</Subheader>
              <ListItem className="item" disabled>
                {topPoll ?
                  <Link className={s.stat} to={`/poll/${topPoll.id}`}>
                    {topPoll.title}
                  </Link>
                  : <span className={s.stat}>No Polls</span>
                }
              </ListItem>
            </div>

          </div>
        </Paper>
      </div>
    );
  }
}

UserStats = withStyles(s)(UserStats);

UserStats = Relay.createContainer(withStyles(s)(UserStats), {
  fragments: {
    user: (() => Relay.QL`
      fragment on User{
        polls(orderBy: TOP, first: 1){
          edges{
            node{
              id,
              title,
            }
          },
        },
        pollCount,
        voteCount,
        recievedVotesCount,
      }
    `),
  },
});

export default UserStats;
