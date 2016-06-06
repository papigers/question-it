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
    this.setState({value: event.target.value});
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

export default withStyles(s)(SearchBar);
