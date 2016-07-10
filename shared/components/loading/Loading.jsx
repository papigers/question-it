import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import RefreshIndicator from 'material-ui/RefreshIndicator';
import FlatButton from 'material-ui/FlatButton';

import s from './Loading.css';

const loadingStyle = {
  position: 'relative',
  marginBottom: 15,
};

class Loading extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className={s.root}>
        <h1 className="center-text">Loading...</h1>
        <RefreshIndicator
          size={80}
          left={0}
          top={0}
          status="loading"
          style={loadingStyle}
        />
        <FlatButton
          label="go back"
          secondary
          onClick={() => this.context.router.goBack()}
        />
      </div>
    );
  }
}

Loading = withStyles(s)(Loading);

export default Loading;
