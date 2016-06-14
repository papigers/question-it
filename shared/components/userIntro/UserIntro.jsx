import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import {ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import EditIcon from 'material-ui/svg-icons/image/edit';
import ProfileAvatar from 'material-ui/svg-icons/social/person';

import s from './UserIntro.css';

class UserIntro extends React.Component{
  render(){
    return (
      <div>
        <h2 className="categoryHeader">Intro</h2>
        <Paper zDepth={2} className={s.introRow + " category"}>
          <div className={s.avatarContainer}>
            <Avatar
              icon={<ProfileAvatar />}
              size={70}
              backgroundColor="black"
              className={s.avatar}
            />
            <IconButton className={s.editAvatar}><EditIcon /></IconButton>
          </div>
          <div className={s.username}>
              <ListItem className="item" disabled={true}>
                <h2>Username</h2>
              </ListItem>
          </div>
          <div className={s.fullRow}>
              <Subheader className="subheader">Name:</Subheader>
              <ListItem className="item" disabled={true}>
                Gershon Papi
                <IconButton className={s.editIcon}><EditIcon /></IconButton>
              </ListItem>
          </div>
          <div className={s.fullRow}>
              <Subheader className="subheader">Age:</Subheader>
              <ListItem className="item" disabled={true}>
                23
                <IconButton className={s.editIcon}><EditIcon /></IconButton>
              </ListItem>
          </div>
          <div className={s.fullRow}>
              <Subheader className="subheader">Bio:</Subheader>
              <ListItem className="item" disabled={true}>
                Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio
                Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio.
                Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio.
                <IconButton className={s.editBio}><EditIcon /></IconButton>
              </ListItem>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(s)(UserIntro);