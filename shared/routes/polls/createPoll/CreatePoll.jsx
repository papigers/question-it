import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Add from 'material-ui/svg-icons/content/add';
import Delete from 'material-ui/svg-icons/content/clear';

import s from './CreatePoll.css';

class CreatePoll extends React.Component{
  constructor(){
    super();
    this.state = {
      answers: [],
      title: '',
      answer: '',
      multiple: false,
      error: '',
      titleError: '',
      answerError: '',
      titleFocus: false
    }
  }

  addAnswer(event){
    let {answers, answer} = this.state;
    if(answer !== ''){
      answers.push(answer);
      this.setState({answers, answer: '', error: '', answerError: ''});
    }
    else{
      this.setState({answerError: "Answer can't be empty"});
    }
  }

  removeAnswer(event, i){
    let {answers} = this.state;
    answers.splice(i,1);
    this.setState({answers});
  }

  changeTitle(event){
    this.setState({title: event.target.value, titleError: ''});
  }

  changeAnswer(event){
    this.setState({answer: event.target.value, answerError: ''});
  }

  keyPress(event){
    if(event.which == 13)
      this.addAnswer();
  }

  multipleCheck(event, isChecked){
    this.setState({multiple, isChecked});
  }

  submit(event){
    let error = '',
        titleError = '';
    if(this.state.answers.length === 0)
      error = 'Poll must have answers';
    if(this.state.title === '')
      titleError = 'Poll must have a title';
    this.setState({error, titleError});

  }

  titleFocus(){
    this.setState({titleFocus: true});
  }

  titleBlur(){
    this.setState({titleFocus: false});
  }

  render(){
    let {answer,
         title,
         answers,
         multiple,
         error,
         titleError,
         answerError,
         titleFocus} = this.state;

    let answerList = answers.map((item, i) => {
      return (
        <div>
          <Divider />
          <ListItem
            rightIconButton={
              <IconButton
                touch={true}
                onMouseUp={this.removeAnswer.bind(this,i)}
              >
                <Delete />
              </IconButton>
            }
            primaryText={item}
            key={i}
          />
          <Divider />
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="center-text col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <Paper className={s.container}>
              <TextField
                value={title}
                id="poll-title-input"
                floatingLabelText="Poll Title"
                className={`${s.titleField} ${titleFocus || title ? s.focus : ''}`}
                floatingLabelStyle={{color: 'black'}}
                floatingLabelFocusStyle={{color: this.context.muiTheme.palette.accent1Color}}
                onChange={this.changeTitle.bind(this)}
                errorText={titleError}
                onFocus={this.titleFocus.bind(this)}
                onBlur={this.titleBlur.bind(this)}
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
                  floatingLabelStyle={{color: 'black'}}
                  floatingLabelFocusStyle={{color: this.context.muiTheme.palette.accent1Color}}
                  onChange={this.changeAnswer.bind(this)}
                  onKeyDown={this.keyPress.bind(this)}
                  errorText={answerError}
                />

                <FloatingActionButton mini={true} secondary={true} className={s.add} onMouseUp={this.addAnswer.bind(this)}>
                  <Add />
                </FloatingActionButton>
              </div>

            <Checkbox
              label="Enable multiple answers?"
              checked={multiple}
              onCheck={this.multipleCheck.bind(this)}
              className={s.checkbox}
            />

            <FlatButton
              primary={true}
              label="Create Poll"
              onMouseUp={this.submit.bind(this)}
            />
            <span className={s.error}>{error}</span>
          </div>
        </div>
      </div>
    );
  }
}

CreatePoll.contextTypes = {
  muiTheme: React.PropTypes.object.isRequired
}

export default withStyles(s)(CreatePoll);
