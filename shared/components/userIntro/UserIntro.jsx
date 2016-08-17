import React from 'react';
import Relay from 'react-relay';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import EditIcon from 'material-ui/svg-icons/image/edit';
import ProfileAvatar from 'material-ui/svg-icons/social/person';

import s from './UserIntro.css';

class UserIntro extends React.Component {

  static propTypes = {
    user: React.PropTypes.object.isRequired,
    isViewer: React.PropTypes.bool.isRequired,
  }

  render() {
    const { username, bio, birthDate, name, avatar } = this.props.user;
    const { isViewer } = this.props;
    return (
      <div>
        <h2 className="categoryHeader">Intro</h2>
        <Paper zDepth={2} className={`${s.introRow} category`}>
          <div className={s.avatarContainer}>
            <Avatar
              icon={avatar ? null : <ProfileAvatar />}
              src={avatar}
              size={100}
              backgroundColor="black"
              className={s.avatar}
            />
            {isViewer ? <IconButton className={s.editAvatar}><EditIcon /></IconButton> : null}
          </div>
          <div className={s.username}>
            <ListItem className="item" disabled>
              <h2>{username}</h2>
            </ListItem>
          </div>
          {
            (isViewer || name.public) && name.value ?
              <div className={s.fullRow}>
                <Subheader className="subheader">Name:</Subheader>
                <ListItem className="item" disabled>
                  {name.value}
                  {isViewer ? <IconButton className={s.editIcon}><EditIcon /></IconButton> : null}
                </ListItem>
              </div> : null
          }
          {
            (isViewer || birthDate.public) && birthDate.value ?
              <div className={s.fullRow}>
                <Subheader className="subheader">Age:</Subheader>
                <ListItem className="item" disabled>
                  {Math.abs(new Date(Date.now() - new Date(birthDate.value).getTime()).getUTCFullYear() - 1970)}
                  {isViewer ? <IconButton className={s.editIcon}><EditIcon /></IconButton> : null}
                </ListItem>
              </div> : null
          }
          <div className={s.fullRow}>
            <Subheader className="subheader">Bio:</Subheader>
            <ListItem className="item" disabled>
              {bio || 'No Bio.'}
              {isViewer ? <IconButton className={s.editBio}><EditIcon /></IconButton> : null}
            </ListItem>
          </div>
        </Paper>
      </div>
    );
  }
}

UserIntro = withStyles(s)(UserIntro);

UserIntro = Relay.createContainer(UserIntro, {
  fragments: {
    user: (() => Relay.QL`
      fragment on User{
        username,
        birthDate{
          value,
          public
        },
        name{
          value,
          public
        },
        bio,
        avatar
      }
    `),
  },
});

export default UserIntro;
