import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';

class Polls extends React.Component{
  constructor(props){
    super(props);
    let tab = props.routes[props.routes.length-1].tab;
    this.state = { tab: tab  || 'trending'};
  }

  switchTabs(tab){
    this.context.router.push(`/polls/${tab}`);
    this.setState({tab});
  }

  render(){
    let value = this.state.tab;
    return (
      <div style={{padding: 0}}>
        <Tabs value={value} onChange={this.switchTabs.bind(this)}>
          <Tab label="trending" value="trending" />
          <Tab label="top" value="top" />
          <Tab label="new" value="new" />
        </Tabs>
        <Paper className="container">
          <h1>Polls</h1>
          <RaisedButton label="hello" />
        </Paper>
        {this.props.children}
      </div>
    );
  }
};

Polls.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Polls;
