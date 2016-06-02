import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import RaisedButton from 'material-ui/RaisedButton';
import { ToolbarGroup } from 'material-ui/Toolbar';
import { Link } from 'react-router';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Footer from '../footer';
import AppToolbar from '../../components/appToolbar';

const pages = [
	{label: 'Home', path: '/'},
	{label: 'Chart', path: 'chart'},
	//{label: 'about', path: '/about'},
	{label: 'Login', path: 'login'}
];

import s from './Index.css';


class App extends React.Component {
	constructor(){
		super();
		this.state = { small: true };
		this.resizeListener = this.handleResize.bind(this);
	}
	
	handleResize(){
		let small = window.innerWidth <= 768;
		if(small !== this.state.small)
			this.setState({small});
	}
	
	componentDidMount(){
		let small = window.innerWidth <= 768;
		this.setState({small});
		window.addEventListener('resize', this.resizeListener);
	}

	componentWillUnmount(){
		window.removeEventListener('resize', this.resizeListener);
	}
	
	onLogoClick(){
		this.context.router.push('/');
	}
	
  render() {	
		let navButtons = this.state.small ?
		(
			<IconMenu
				iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
				anchorOrigin={{horizontal: 'middle', vertical: 'center'}}
				targetOrigin={{horizontal: 'right', vertical: 'top'}}
				className={s.navBtnSmall}
				onChange={(event, path) => this.context.router.push(path)}
			>
				{
					pages.map((obj, i) => {
						return (
							<MenuItem
								primaryText={obj.label}
								key={i}
								value={obj.path}
								style={this.context.router.isActive(obj.path, true) ?
									{ backgroundColor: this.context.muiTheme.palette.accent1Color, color: 'white' } : null
								}
							/>
						);
					})
				}
			</IconMenu>
		)
			:
		(
			pages.map((obj, i) => {
				return (
					<RaisedButton 
						linkButton={true}
						containerElement={
							<Link to={obj.path}/>
						}
						label={obj.label}
						secondary={this.context.router.isActive(obj.path, true)}
						className={s.navBtn}
						key={i}
					/>
			 	);
			})
		);	
		
		let logo = require('./logo.png');
		
		let flexibleSpace = this.context.router.isActive('/', true) ? (
			React.createElement(require('./flexibleSpace'), {logo})
		) : null;
		
    return (
      <div id="app-view">
				<header>
					<AppToolbar onLogoClick={this.onLogoClick.bind(this)} zDepth={2} title="QUESTION IT" flexibleSpaceElement={flexibleSpace} logoUrl={logo}>
						<ToolbarGroup lastChild={true} float='right'>
							{navButtons}
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
  router: React.PropTypes.object.isRequired,
	muiTheme: React.PropTypes.object.isRequired
};

export default withStyles(s)(App);