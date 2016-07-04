import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import RadioChecked from 'material-ui/svg-icons/toggle/radio-button-checked';
import RadioUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import RaisedButton from 'material-ui/RaisedButton';

import s from './VoteArea.css';

class VoteArea extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super();
    const { choices, multi } = props;
    this.state = {
      choices,
      selected: multi ? choices.map((o, i) => i === 0) : 0,
      multi,
      error: '',
    };
  }
	
  onChangeRadio = (val) => {
    const valNum = +val;
    if (this.state.selected !== valNum) {
      this.setState({ selected: valNum });
    }
  }
	
  onChangeCheckbox = (val) => {
    const valNum = +val;
    const selected = this.state.selected;
    selected[valNum] = !selected[valNum];
    this.setState({ selected });
  }
	
  checkSubmit = () => {
    if (this.state.multi) {
      const numSelected = this.state.selected.reduce(
        (counter, value) => value ? counter + 1 : counter
      );
      if (numSelected === 0) {
        this.setState({ error: 'You have to choose an option.' });
        return;
      }
    }
    this.setState({ error: '' });
    this.props.onSubmit(...arguments);
  }
	
  render() {
    let options = this.state.choices.map((choice, i) => {
      let checkbox;
      if (this.state.multi) {
        checkbox = (
          <Checkbox
            label={choice}
            key={i}
            value={`${i}`}
            checked={this.state.selected[i]}
            onCheckFunc={() => this.onChangeCheckbox(i)}
          />
        );
      }
      else {
        checkbox = (
          <Checkbox
            label={choice}
            key={i}
            value={`${i}`}
            checked={this.state.selected === i}
            onCheckFunc={() => this.onChangeRadio(i)}
            checkedIcon={<RadioChecked />}
            uncheckedIcon={<RadioUnchecked />}
          />
        );
      }
      return (
        <div key={i} className={s.listItem}>
          {i !== 0 ? (<Divider key={`divider'${i}`} />) : ''}
          <ListItem key={`item${i}`} onTouchTap={checkbox.props.onCheckFunc}>
            {checkbox}
          </ListItem>
        </div>
      );
    });

    return (
      <div>
        <h1>Vote:</h1>
        <h2>{this.props.title}</h2>
        <List>
          {options}
        </List>
        <RaisedButton
          label="submit"
          secondary
          className={s.submitBtn}
          onMouseUp={this.checkSubmit}
        />
        <p className={s.error}>{this.state.error}</p>
      </div>
    );
  }
}

export default withStyles(s)(VoteArea);
