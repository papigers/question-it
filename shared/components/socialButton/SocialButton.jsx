import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import s from './SocialButton.css';


class SocialButton extends React.Component {

  static propTypes = {
    type: React.PropTypes.string.isRequired,
    isViewer: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    className: React.PropTypes.string,
    link: React.PropTypes.string,
    newWindow: React.PropTypes.bool,
  }
	
  render() {
    const { type, disabled, isViewer, link, newWindow } = this.props;
    return (
      <FloatingActionButton
        linkButton
        className={`${s.root} ${disabled ? s.disabled : s[type]} ${this.props.className}`}
        iconClassName={`icon-${type}`}
        disabled={disabled && !isViewer}
        containerElement={link ? <a href={link} target={newWindow ? '_blank' : '_self'} /> : null}
      />
		);
  }
}

export default withStyles(s)(SocialButton);
