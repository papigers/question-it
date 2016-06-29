import React from 'react';
import Relay from 'react-relay';

import Footer from '../../components/footer';
import AppToolbar from '../../components/appToolbar';

let logo = require('./logo.png');

class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static propTypes = {
    routes: React.PropTypes.array.isRequired,
    location: React.PropTypes.object.isRequired,
    children: React.PropTypes.element.isRequired,
    params: React.PropTypes.object,
    viewer: React.PropTypes.object,
  }

  static childContextTypes = {
    viewer: React.PropTypes.object,
  }

  getChildContext() {
    return {
      viewer: this.props.viewer,
    };
  }

  onLogoClick = () => {
    this.context.router.push('/');
  }

  render() {
    let flexibleSpace = this.context.router.isActive('/', true) ? (
			React.createElement(
        require('./homeToolbar/flexibleSpace'), // eslint-disable-line global-require
        { logo }
      )
		) : null;

    let tabs = null;
    if (this.context.router.isActive('/explore')) {
      const tab = this.props.params.tab;
      const { Tabs, FlexibleSpace } =
          require('./exploreToolbar'); // eslint-disable-line global-require
      tabs = React.createElement(Tabs, { tab });
      flexibleSpace = React.createElement(FlexibleSpace, { query: this.props.location.query.q });
    }

    return (
      <div id="app-view">
        <header>
          <AppToolbar
            onLogoClick={this.onLogoClick}
            zDepth={2}
            title="QUESTION IT"
            flexibleSpaceElement={flexibleSpace}
            logoUrl={logo}
            tabsElement={tabs}
          />
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
