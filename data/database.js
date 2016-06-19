'use strict';
export class User {};
export class Poll {};
export class Vote {};

let users = [];
for (let i = 0; i < 5; i++) {
  let user = new User();
  user.email = `email${i}@email.com`;
  user.username = `MyUsername${i}`;
  user.password = `1234`;
  user.id = `${i}`;
  user.votes = [];
  user.polls = [];
  users.push(user);
}

let polls = [];
for (let i = 0; i < 8; i++) {
  let poll = new Poll();
  poll.id = `${i}`;
  poll.title = `Poll ${i} Title`;
  let optionsNum = 2 + Math.floor(Math.random() * 3);
  poll.options = [];
  for (let j = 0; j < optionsNum; j++) {
    poll.options.push(`Poll ${i} Option ${j}`);
  }
  poll.votes = [];
  let author = Math.floor(Math.random() * users.length);
  poll.author = `${author}`;
  users[author].polls.push(`${i}`);
  poll.timestamp = new Date();
  polls.push(poll);
}

let votes = [];
for(let i = 0; i < users.length; i++){
  for(let j = 0; j < polls.length; j++){
    let vote = new Vote();
    vote.id = `${(i+1)*(j+1)-1}`;
    let poll = polls[j];
    let user = users[i];
    user.votes.push(`${vote.id}`);
    poll.votes.push(`${vote.id}`);
    vote.user = `${user.id}`;
    vote.poll = `${poll.id}`;
    vote.vote = `${Math.floor(Math.random() * poll.options.length)}`;
    vote.timestamp = new Date();
    votes.push(vote);
  }
}

//console.log("Printing Mock Database:\n\
//            ------------------------\n\n\
//            USERS:\n\
//            ------------------------\n");
//
//console.log(JSON.stringify(users, null, 2));
//
//console.log("\n\
//            ------------------------\n\n\
//            POLLS:\n\
//            ------------------------\n");
//
//console.log(JSON.stringify(polls, null, 2));

export function getUsers(){
  return users;
}

export function getPolls(){
  return polls;
}

export function getVotes(){
  return votes;
}

export function getUserPolls(id){
  return users[id].polls.map(pollId => {
    return polls[pollId];
  });
}

export function getUserVotes(id){
  return users[id].votes.map(voteId => {
    return votes[voteId];
  })
}

export function getPollAuthor(id){
  return users[polls[id].author];
}

export function getPollVotes(id){
  return polls[id].votes.map(voteId => {
    return votes[voteId];
  })
}

export function getVoteUser(id){
  return users[votes[id].user];
}

export function getVotePoll(id){
  return polls[votes[id].poll];
}
