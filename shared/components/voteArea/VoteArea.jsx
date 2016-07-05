import React from 'react';
import Relay from 'react-relay';
import { VotePollMutation } from '../../mutations';
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
    poll: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired,
    relay: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
  };

  static contextTypes = {
    viewer: React.PropTypes.object.isRequired,
  }

  constructor(props) {
    super();
    const { options, multi } = props.poll;
    this.state = {
      options,
      selected: [0],
      multi,
      canVote: true,
      error: '',
    };
  }

  componentWillMount = () => {
    this.canViewerVote();
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
  
  canViewerVote = () => {
    const { viewer } = this.context;
    const { votes } = this.props.poll;
    
    let votedOptions = [0];
    const canVote = !votes.edges.some(({ node: vote }) => {
      if (vote.user.id === viewer.id) {
        votedOptions = vote.options;
        return true;
      }
      return false;
    });
    
    let { error } = this.state;
    if (!canVote) {
      error = 'You already voted for this poll.';
    }
    
    const selected = votedOptions;
    
    this.setState({ selected, canVote, error });
  }
	
  render() {
    const { canVote } = this.state;
    
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
            disabled={!canVote}
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
        <h2>{this.props.poll.title}</h2>
        <List>
          {options}
        </List>
        <RaisedButton
          label="submit"
          secondary
          className={s.submitBtn}
          disabled={!canVote}
          onMouseUp={this.checkSubmit}
        />
        <p className={s.error}>{this.state.error}</p>
      </div>
    );
  }
}

VoteArea = withStyles(s)(VoteArea);

VoteArea = Relay.createContainer(VoteArea, {
  initialVariables: {
    votesPage: 10,
  },
  
  fragments: {
    poll: (() => Relay.QL`
      fragment on Poll{
        ${VotePollMutation.getFragment('poll')}
        id,
        title,
        multi,
        options,
        voteCount,
        votes(first: $votesPage){
          edges{
            node{
              user{
                id,
              },
              options,
            }
          }
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
