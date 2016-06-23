import React from 'react';
import Relay from 'react-relay';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';

import NavButtons from '../navButtons';

import s from './AppToolbar.css';

const styles = {
	title: {
		fontSize: 30
	},
	toolbar: {
		position: 'fixed',
		top: 0,
		width: '100%'
	}
};

class AppToolbar extends React.Component {
	constructor(){
		super();
		this.state = {};
		this.listener = this.handleScroll.bind(this);
	}

  static contextTypes = {
    muiTheme: React.PropTypes.object.isRequired
  }
	
	static defaultProps = {
    title: '',
    zDepth: 1
  }

	handleScroll(){
		let height = document.getElementById('calcHeight').clientHeight;
		let doDepth = window.scrollY > height || !this.props.flexibleSpaceElement;
		this.setState({doDepth});
	}

	componentDidMount(){
		window.addEventListener('scroll', this.listener);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.listener);
	}
	
	componentWillMount(){
		const parent = this.context.muiTheme;
		this.muiTheme = getMuiTheme(parent, {
			toolbar: {
				height: parent.appBar.height,
				backgroundColor: parent.appBar.color
			},
			zIndex: {
				toolbar: parent.zIndex.appBar
			}
		});
	}

	componentWillReceiveProps(nextProps){
		this.setState({doDepth: nextProps.flexibleSpaceElement === null});
  }

	render(){
		const zIndex = this.muiTheme.zIndex.toolbar;
		const {textColor} = this.muiTheme.appBar;
		const {backgroundColor, height} = this.muiTheme.toolbar;
		
		return (
			<MuiThemeProvider muiTheme={this.muiTheme}>
				<div style={{marginBottom: ( this.props.tabsElement && this.state.doDepth ? height + 48 : height)}}>
					<Paper
						id="appBar"
						zDepth={ ((this.state.doDepth && !this.props.tabsElement) ? this.props.zDepth : 0) }
						style={{
							 ...styles.toolbar,
							backgroundColor,
							color: textColor,
							zIndex
            }}
            className={s.removeShadowTrans}
          >
						<Toolbar>
							<ToolbarGroup onClick={this.props.onLogoClick} style={{cursor: (this.props.onLogoClick ? 'pointer' : '')}}>
								{this.props.logoUrl ? <img src={this.props.logoUrl} style={{width: 'auto', height, display: 'block'}}/> : ''}	
								<ToolbarTitle text={this.props.title} style={{...styles.title, color: textColor, fontWeight: 600}} />
							</ToolbarGroup>
							<ToolbarGroup lastChild={true} float='right'>
                <NavButtons />
              </ToolbarGroup>
						</Toolbar>
					</Paper>
					<Paper id="calcHeight"
						zDepth={this.props.tabsElement? 0 : this.props.zDepth}
						style={{
							backgroundColor,
							color: textColor,
							position: 'relative',
							top: height,
							zIndex: zIndex - 1
						}}
            className={s.removeShadowTrans}
          >
						{this.props.flexibleSpaceElement}
					</Paper>
          <Paper
						zDepth={this.props.zDepth}
						style={{
							backgroundColor,
							color: textColor,
							position: (this.state.doDepth ? 'fixed' : 'relative'),
              width: '100%',
							top: height,
							zIndex: zIndex - 2
						}}
            className={s.removeShadowTrans}
          >
						{this.props.tabsElement}
					</Paper>
				</div>
      </MuiThemeProvider>
			
		);
	}
}

//AppToolbar = Relay.createContainer(AppToolbar, {
//  fragments: {
//    viewer: () => Relay.QL`
//      fragment on User {
//        id
//      }
//    `
//  }
//});


export default withStyles(s)(AppToolbar);
