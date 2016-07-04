import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Relay from 'react-relay';
import { CreatePollMutation } from '../../mutations';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import Add from 'material-ui/svg-icons/content/add';
import Delete from 'material-ui/svg-icons/content/clear';

import s from './CreatePoll.css';

class CreatePoll extends React.Component {
  
  static propTypes = {
    relay: React.PropTypes.object.isRequired,
    viewer: React.PropTypes.object.isRequired,
    store: React.PropTypes.object.isRequired,
  }

  static contextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
    router: React.PropTypes.object.isRequired,
  }
  
  constructor() {
    super();
    this.state = {
      answers: [],
      title: '',
      answer: '',
      multi: false,
      error: '',
      titleError: '',
      answerError: '',
      titleFocus: false,
      submitDisabled: false,
      addDisabled: false,
      failDialog: false,
    };
  }

  addAnswer = () => {
    const { answers, answer } = this.state;
    if (answer !== '') {
      answers.push(answer);
      this.setState({ answers, answer: '', error: '', answerError: '', submitDisabled: false });
    }
    else {
      this.setState({ answerError: "Answer can't be empty", addDisabled: true });
    }
  }

  removeAnswer = (event, i) => {
    const { answers } = this.state;
    answers.splice(i, 1);
    this.setState({ answers });
  }

  changeTitle = (event) => {
    this.setState({ title: event.target.value, titleError: '', submitDisabled: false });
  }

  changeAnswer = (event) => {
    this.setState({ answer: event.target.value, answerError: '', addDisabled: false });
  }

  keyPress = (event) => {
    if (event.which === 13) {
      this.addAnswer();
    }
  }

  multipleCheck = () => {
    this.setState({ multi: !this.state.multi });
  }

  validateSubmission = () => {
    let error = '';
    let titleError = '';
    let submitDisabled = false;
    if (this.state.answers.length < 2) {
      error = 'Poll must have at least 2 options';
      submitDisabled = true;
    }
    if (this.state.title === '') {
      titleError = 'Poll must have a title';
      submitDisabled = true;
    }
    this.setState({ error, titleError, submitDisabled });
    if (!submitDisabled) {
      this.submit();
    }
  }

  submit = () => {
    const { relay, viewer, store } = this.props;
    const { title, answers: options, multi } = this.state;

    relay.commitUpdate(
      new CreatePollMutation({ viewer, store, options, title, multi }),
      {
        onSuccess: (res) => {
          const { node } = res.createPoll.pollEdge;
          return this.context.router.push(`/poll/${node.id}`);
        },
        onFailure: () => this.setState({ failDialog: true }),
      }
    );
  }

  titleFocus = () => {
    this.setState({ titleFocus: true });
  }

  titleBlur = () => {
    this.setState({ titleFocus: false });
  }

  render() {
    const { answer,
         title,
         answers,
         multi,
         error,
         titleError,
         answerError,
         titleFocus,
         submitDisabled,
         addDisabled } = this.state;

    let answerList = answers.map((item, i) => (
      <div key={i}>
        <Divider />
        <ListItem
          rightIconButton={
            <IconButton
              touch
              onMouseUp={() => this.removeAnswer(i)}
            >
              <Delete />
            </IconButton>
          }
          primaryText={item}
        />
        <Divider />
      </div>
    ));

    return (
      <div className="container">
        <Dialog
          title="Poll Creation Failed"
          actions={
            <FlatButton
              label="OK"
              primary
              onTouchTap={() => this.setState({ failDialog: false })}
            />
          }
          modal
          open={this.state.failDialog}
        >
          Oops, Maybe try again later!
        </Dialog>

        <div className="row">
          <h1 className="center-text">Create Poll</h1>
          <div className="center-text col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <Paper zDepth={2} className={s.container}>
              <TextField
                value={title}
                id="poll-title-input"
                floatingLabelText="Poll Title"
                className={`${s.titleField} ${titleFocus || title ? s.focus : ''}`}
                floatingLabelStyle={{ color: 'black' }}
                floatingLabelFocusStyle={{ color: this.context.muiTheme.palette.accent1Color }}
                onChange={this.changeTitle}
                errorText={titleError}
                onFocus={this.titleFocus}
                onBlur={this.titleBlur}
              />

              <List classNmae={s.answers}>
                {answerList}
              </List>

            </Paper>

            <div className={s.addDiv}>
              <TextField
                value={answer}
                id="poll-answer-input"
                floatingLabelText="Add Answer"
                className={s.answerField}
                floatingLabelStyle={{ color: 'black' }}
                floatingLabelFocusStyle={{ color: this.context.muiTheme.palette.accent1Color }}
                onChange={this.changeAnswer}
                onKeyDown={this.keyPress}
                errorText={answerError}
              />

              <FloatingActionButton
                mini
                secondary
                className={s.add}
                onMouseUp={this.addAnswer}
                disabled={addDisabled || answers.length === 10}
              >
                <Add />
              </FloatingActionButton>
            </div>

            <Checkbox
              label="Enable multiple answers?"
              checked={multi}
              onCheck={this.multipleCheck}
              className={s.checkbox}
            />

            <FlatButton
              primary
              label="Create Poll"
              onMouseUp={this.validateSubmission}
              disabled={submitDisabled}
            />
            <span className={s.error}>{error}</span>
          </div>
        </div>
      </div>
    );
  }
}

CreatePoll = withStyles(s)(CreatePoll);

CreatePoll = Relay.createContainer(CreatePoll, {

  fragments: {
    viewer: (() => Relay.QL`
      fragment on User{
        ${CreatePollMutation.getFragment('viewer')}
      }
    `),
    store: (() => Relay.QL`
      fragment on Store {
        ${CreatePollMutation.getFragment('store')},
      },
    `),
  },
});

export default CreatePoll;
