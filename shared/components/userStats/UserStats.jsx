import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from 'react-router/lib/Link';

import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { ListItem } from 'material-ui/List';

import s from './UserStats.css';

class UserStats extends React.Component {
  render() {
    return (
      <div>
        <h2 className="categoryHeader">Stats</h2>
        <Paper zDepth={2} className="category">
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <Subheader className="subheader">Polls:</Subheader>
              <ListItem className="item" disabled>
                <span className={s.stat}>5</span>
              </ListItem>
            </div>

            <div className="col-xs-6 col-md-3">
              <Subheader className="subheader">Votes:</Subheader>
              <ListItem className={s.item} disabled>
                <span className={s.stat}>23</span>
              </ListItem>
            </div>

            <div className="col-xs-6 col-md-3">
              <Subheader className="subheader">Votes Recieved:</Subheader>
              <ListItem className="item" disabled>
                <span className={s.stat}>23</span>
              </ListItem>
            </div>

            <div className="col-xs-6 col-md-3">
              <Subheader className="subheader">Most Voted Poll:</Subheader>
              <ListItem className="item" disabled>
                <Link className={s.stat} to="/polls/poll/1">Example Poll Title</Link>
              </ListItem>
            </div>

          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(s)(UserStats);
