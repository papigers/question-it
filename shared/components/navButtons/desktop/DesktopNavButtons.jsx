import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

import s from './DesktopNavButtons.css';

class DesktopNavButtons extends React.Component {

  static propTypes = {
    pages: React.PropTypes.array.isRequired,
    isActive: React.PropTypes.func.isRequired,
  }
  render() {
    const { pages, isActive } = this.props;
    return (
      <div className={s.root}>
        {
          pages.map(
            (obj, i) => (
              <RaisedButton
                linkButton
                containerElement={
                  <Link to={obj.path} />
                }
                label={obj.label}
                secondary={isActive(obj.path)}
                className={s.navBtn}
                key={i}
              />
            )
          )
        }
      </div>
    );
  }
}

export default withStyles(s)(DesktopNavButtons);
