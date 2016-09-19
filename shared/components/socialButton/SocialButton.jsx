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
    onClick: React.PropTypes.func,
  }
	
  render() {
    const { type, disabled, isViewer, link, newWindow, onClick } = this.props;
    return (
      <FloatingActionButton
        onClick={onClick}
        className={`${s.root} ${disabled ? s.disabled : s[type]} ${this.props.className}`}
        iconClassName={`icon-${type}`}
        disabled={disabled && !isViewer}
        href={link}
        target={newWindow ? '_blank' : '_self'}
      />
		);
  }
}

export default withStyles(s)(SocialButton);
