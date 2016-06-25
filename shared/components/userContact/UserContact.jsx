import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Paper from 'material-ui/Paper';
import { ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

import SocialButton from '../../components/socialButton';

import s from './UserContact.css';

class UserContact extends React.Component {
  render() {
    return (
      <div>
        <h2 className="categoryHeader">Contact Info</h2>
        <Paper zDepth={2} className="category">
          <div className="row">
            <div className="col-xs-4">
              <Subheader className="subheader">Email:</Subheader>
              <ListItem className="item" disabled>
                <SocialButton className={s.social} type="envelope" />
              </ListItem>
              <Checkbox
                defaultChecked
                label="private"
                className={s.privateCheckbox}
              />
            </div>

            <div className="col-xs-4">
              <Subheader className="subheader">Facebook:</Subheader>
              <ListItem className="item" disabled>
                <SocialButton className={s.social} type="facebook" />
              </ListItem>
              <Checkbox
                defaultChecked
                label="private"
                className={s.privateCheckbox}
              />
            </div>

            <div className="col-xs-4">
              <Subheader className="subheader">Twitter:</Subheader>
              <ListItem className="item" disabled>
                <SocialButton className={s.social} type="add" />
              </ListItem>
              <Checkbox
                defaultChecked
                label="private"
                className={s.privateCheckbox}
              />
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(s)(UserContact);
