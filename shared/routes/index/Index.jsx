import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { ToolbarGroup } from 'material-ui/Toolbar';

import Footer from '../footer';
import AppToolbar from '../../components/appToolbar';
import NavButtons from '../../components/navButtons';

class App extends React.Component {
	onLogoClick(){
		this.context.router.push('/');
	}
	
  render() {
		let logo = require('./logo.png');
		
		let flexibleSpace = this.context.router.isActive('/', true) ? (
			React.createElement(require('./homeToolbar/flexibleSpace'), {logo})
		) : null;

    let tabs = null;
    if(this.context.router.isActive('/polls') && !this.props.params.id){
      let tab = this.props.routes[this.props.routes.length-1].tab;
      let { Tabs, FlexibleSpace } = require('./exploreToolbar');
      tabs = React.createElement(Tabs, {tab});
      flexibleSpace = React.createElement(FlexibleSpace);
    }
		
    return (
      <div id="app-view">
				<header>
					<AppToolbar onLogoClick={this.onLogoClick.bind(this)} zDepth={2} title="QUESTION IT" flexibleSpaceElement={flexibleSpace} logoUrl={logo} tabsElement={tabs}>
						<ToolbarGroup lastChild={true} float='right'>
							{<NavButtons />}
						</ToolbarGroup>
					</AppToolbar>
				</header>
				
				<main>
					{this.props.children}
				</main>
			
				<footer>
					<Footer />
				</footer>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default App;
