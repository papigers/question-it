import React from 'react';

import Mobile from './mobile';
import Desktop from './desktop';

const pages = [
	{ label: 'Home', path: '/' },
	{ label: 'Explore', path: '/polls' },
  { label: 'Create', path: '/poll/create' },
  { label: 'My Profile', path: '/user' },
	{ label: 'Login', path: '/login' },
];

class NavButtons extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object,
  }

  constructor() {
    super();
    this.state = { small: true };
    this.resizeListener = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.resizeListener);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener);
  }

  handleResize = () => {
    const small = window.innerWidth <= 768;
    if (small !== this.state.small) {
      this.setState({ small });
    }
  }

  isActive = (path) => this.context.router.isActive(path, path !== '/polls')

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

    return this.state.small ? (
      <Mobile pages={showPages} isActive={this.isActive} />
    ) :
    (
      <Desktop pages={showPages} isActive={this.isActive} />
    );
  }
}

export default NavButtons;
