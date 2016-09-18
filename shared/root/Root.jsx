import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Helmet from 'react-helmet';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import s from './Root.css';
import customTheme from '../theme';
import grid from './bootstrap-grid/grid.css.less';

/* eslint-disable react/no-multi-comp */
class Root extends React.Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    userAgent: PropTypes.string,
  }

  constructor(props) {
    super();
    this.muiTheme = getMuiTheme(customTheme, { userAgent: props.userAgent });
  }

  render() {
    return (
      <div>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="Online Voting"
          titleTemplate="Question It - %s"
          meta={[
            { name: 'description', content: 'Question It - Online Voting' },
            { 'http-equiv': 'Contetnt-Type', content: 'text/html; charset=utf-8' },
            { 'http-equiv': 'Contetnt-Style-Type', content: 'text/css' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'msapplication-config', content: '/public/favicon/browserconfig.xml' },
            { name: 'theme-color', content: '#a50000' },
          ]}
          link={[
            { href: 'https://fonts.googleapis.com/css?family=Roboto', rel: 'stylesheet' },
            { href: 'https://file.myfontastic.com/m6D5EwwEfBU4hxAfLHHbdR/icons.css', rel: 'stylesheet' },
            { href: '/public/favicon/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' },
            { href: '/public/favicon/favicon-32x32.png', rel: 'icon', type: 'image/png', sizes: '32x32' },
            { href: '/public/favicon/favicon-16x16.png', rel: 'icon', type: 'image/png', sizes: '16x16' },
            { href: '/public/favicon/manifest.json', rel: 'manifest' },
            { href: '/public/favicon/safari-pinned-tab.svg', rel: 'mask-icon', color: '#d50000' },
            { href: '/public/favicon/favicon.ico', rel: 'shortcut icon' },
          ]}
          script={[
            { src: '/bundle/bundle.js', type: 'application/javascript', async: undefined },
          ]}
        />
        <MuiThemeProvider muiTheme={this.muiTheme}>
          {this.props.children}
        </MuiThemeProvider>
      </div>
		);
  }
}

let SRoot = withStyles(s)(withStyles(grid)(Root));

class StylesRoot extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onInsertCss: PropTypes.func.isRequired,
    userAgent: PropTypes.string,
  }

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
  }

  getChildContext() {
    return {
      insertCss: this.props.onInsertCss,
    };
  }

  render() {
    return (
      <SRoot userAgent={this.props.userAgent}>
				{this.props.children}
      </SRoot>
		);
  }
}
/* eslint-enable react/no-multi-comp */

export default StylesRoot;
