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
      <div className={`hide-sm-down ${s.root}`}>
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
                style={{ whiteSpace: 'nowrap' }}
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
