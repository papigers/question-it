import React from 'react';

import Mobile from './mobile';
import Desktop from './desktop';

const pages = [
	{label: 'Home', path: '/'},
	{label: 'Explore', path: '/polls'},
	//{label: 'about', path: '/about'},
	{label: 'Login', path: '/login'},
  {label: 'My Profile', path: '/users/1'}
];

class NavButtons extends React.Component{
  constructor(){
		super();
		this.state = { small: true };
		this.resizeListener = this.handleResize.bind(this);
	}

  isActive = (path) => {
    return this.context.router.isActive(path, path !== '/polls');
  }

  static contextTypes = {
    loggedOn: React.PropTypes.object,
    router: React.PropTypes.object.isRequired
  }

  handleResize(){
		let small = window.innerWidth <= 768;
		if(small !== this.state.small)
			this.setState({small});
	}

  componentDidMount(){
		this.handleResize();
		window.addEventListener('resize', this.resizeListener);
	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.resizeListener);
	}


  render(){
    let loggedOn = this.context.loggedOn;
    let showPages = pages.filter((page) => {
      switch(page.label){
        case 'Login':
          return !loggedOn;
        case 'My Profile':
          return loggedOn;
        default:
          return true;
      }
    })
    return this.state.small ? (
      <Mobile pages={showPages} isActive={this.isActive} />
    ) :
    (
      <Desktop pages={showPages} isActive={this.isActive} />
    );
  }
}

export default NavButtons;
