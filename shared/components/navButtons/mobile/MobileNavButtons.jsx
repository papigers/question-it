import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { Link } from 'react-router';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import s from './MobileNavButtons.css';

class MobileNavButtons extends React.Component {

  static propTypes = {
    pages: React.PropTypes.array.isRequired,
    isActive: React.PropTypes.func.isRequired,
  }

  render() {
    const { pages, isActive } = this.props;
    return (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        anchorOrigin={{ horizontal: 'middle', vertical: 'center' }}
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        className={`hide-sm-up ${s.navBtn}`}
      >
				{
					pages.map(
            (obj, i) => (
              <MenuItem
                primaryText={obj.label}
                linkButton
                containerElement={
                  <Link to={obj.path} />
                }
                key={i}
                value={obj.path}
                className={`${isActive(obj.path) ? s.active : ''}`}
              />
						)
					)
				}
      </IconMenu>
    );
  }
}

export default withStyles(s)(MobileNavButtons);
