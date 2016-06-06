import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

import SearchBar from '../../../../components/searchBar';

import s from './FlexibleSpace.css'

class FlexibleSpace extends React.Component{
  render(){
    return (
      <div className={`container ${s.root}`}>
        <SearchBar hint="Explore Polls"/>
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
