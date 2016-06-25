import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';

import s from './SearchBar.css';

class SearchBar extends React.Component {

  static propTypes = {
    hint: React.PropTypes.string,
    value: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || '',
      focused: false,
    };
  }

  onFocus = () => this.setState({ focused: true })

  onBlur = () => this.setState({ focused: false })

  onChange = (event) => {
    const value = event.target.value;
    const router = this.context.router;
    if (value === '') {
      router.goBack();
    }
    else {
      if (window.location.pathname === '/polls/search') {
        router.replace({
          pathname: '/polls/search',
          query: { q: value },
        });
      }
      else {
        router.push({
          pathname: '/polls/search',
          query: { q: value },
        });
      }
    }
    this.setState({ value });
  }

  render() {
    let { focused, value } = this.state;
    if (!focused) {
      value = '';
    }
    return (
      <div>
        <Toolbar className={`${s.toolbar} ${focused ? s.focus : ''}`}>
          <IconButton iconClassName={`icon-search ${s.icon}`} className={s.button} />
          <input
            type="text"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            value={value}
            onChange={this.onChange}
            placeholder={this.props.hint}
            className={s.textField}
          />
        </Toolbar>
      </div>
    );
  }
}

SearchBar.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

export default withStyles(s)(SearchBar);
