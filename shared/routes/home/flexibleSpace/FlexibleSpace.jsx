import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';

import s from './FlexibleSpace.css';

class FlexibleSpace extends React.Component {
  static contextTypes = {
    viewer: React.PropTypes.object,
  }

  static propTypes = {
    logo: React.PropTypes.string.isRequired,
  }

  render() {
    const { viewer } = this.context;
    return (
      <div className={`container ${s.root}`}>
        <h1>QUESTION IT</h1>
        <img src={this.props.logo} alt="Question It Logo" className={s.logo} />
        <h2 className={s.subheader}>Online Voting Application</h2>
        <p>
          Question It is an online voting application, inspired by a FreeCodeCamp project.
        </p>
        <RaisedButton
          containerElement={
            <Link to={viewer ? '/poll/new' : '/login'} />
					}
          label={viewer ? 'Create Poll' : 'Join Us'}
          secondary
          className={s.joinBtn}
        />
      </div>
		);
  }
}

export default withStyles(s)(FlexibleSpace);
