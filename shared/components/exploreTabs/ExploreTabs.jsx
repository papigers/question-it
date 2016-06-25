import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

class ExploreTabs extends React.Component {

  static defaultProps = {
    tabs: 'trending',
  }

  static propTypes = {
    tabs: React.PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = { tab: props.tabs };
  }
  switchTabs = (tab) => {
    this.context.router.push(`/explore/${tab}`);
    this.setState({ tab });
  }

  render() {
    let tab = this.state.tab;
    return (
      <Tabs
        value={tab}
        onChange={this.switchTabs}
      >
        <Tab label="trending" value="trending" />
        <Tab label="top" value="top" />
        <Tab label="new" value="new" />
      </Tabs>
    );
  }
}

ExploreTabs.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default ExploreTabs;
