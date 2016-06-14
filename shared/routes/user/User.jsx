import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import {List, ListItem} from 'material-ui/List';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import SocialButton from '../../components/socialButton';
import UserIntro from '../../components/userIntro';
import UserStats from '../../components/userStats';
import UserContact from '../../components/userContact';
import UserPassword from '../../components/userPassword';

import s from './User.css';

import scrollSpy from '../../utils/scrollspy';

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
    this.sweetScroll.to(`#${elId}`);
  }

  componentDidMount(){
    let SweetScroll = require('sweet-scroll');
    this.sweetScroll  = new SweetScroll({
      offset: -112,
      completeScroll: () => {
        this.props.enableScrollSpy(true);
      },
      beforeScroll: () => {
        this.props.enableScrollSpy(false);
      }
    });

  }

  componentWillMount(){
   this.scrollSpy = [];
  }

  render(){
    return (
      <div>
        <div className={"hide-sm-up " + s.fixedTabs} >
          <Paper zDepth={2}>
            <Tabs
              className={s.tabs}
              value={this.props.scrollspy}
              onChange={(val) => this.scrollTo(menu[val].id)}
            >
              {menu.map((item, i) => {
                return (
                  <Tab label={item.label} key={i} value={i} />
                );
              })}
            </Tabs>
          </Paper>
        </div>

        <div className="container">
          <div className="row">

            <div className={"hide-sm-down col-sm-3"}>
              <Paper zDepth={2} className={s.sidemenu + " " + s.fixedMenu}>
                <List className={s.menuItems}>
                  {menu.map((item, i) => {
                    return (
                      <ListItem
                        primaryText={item.label}
                        className={this.props.scrollspy === i ? s.activeMenuItem : ''}
                        onTouchTap={this.scrollTo.bind(this, item.id)}
                        key={i}
                      />
                    );
                  })}
                </List>
              </Paper>
            </div>

            <div className="col-xs-12 col-sm-9">
              <div ref={(ref) => this.scrollSpy[0] = ref } id="user-intro">
                <UserIntro />
              </div>

              <div ref={(ref) => this.scrollSpy[1] = ref } id="user-stats">
                <UserStats />
              </div>

              <div ref={(ref) => this.scrollSpy[2] = ref } id="user-contact">
                <UserContact />
              </div>
              
              <div ref={(ref) => this.scrollSpy[3] = ref } id="user-password">
                <UserPassword />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(scrollSpy(User));
