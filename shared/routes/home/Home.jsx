import React from 'react';
import Relay from 'react-relay';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import Link from 'react-router/lib/Link';

import PollItem from '../../components/pollItem';
import s from './Home.css';

class Home extends React.Component{
	render(){ 
    //console.log(JSON.stringify(this.props.store, null, 2));
		return (
			<div className="container">
				<div className="row">
					<h1 className="center-text">
            Trending Polls
          </h1>

          <RaisedButton
            linkButton={true}
            containerElement={
              <Link to="/polls"/>
            }
            label="Explore More"
            className={s.exploreBtn}
            primary={true}
          />

          <div>
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
				</div>
			</div>
		);
	}
};
/*
Home = Relay.createContainer(Home, {
  fragments: {
    store: () => Relay.QL`
      fragment on Store {
        polls{
          id,
          title,
          options,
          votes{
            vote
          },
          author{
            username
          }
        }
      }
    `
  }
});
*/


export default withStyles(s)(Home);
