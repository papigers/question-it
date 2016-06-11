import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Link from 'react-router/lib/Link';

import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import ProfileAvatar from 'material-ui/svg-icons/social/person';
import EditIcon from 'material-ui/svg-icons/image/edit';

import SocialButton from '../../components/socialButton';

import s from './User.css';

const menu = [
  {
    label: "Intro",
    id: "user-intro"
  },
  {
    label: "Stats",
    id: "user-stats"
  },
  {
    label: "Contact Info",
    id: "user-contact"
  },
  {
    label: "Password",
    id: "user-password"
  }
];

class User extends React.Component{

  scrollTo(elId){
    //smoothScroll(document.getElementById(elId, 750));
  }

  componentDidMount(){
    let SweetScroll = require('sweet-scroll');
    this.sweetScroll = new SweetScroll();
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="hide-sm-up col-xs-12">
            <Paper zDepth={2}>
              <Tabs className={s.tabs}>
                {menu.map((item, i) => {
                  return (
                    <Tab label={item.label} key={i} />
                  );
                })}
              </Tabs>
            </Paper>
          </div>

          <div className={"hide-sm-down col-sm-3"}>
            <Paper zDepth={2} className={s.sidemenu + " " + s.fixedMenu}>
              <List className={s.menuItems}>
                {menu.map((item, i) => {
                  return (
                    <ListItem primaryText={item.label} onTouchTap={this.scrollTo.bind(this, item.id)} key={i} />
                  );
                })}
              </List>
            </Paper>
          </div>

          <div className="col-xs-12 col-sm-9">
            <a className={s.anchor} id="user-intro"></a>
            <div>
              <h2 className={s.categoryHeader}>Intro</h2>
              <Paper zDepth={2} className={s.introRow + ' ' + s.category}>
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
                    <ListItem className={s.item} disabled={true}>
                      <h2>Username</h2>
                    </ListItem>
                </div>
                <div className={s.fullRow}>
                    <Subheader className={s.subheader}>Name:</Subheader>
                    <ListItem className={s.item} disabled={true}>
                      Gershon Papi
                      <IconButton className={s.editIcon}><EditIcon /></IconButton>
                    </ListItem>
                </div>
                <div className={s.fullRow}>
                    <Subheader className={s.subheader}>Age:</Subheader>
                    <ListItem className={s.item} disabled={true}>
                      23
                      <IconButton className={s.editIcon}><EditIcon /></IconButton>
                    </ListItem>
                </div>
                <div className={s.fullRow}>
                    <Subheader className={s.subheader}>Bio:</Subheader>
                    <ListItem className={s.item} disabled={true}>
                      Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio
                      Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio.
                      Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio.
                      <IconButton className={s.editBio}><EditIcon /></IconButton>
                    </ListItem>
                </div>
              </Paper>
            </div>

            <a className={s.anchor} id="user-stats"></a>
            <div>
              <h2 className={s.categoryHeader}>Stats</h2>
              <Paper zDepth={2} className={s.category}>
                <div className="row">
                  <div className="col-xs-6 col-md-3">
                    <Subheader className={s.subheader}>Polls:</Subheader>
                    <ListItem className={s.item} disabled={true}>
                      <span className={s.stat}>5</span>
                    </ListItem>
                  </div>

                  <div className="col-xs-6 col-md-3">
                    <Subheader className={s.subheader}>Votes:</Subheader>
                    <ListItem className={s.item} disabled={true}>
                      <span className={s.stat}>23</span>
                    </ListItem>
                  </div>

                  <div className="col-xs-6 col-md-3">
                    <Subheader className={s.subheader}>Votes Recieved:</Subheader>
                    <ListItem className={s.item} disabled={true}>
                      <span className={s.stat}>23</span>
                    </ListItem>
                  </div>

                  <div className="col-xs-6 col-md-3">
                    <Subheader className={s.subheader}>Most Voted Poll:</Subheader>
                    <ListItem className={s.item} disabled={true}>
                      <Link className={s.stat} to="/polls/poll/1">Example Poll Title</Link>
                    </ListItem>
                  </div>

                </div>
              </Paper>
            </div>

            <a className={s.anchor} id="user-contact"></a>
            <div>
              <h2 className={s.categoryHeader}>Contact Info</h2>
              <Paper zDepth={2} className={s.category}>
                <div className="row">
                  <div className="col-xs-4">
                    <Subheader className={s.subheader}>Email:</Subheader>
                    <ListItem className={s.item} disabled={true}>
                      <SocialButton className={s.social} type='envelope' />
                    </ListItem>
                    <Checkbox
                      defaultChecked={true}
                      label="private"
                      className={s.privateCheckbox}
                    />
                  </div>

                  <div className="col-xs-4">
                    <Subheader className={s.subheader}>Facebook:</Subheader>
                    <ListItem className={s.item} disabled={true}>
                      <SocialButton className={s.social} type='facebook' />
                    </ListItem>
                    <Checkbox
                      defaultChecked={true}
                      label="private"
                      className={s.privateCheckbox}
                    />
                  </div>

                  <div className="col-xs-4">
                    <Subheader className={s.subheader}>Twitter:</Subheader>
                    <ListItem className={s.item} disabled={true}>
                      <SocialButton className={s.social} type='add' />
                    </ListItem>
                    <Checkbox
                      defaultChecked={true}
                      label="private"
                      className={s.privateCheckbox}
                    />
                  </div>
                </div>
              </Paper>
            </div>

            <a className={s.anchor} id="user-password"></a>
            <div>
              <h2 className={s.categoryHeader}>Change Password</h2>
              <Paper zDepth={2} className={s.category}>
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <ListItem className={s.item + " center-text"} disabled={true}>
                      Change password
                    </ListItem>
                    <RaisedButton label="change" secondary={true} className={s.pwdButton} />
                    <Subheader className={s.subheader + " center-text"}>If you remember your old one</Subheader>
                  </div>

                  <div className="col-xs-12 col-md-6">
                    <ListItem className={s.item + " center-text"} disabled={true}>
                      Reset password
                    </ListItem>
                    <RaisedButton label="reset" secondary={true} className={s.pwdButton} />
                    <Subheader className={s.subheader + " center-text"}>We will send you a new one to your email</Subheader>
                  </div>
                </div>
              </Paper>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(User);
