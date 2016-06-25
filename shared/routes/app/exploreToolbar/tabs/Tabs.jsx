import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

class ExploreTabs extends React.Component {

  static defaultProps = {
    tab: '',
  }

  static propTypes = {
    tab: React.PropTypes.string.isRequired,
  }

  switchTabs = (tab) => {
    this.context.router.push(`/polls/${tab}`);
  }

  render() {
    let tab = this.props.tab;
    return (
      <Tabs value={tab} onChange={this.switchTabs}>
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
