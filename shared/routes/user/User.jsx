import React from 'react';
import Relay from 'react-relay';
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

const sections = [
  {
    label: 'Intro',
    id: 'user-intro',
    component: UserIntro,
    public: true,
  },
  {
    label: 'Stats',
    id: 'user-stats',
    component: UserStats,
    public: true,
  },
  {
    label: 'Contact Info',
    id: 'user-contact',
    component: UserContact,
    public: true,
  },
  {
    label: 'Password',
    id: 'user-password',
    component: UserPassword,
    public: false,
  },
];

class User extends React.Component {

  static propTypes = {
    scrollspy: React.PropTypes.number.isRequired,
    user: React.PropTypes.object,
  }

  static contextTypes= {
    viewer: React.PropTypes.object,
    router: React.PropTypes.object,
  }

  componentWillMount() {
    this.scrollSpy = [];
  }

  componentDidMount() {
    if (!this.props.user) {
      let redirect = '/';
      if (this.context.router.isActive('profile', true)) {
        redirect += 'login';
        sessionStorage.setItem('after-login', window.location.pathname);
      }
      this.context.router.replace(redirect);
    }

    NProgress.done();
    const SweetScroll = require('sweet-scroll'); // eslint-disable-line global-require
    this.sweetScroll = new SweetScroll({
      offset: -85,
    });
  }

  componentDidUpdate() {
    NProgress.done();
  }

  setScrollspyRef = (ref) => {
    this.scrollSpy.push(ref);
  }

  scrollTo = (elId) => {
    this.sweetScroll.to(`#${elId}`);
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return <div></div>;
    }

    const { viewer } = this.context;
    const isViewer = viewer !== null && viewer.id === user.id;

    return (
      <div>
        <div className={`hide-sm-up ${s.fixedTabs}`} >
          <Paper zDepth={2}>
            <Tabs
              className={s.tabs}
              value={this.props.scrollspy}
              onChange={(val) => this.scrollTo(sections[val].id)}
            >
              {sections.map(
                (section, i) => (section.public || isViewer) ? (
                  <Tab label={section.label} key={i} value={i} />
                  ) : null
              )}
            </Tabs>
          </Paper>
        </div>

        <div className="container">
          <div className="row">

            <div className={"hide-sm-down col-sm-3"}>
              <Paper zDepth={2} className={`${s.sidemenu} ${s.fixedMenu}`}>
                <List className={s.menuItems}>
                  {sections.map(
                    (section, i) => (section.public || isViewer) ? (
                      <ListItem
                        primaryText={section.label}
                        className={this.props.scrollspy === i ? s.activeMenuItem : ''}
                        onTouchTap={() => this.scrollTo(section.id)}
                        key={i}
                      />
                  ) : null
                  )}
                </List>
              </Paper>
            </div>

            <div className="col-xs-12 col-sm-9">
              {sections.map(
                (section, i) => (section.public || isViewer) ? (
                  <div key={i} ref={this.setScrollspyRef} id={section.id}>
                    {React.createElement(section.component, {
                      isViewer,
                      user,
                    })}
                  </div>
                ) : null
              )}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

User = withStyles(s)(scrollSpy(User));

User = Relay.createContainer(User, {
  fragments: {
    user: (() => Relay.QL`
      fragment on User{
        id,
        ${UserIntro.getFragment('user')},
        ${UserStats.getFragment('user')},
        ${UserContact.getFragment('user')}
      }
    `),
  },
});

export default User;
