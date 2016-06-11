import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Paper from 'material-ui/Paper';

import PollItem from '../../components/pollItem';

import s from './Polls.css';

const polls = {
  trending: {
    header: 'Trending'
  },
  top: {
    header: 'Top'
  },
  new: {
    header: 'New'
  }
}

class Polls extends React.Component{

  componentWillMount(){
    if(!this.props.location.query.q)
      this.context.router.push('/polls');
  }

  render(){
    let tab = this.props.routes[this.props.routes.length-1].tab;
    return (
      <div className={s.root}>
        <Paper zDepth={2} className='container center-text'>
          {polls[tab] ? (<h1 className={s.header}>{polls[tab].header} Polls</h1>) : null}
          <h3>Search</h3>
        <div className={`${s.content}`}>
          <PollItem
            username="papigers"
            title="Example Title dskjsad asdnasjkdnas djasnjk dasda dasdksan camckans asdnas dasdnas dasdnaskja sdasjnx asx asjdn asds dsns xsn cdj jnkas xsjanx"
            choices={[
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]}
          />

          <PollItem
            username="papigers"
            title="Example Title"
            choices={[
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]}
          />

          <PollItem
            username="papigers"
            title="Example Title"
            choices={[
              ['Mushrooms', 3],
              ['Onions', 1],
              ['Olives', 1],
              ['Zucchini', 1],
              ['Pepperoni', 2]
            ]}
          />

        </div>
</Paper>
      </div>
    );
  }
};

Polls.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default withStyles(s)(Polls);
