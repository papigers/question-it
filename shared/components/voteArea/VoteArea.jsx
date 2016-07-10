import React from 'react';
import Relay from 'react-relay';
import { VotePollMutation } from '../../mutations';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import { Link } from 'react-router';

import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import RadioChecked from 'material-ui/svg-icons/toggle/radio-button-checked';
import RadioUnchecked from 'material-ui/svg-icons/toggle/radio-button-unchecked';
import RaisedButton from 'material-ui/RaisedButton';

import s from './VoteArea.css';

class VoteArea extends React.Component {

  static propTypes = {
    poll: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired,
    relay: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    loading: React.PropTypes.bool,
    viewer: React.PropTypes.object,
  };

  constructor(props) {
    super();
    const { options, multi } = props.poll;
    let { selected } = props;

    let canVote = true;
    let error = '';

    if (!selected) {
      selected = [0];
    }
    else {
      canVote = false;
      error = 'You already voted for this poll';
    }

    this.state = {
      options,
      selected,
      multi,
      canVote,
      error,
    };
  }
	
  onChangeRadio = (val) => {
    const valNum = +val;
    if (this.state.selected[0] !== valNum) {
      this.setState({ selected: [valNum] });
    }
  }
	
  onChangeCheckbox = (val) => {
    const valNum = +val;
    const selected = this.state.selected;
    const index = selected.indexOf(valNum);
    if (index < 0) {
      selected.push(valNum);
    }
    else {
      selected.splice(index, 1);
    }
    this.setState({ selected });
  }
	
  checkSubmit = () => {
    const numSelected = this.state.selected.reduce(
      (counter, value) => value ? counter + 1 : counter
    );
    if (numSelected === 0) {
      this.setState({ error: 'You have to choose an option.' });
      return;
    }
    this.setState({ error: '' }, this.submit);
  }
  
  submit = () => {
    const { store, viewer, poll, relay } = this.props;
    const { selected: options } = this.state;
    
    this.setState({ canVote: false, error: 'Voting...' });
    
    relay.commitUpdate(new VotePollMutation({ store, viewer, poll, options }), {
      onSuccess: (() => {
        this.setState({ error: 'Vote Submitted!' }, this.props.onSubmit);
      }),
      onFailure: (() => {
        this.setState({ canVote: true, error: 'Vote Failed. Try again later...' });
      }),
    });
  }
	
  render() {
    const { canVote } = this.state;
    const { loading, viewer, poll } = this.props;

    let submitLabel = 'Submit';
    if (loading) {
      submitLabel = 'Loading Votes...';
    }
    if (!viewer) {
      submitLabel = 'Login to Vote';
    }
    
    let options = this.state.options.map((option, i) => {
      let checkbox;
      if (this.state.multi) {
        checkbox = (
          <Checkbox
            label={option}
            key={i}
            value={`${i}`}
            checked={this.state.selected.includes(i)}
            onCheckFunc={() => this.onChangeCheckbox(i)}
          />
        );
      }
      else {
        checkbox = (
          <Checkbox
            label={option}
            key={i}
            value={`${i}`}
            checked={this.state.selected[0] === i}
            onCheckFunc={() => this.onChangeRadio(i)}
            checkedIcon={<RadioChecked />}
            uncheckedIcon={<RadioUnchecked />}
          />
        );
      }
      return (
        <div key={i} className={s.listItem}>
          {i !== 0 ? (<Divider key={`divider'${i}`} />) : ''}
          <ListItem
            key={`item${i}`}
            disabled={!canVote || loading}
            onTouchTap={checkbox.props.onCheckFunc}
          >
            {checkbox}
          </ListItem>
        </div>
      );
    });

    return (
      <div>
        <h1>Vote:</h1>
        <h2>{poll.title}</h2>
        <h4><Link to={`/user/${poll.author.id}`}>{poll.author.username}</Link></h4>
        <List>
          {options}
        </List>
        <RaisedButton
          label={submitLabel}
          secondary
          className={s.submitBtn}
          disabled={!canVote || loading || !viewer}
          onMouseUp={this.checkSubmit}
        />
        <p className={s.error}>{this.state.error}</p>
      </div>
    );
  }
}

VoteArea = withStyles(s)(VoteArea);

VoteArea = Relay.createContainer(VoteArea, {
  
  fragments: {
    poll: (() => Relay.QL`
      fragment on Poll{
        ${VotePollMutation.getFragment('poll')}
        id,
        title,
        multi,
        options,
        voteCount,
        author{
          id,
          username
        }
      }
    `),
    viewer: (() => Relay.QL`
      fragment on User{
        ${VotePollMutation.getFragment('viewer')}
      }
    `),
    store: (() => Relay.QL`
      fragment on Store{
        ${VotePollMutation.getFragment('store')}
      }
    `),
  },
});

export default VoteArea;
