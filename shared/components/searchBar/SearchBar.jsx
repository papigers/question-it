import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

import s from './SearchBar.css';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value: '',
      focused: false
    };
  }

  onFocus(){
    this.setState({focused: true});
  }

  onBlur(){
    this.setState({focused: false});
  }

  onChange(event){
    let value = event.target.value;
    let router = this.context.router;
    if(value === ''){
      router.goBack();
    }
    else{
      if(window.location.pathname === '/polls/search'){
        router.replace({
          pathname: '/polls/search',
          query: { q: value }
        });
      }
      else{
        router.push({
          pathname: '/polls/search',
          query: { q: value }
        });
      }
    }
    this.setState({value});
  }

  render(){
    let {focused, value} = this.state;
    if(!focused)
      value = '';
    return (
      <div>
        <Toolbar className={`${s.toolbar} ${focused ? s.focus : ''}`}>
            <IconButton iconClassName={`icon-search ${s.icon}`} className={s.button} />
            <input
              type="text"
              onFocus={this.onFocus.bind(this)}
              onBlur={this.onBlur.bind(this)}
              value={value}
              onChange={this.onChange.bind(this)}
              placeholder={this.props.hint}
              className={s.textField}
            />
        </Toolbar>
      </div>
    );
  }
}

SearchBar.contextTypes={
  router: React.PropTypes.object.isRequired
}

export default withStyles(s)(SearchBar);
