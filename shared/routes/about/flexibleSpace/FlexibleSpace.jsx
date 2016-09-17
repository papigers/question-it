import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './FlexibleSpace.css';

class FlexibleSpace extends React.Component {

  render() {
    return (
      <div className={`container ${s.root}`}>
        <h1>QUESTION IT</h1>
        <h2 className={s.subheader}>Online Voting Application</h2>
        <h3>papigers</h3>
        <p className="col-xs-8 col-xs-offset-2">
          Question It is a voting application I built, trying to learn React.
          While working on it I've learned about many more "React"-ive frameworks and librarys,
          and decided to take it to the next level:
          Question It is a full isomorphic application, rendered with React, uses GraphQL as its' API,
          and Relay to handle the data fetching.
        </p>
      </div>
		);
  }
}

export default withStyles(s)(FlexibleSpace);
