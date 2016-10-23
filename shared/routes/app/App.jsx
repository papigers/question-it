import React from 'react';
import Relay from 'react-relay';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Dialog from 'material-ui/Dialog';

import Footer from '../../components/footer';
import AppToolbar from '../../components/appToolbar';

import s from './App.css';

let logo = require('./logobg.png');

class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static propTypes = {
    routes: React.PropTypes.array.isRequired,
    location: React.PropTypes.object.isRequired,
    main: React.PropTypes.element,
    params: React.PropTypes.object,
    viewer: React.PropTypes.object,
    tabs: React.PropTypes.element,
    flexibleSpace: React.PropTypes.element,
  }

  static childContextTypes = {
    viewer: React.PropTypes.object,
    dialogController: React.PropTypes.object,
  }

  constructor() {
    super();
    this.state = {
      dialog: {
        open: false,
      },
    };
  }

  getChildContext() {
    return {
      viewer: this.props.viewer,
      dialogController: {
        openDialog: this.openDialog,
        closeDialog: this.closeDialog,
      },
    };
  }

  componentDidMount() {
    NProgress.done(true);
  }

  onLogoClick = () => {
    this.context.router.push('/');
  }

  openDialog = (dialog) => {
    this.setState({
      dialog: {
        ...dialog,
        open: true,
      },
    });
  }

  closeDialog = () => {
    this.setState({
      dialog: {
        ...this.state.dialog,
        open: false,
      },
    });
  }

  render() {
    const { main, flexibleSpace, tabs } = this.props;
    const { dialog } = this.state;

    return (
      <div id="app-view">
        <header>
          <AppToolbar
            onLogoClick={this.onLogoClick}
            zDepth={2}
            title="QUESTION IT"
            flexibleSpaceElement={
              flexibleSpace ?
                React.cloneElement(flexibleSpace, { logo }) : null
            }
            logoUrl={logo}
            tabsElement={tabs}
          />
        </header>

        <main id="main">
					{main}
        </main>

        <footer>
          <Footer />
        </footer>

        <Dialog
          {...dialog}
          titleClassName={`center-text ${s.dialogTitle}`}
          onRequestClose={this.closeDialog}
        />
      </div>
    );
  }
}

App = withStyles(s)(App);

App = Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on User {
        id
      }
    `,
  },
});

export default App;
