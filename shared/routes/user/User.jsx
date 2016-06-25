import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { List, ListItem } from 'material-ui/List';
import { Tabs, Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

import UserIntro from '../../components/userIntro';
import UserStats from '../../components/userStats';
import UserContact from '../../components/userContact';
import UserPassword from '../../components/userPassword';

import s from './User.css';

import scrollSpy from '../../utils/scrollspy';

const menu = [
  {
    label: 'Intro',
    id: 'user-intro',
  },
  {
    label: 'Stats',
    id: 'user-stats',
  },
  {
    label: 'Contact Info',
    id: 'user-contact',
  },
  {
    label: 'Password',
    id: 'user-password',
  },
];

class User extends React.Component {

  static propTypes = {
    scrollspy: React.PropTypes.number.isRequired,
  }

  componentWillMount() {
    this.scrollSpy = [];
  }

  componentDidMount() {
    const SweetScroll = require('sweet-scroll'); // eslint-disable-line global-require
    this.sweetScroll = new SweetScroll({
      offset: -85,
    });
  }

  setScrollspyRef = (ref) => {
    this.scrollSpy.push(ref);
  }

  scrollTo = (elId) => {
    this.sweetScroll.to(`#${elId}`);
  }

  render() {
    return (
      <div>
        <div className={`hide-sm-up ${s.fixedTabs}`} >
          <Paper zDepth={2}>
            <Tabs
              className={s.tabs}
              value={this.props.scrollspy}
              onChange={(val) => this.scrollTo(menu[val].id)}
            >
              {menu.map(
                (item, i) => <Tab label={item.label} key={i} value={i} />
              )}
            </Tabs>
          </Paper>
        </div>

        <div className="container">
          <div className="row">

            <div className={"hide-sm-down col-sm-3"}>
              <Paper zDepth={2} className={`${s.sidemenu} ${s.fixedMenu}`}>
                <List className={s.menuItems}>
                  {menu.map(
                    (item, i) => (
                      <ListItem
                        primaryText={item.label}
                        className={this.props.scrollspy === i ? s.activeMenuItem : ''}
                        onTouchTap={() => this.scrollTo(item.id)}
                        key={i}
                      />
                  ))}
                </List>
              </Paper>
            </div>

            <div className="col-xs-12 col-sm-9">
              <div ref={this.setScrollspyRef} id="user-intro">
                <UserIntro />
              </div>

              <div ref={this.setScrollspyRef} id="user-stats">
                <UserStats />
              </div>

              <div ref={this.setScrollspyRef} id="user-contact">
                <UserContact />
              </div>
              
              <div ref={this.setScrollspyRef} id="user-password">
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
