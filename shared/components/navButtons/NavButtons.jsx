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
    return this.state.small ? (
      <Mobile pages={pages} isActive={this.isActive} />
    ) :
    (
      <Desktop pages={pages} isActive={this.isActive} />
    );
  }
}

NavButtons.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default NavButtons;
