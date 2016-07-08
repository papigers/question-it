import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Mobile from './mobile';
import Desktop from './desktop';

import s from './NavButtons.css';

const pages = [
	{ label: 'Home', path: '/' },
	{ label: 'Explore', path: '/explore' },
  { label: 'Create', path: '/poll/new' },
  { label: 'My Profile', path: '/user' },
	{ label: 'Login', path: '/login' },
];

class NavButtons extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object,
  }

  componentWillMount() {
    const loggedOn = this.context.viewer;
    if (loggedOn) {
      pages[3].path = `/user/${loggedOn.id}`;
    }
  }

  isActive = (path) => this.context.router.isActive(path, path !== '/explore')

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
        <Mobile className="hide-sm-up" pages={showPages} isActive={this.isActive} />
        <Desktop className="hide-sm-down" pages={showPages} isActive={this.isActive} />
      </div>
    );
  }
}

export default withStyles(s)(NavButtons);
