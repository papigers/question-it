import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

class ExploreTabs extends React.Component{
  constructor(props){
    super(props);
    this.state = { tab: props.tabs || 'trending' };
  }
  switchTabs(tab){
    this.context.router.push(`/polls/${tab}`);
    this.setState({tab});
  }

  render(){
    let tab = this.state.tab;
    return (
      <Tabs value={tab} onChange={this.switchTabs.bind(this)}>
        <Tab label="trending" value="trending" />
        <Tab label="top" value="top" />
        <Tab label="new" value="new" />
      </Tabs>
    );
  }
}

ExploreTabs.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ExploreTabs;
