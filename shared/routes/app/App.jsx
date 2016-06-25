import React from 'react';
import Relay from 'react-relay';

import Footer from '../footer';
import AppToolbar from '../../components/appToolbar';

let logo = require('./logo.png');

class App extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  static propTypes = {
    viewer: React.PropTypes.object.isRequired,
    routes: React.PropTypes.array.isRequired,
    location: React.PropTypes.object.isRequired,
    children: React.PropTypes.element.isRequired,
    params: React.PropTypes.object,
  }

  onLogoClick = () => {
    this.context.router.push('/');
  }

  render() {
    let loggedon = this.props.viewer;

    let flexibleSpace = this.context.router.isActive('/', true) ? (
			React.createElement(
        require('./homeToolbar/flexibleSpace'), // eslint-disable-line global-require
        { logo }
      )
		) : null;

    let tabs = null;
    if (this.context.router.isActive('/polls') && !this.props.params.id) {
      const tab = this.props.routes[this.props.routes.length - 1].tab;
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
            loggedOn={loggedon}
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
        id,
        _id,
        username
      }
    `,
  },
});

export default App;
