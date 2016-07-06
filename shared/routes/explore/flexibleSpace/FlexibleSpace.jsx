import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

import SearchBar from '../../../components/searchBar';

import s from './FlexibleSpace.css';

class FlexibleSpace extends React.Component {

  static propTypes = {
    query: React.PropTypes.string,
  }

  render() {
    return (
      <div className={`container ${s.root}`}>
        <SearchBar hint="Explore Polls" value={this.props.query} />
        <RaisedButton
          linkButton
          containerElement={
            <Link to="/poll/new" />
					}
          label="Create Poll"
          secondary
          className={s.createBtn}
        />
      </div>
    );
  }
}

export default withStyles(s)(FlexibleSpace);
