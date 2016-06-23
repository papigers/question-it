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
  user._id = `${i}`;
  user.votes = [];
  user.polls = [];
  users.push(user);
}

let polls = [];
for (let i = 0; i < 8; i++) {
  let poll = new Poll();
  poll._id = `${i}`;
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
    vote._id = `${(i+1)*(j+1)-1}`;
    let poll = polls[j];
    let user = users[i];
    user.votes.push(`${vote._id}`);
    poll.votes.push(`${vote._id}`);
    vote.user = `${user._id}`;
    vote.poll = `${poll._id}`;
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

export function getViewer(){
  return users[0];
}

export function getUsers(){
  return users;
}

export function getPolls(orderBy = 1){
  return orderPolls(polls, orderBy);
}

export function getVotes(){
  return votes;
}

export function getUserPolls(id, orderBy = 1){
  return orderPolls(users[id].polls.map(pollId => {
    return polls[pollId];
  }), orderBy);
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

function sortByTime(a, b){
  return a.timestamp >= b.timestamp;
}

function orderPolls(polls, orderBy){
  switch(orderBy){
    case 2:
      return newPolls(polls);
    case 3:
      return topPolls(polls);
    case 1:
    default:
      return trendingPolls(polls);
  }
}

function topPolls(polls){
  return polls.sort((pA, pB) => {
    return pA.votes.length >= pB.votes.length;
  });
}

function newPolls(polls){
  return polls.sort(sortByTime);
}

function trendingPolls(polls){
  return polls.sort((pA, pB) => {
    let vA = pA.votes,
        vB = pB.votes;
    vA.sort(sortByTime);
    vB.sort(sortByTime);
    return vA.timestamp >= vB.timestamp;
  });
}
