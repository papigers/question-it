import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import Link from 'react-router/lib/Link';

import PollItem from '../../components/pollItem';
import s from './Home.css';

class Home extends React.Component{
	render(){ 
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

export default withStyles(s)(Home);
