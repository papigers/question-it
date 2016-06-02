import React from 'react';
//import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import customTheme from '../theme';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import s from './Root.css';
import grid from './bootstrap-grid/grid.css.less';

class Root extends React.Component {
  constructor(props){
		super();
		this.muiTheme = getMuiTheme(customTheme, { userAgent: props.userAgent });
	}

  render () {
    return (
			<MuiThemeProvider muiTheme={this.muiTheme}>
        {this.props.children}
      </MuiThemeProvider>
		);
  }
}

export default Root;