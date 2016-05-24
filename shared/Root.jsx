import React from 'react';
//import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import customTheme from './theme';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

if (process.env.BROWSER){
	require('./Root.scss');
	require('./extras/bootstrap-grid-only/grid.css.less');
	require('./extras/font-awesome/scss/font-awesome.scss');
}

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