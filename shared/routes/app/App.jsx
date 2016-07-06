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
    main: React.PropTypes.element.isRequired,
    params: React.PropTypes.object,
    viewer: React.PropTypes.object,
    tabs: React.PropTypes.element,
    flexibleSpace: React.PropTypes.element,
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
    const { main, flexibleSpace, tabs } = this.props;

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

        <main>
					{main}
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
