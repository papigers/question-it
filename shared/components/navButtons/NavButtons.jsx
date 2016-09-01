import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Mobile from './mobile';
import Desktop from './desktop';

import RaisedButton from 'material-ui/RaisedButton';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import s from './NavButtons.css';

const pages = [
	{ label: 'Home', path: '/' },
	{ label: 'Explore', path: '/explore' },
  { label: 'Create', path: '/poll/new' },
  { label: 'My Profile', path: '/profile' },
	{ label: 'Login', path: '/login' },
];

class NavButtons extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object,
  }

  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  componentWillMount() {
    const loggedOn = this.context.viewer;
    if (loggedOn) {
      pages[3].path = `/user/${loggedOn.id}`;
    }
  }

  onSettingsClick = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  isActive = (path) => this.context.router.isActive(path, path !== '/explore')

  closeSettings = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const loggedOn = this.context.viewer;

    let showPages = pages.filter((page) => {
      switch (page.label) {
        case 'Login':
          return !loggedOn;
        case 'Create':
        case 'My Profile':
          return loggedOn;
        default:
          return true;
      }
    });
    return (
      <div className={s.root}>
        <Desktop className="hide-sm-down" pages={showPages} isActive={this.isActive} />
        {loggedOn && <div>
          <RaisedButton
            className={s.settings}
            secondary
            ref="settings"
            icon={<SettingsIcon />}
            onTouchTap={this.onSettingsClick}
          />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'middle', vertical: 'center' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            onRequestClose={this.closeSettings}
          >
            <Menu>
              <MenuItem
                primaryText="Logoff"
                linkButton
                containerElement={
                  <a href="/logoff" />
                }
              />
            </Menu>
          </Popover>
        </div>}
        <Mobile className="hide-sm-up" pages={showPages} isActive={this.isActive} />
      </div>
    );
  }
}

export default withStyles(s)(NavButtons);
