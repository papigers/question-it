import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

import s from './FlexibleSpace.css'

class FlexibleSpace extends React.Component{
  render(){
    return (
      <div className={`container ${s.root}`}>
        <h1 className={s.header}>Explore Polls</h1>

        <RaisedButton
					linkButton={true}
					containerElement={
						<Link to="/polls/create" />
					}
					label='Create Poll'
					secondary={true}
					className={s.createBtn}
			 	/>
      </div>
    );
  }
}

export default withStyles(s)(FlexibleSpace);
