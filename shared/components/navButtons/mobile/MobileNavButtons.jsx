import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { Link } from 'react-router';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import s from './MobileNavButtons.css';

class MobileNavButtons extends React.Component{
  render(){
    let {pages, isActive} = this.props;
    return (
      <IconMenu
				iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
				anchorOrigin={{horizontal: 'middle', vertical: 'center'}}
				targetOrigin={{horizontal: 'right', vertical: 'top'}}
				className={s.navBtn}
				//onChange={(event, path) => this.context.router.push(path)}
			>
				{
					pages.map((obj, i) => {
						return (
							<MenuItem
                primaryText={obj.label}
                linkButton
                containerElement={
                  <Link to={obj.path} />
                }
								key={i}
								value={obj.path}
                className={`${isActive(obj.path) ? s.active : ''}`}
							>
              </MenuItem>
						);
					})
				}
			</IconMenu>
    );
  }
}

export default withStyles(s)(MobileNavButtons);
