import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import s from './SocialButton.css';


class SocialButton extends React.Component {

  static propTypes = {
    type: React.PropTypes.string.isRequired,
    isViewer: React.PropTypes.bool.isRequired,
    disabled: React.PropTyped.bool,
    className: React.PropTypes.string,
  }
	
  render() {
    const { type, disabled, isViewer } = this.props;
    return (
      <FloatingActionButton
        linkButton
        className={`${s.root} ${disabled ? s.disabled : s[type]} ${this.props.className}`}
        iconClassName={`icon-${type}`}
        disabled={disabled && !isViewer}
      />
		);
  }
}

export default withStyles(s)(SocialButton);
