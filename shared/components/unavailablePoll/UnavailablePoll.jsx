import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Subheader from 'material-ui/Subheader';

import s from './UnavailablePoll.css';

class UnavailablePoll extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  goBack = () => this.context.router.goBack()

  render() {
    return (
      <div className="container">
        <div className="row center-text">
          <div className="col-xs-12 col-md-6 col-md-offset-3">
            <h1>Sorry, this poll is unavailable!</h1>
            <Subheader className={`subheader ${s.subheader}`}>
              This could be for one of the following reasons:
            </Subheader>
            <div className={`row ${s.reasons}`}>
              <h4>This poll was deleted, or made hidden by its' creator.</h4>
              <h4>This poll never existed.</h4>
              <h4>Something went wrong at our side, maybe try again later.</h4>
            </div>

            <h3 className={s.back} onClick={this.goBack}>Take me back!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(UnavailablePoll);
