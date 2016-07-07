import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';

import debounce from '../../utils/debounce';

import s from './SearchBar.css';

class SearchBar extends React.Component {

  static propTypes = {
    hint: React.PropTypes.string,
  }
  
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };

    this.changeQuery = debounce(this.changeQuery, 250);
  }

  componentDidMount() {
    this.unregister = this.context.router.listenBefore(this.locationHasChanged);
  }

  componentWillUnmount() {
    this.unregister();
  }

  onFocus = () => this.setState({ focused: true })

  onBlur = () => this.setState({
    focused: this.refs.searchbar.value && this.context.router.isActive('/explore/search'),
  })

  onChange = (event) => {
    const value = event.target.value;
    const router = this.context.router;
    this.changeQuery(value, router);
  }

  changeQuery(value, router) {
    if (value === '') {
      router.goBack();
    }
    else {
      if (window.location.pathname === '/explore/search') {
        router.replace({
          pathname: '/explore/search',
          query: { q: value },
        });
      }
      else {
        router.push({
          pathname: '/explore/search',
          query: { q: value },
        });
      }
    }
  }
  
  locationHasChanged = (location) => {
    if (location.pathname !== '/explore/search') {
      this.setState({ focused: false });
      this.refs.searchbar.value = '';
    }
    else {
      this.setState({ focused: this.refs.searchbar.value });
    }
  }

  render() {
    const { focused } = this.state;

    return (
      <div>
        <Toolbar className={`${s.toolbar} ${focused ? s.focus : ''}`}>
          <IconButton iconClassName={`icon-search ${s.icon}`} className={s.button} />
          <input
            type="text"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onChange={this.onChange}
            placeholder={this.props.hint}
            className={s.textField}
            ref="searchbar"
          />
        </Toolbar>
      </div>
    );
  }
}

export default withStyles(s)(SearchBar);
