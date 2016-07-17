/* eslint-disable no-restricted-syntax, guard-for-in, prefer-const */

export class User {
  constructor(obj) {
    for (let prop in obj) {
      if (prop === 'timestamp') {
        this[prop] = new Date(obj[prop]);
      }
      else {
        this[prop] = obj[prop];
      }
    }
  }
}

export class Poll {
  constructor(obj) {
    for (let prop in obj) {
      if (prop === 'timestamp') {
        this[prop] = new Date(obj[prop]);
      }
      else {
        this[prop] = obj[prop];
      }
    }
  }
}

export class Vote {
  constructor(obj) {
    for (let prop in obj) {
      if (prop === 'timestamp') {
        this[prop] = new Date(obj[prop]);
      }
      else if (prop === 'option') {
        this.options = [obj[prop]];
      }
      else {
        this[prop] = obj[prop];
      }
    }
  }
}

import data from './data';

let { users, polls, votes } = data;

users = users.map((user) => new User(user));

polls = polls.map((poll) => new Poll(poll));

votes = votes.map((vote) => new Vote(vote));

function findById(item) {
  return item.id === this;
}

export function getViewer() {
  return users[0];
}

export function getUser(id) {
  return users.find(findById, +id);
}

export function getUsers() {
  return users;
}

export function getPoll(id) {
  return polls.find(findById, +id);
}

export function getPolls(orderBy = 1, query = '') {
  const filteredPolls =
        polls.filter((poll) => poll.title.search(new RegExp(query, 'i')) !== -1);
  return orderPolls(filteredPolls, orderBy);
}

export function getVote(id) {
  return votes.find(findById, +id);
}

export function getVotes() {
  return votes;
}

export function getUserPolls(id, orderBy = 1) {
  return orderPolls(polls.filter((poll) => poll.author === id), orderBy);
}

export function getUserVotes(id) {
  return votes.filter((vote) => vote.user === id);
}

export function getUserRecievedVotes(id) {
  const userPolls = polls.filter((poll) => poll.author === id);
  const pollVotesCounter = userPolls.map(poll => getPollVotes(poll.id).length);
  return pollVotesCounter.reduce((prev, curr) => prev + curr);
}

export function getPollAuthor(id) {
  return getUser(getPoll(id).author);
}

export function getPollVotes(id) {
  return votes.filter((vote) => vote.poll === id);
}

export function getVoteUser(id) {
  return getUser(getVote(id).user);
}

export function getVotePoll(id) {
  return getPoll(getVote(id).poll);
}

function sortByTime(a, b) {
  return b.timestamp - a.timestamp;
}

function orderPolls(unordered, orderBy) {
  switch (orderBy) {
    case 2:
      return newPolls(unordered);
    case 3:
      return topPolls(unordered);
    case 1:
    default:
      return trendingPolls(unordered);
  }
}

function topPolls(unordered) {
  return unordered.sort((pA, pB) => getPollVotes(pB.id).length - getPollVotes(pA.id).length);
}

function newPolls(unordered) {
  return unordered.sort(sortByTime);
}

function trendingPolls(unordered) {
  return unordered.sort((pA, pB) => {
    const vA = getPollVotes(pA.id);
    const vB = getPollVotes(pB.id);
    vA.sort(sortByTime);
    vB.sort(sortByTime);
    if (vA.length === 0) {
      return true;
    }
    if (vB.length === 0) {
      return false;
    }

    return sortByTime(vA[0], vB[0]);
  });
}

export function createPoll(title, options, userId, multi) {
  const poll = new Poll({
    id: polls.length + 1,
    title,
    options,
    multi,
    author: +userId,
    timestamp: new Date(),
  });
  polls.push(poll);
  return poll;
}

export function createVote(user, poll, options) {
  const vote = new Vote({
    id: votes.length + 1,
    user: +user,
    poll: +poll,
    options,
    timestamp: new Date(),
  });
  votes.push(vote);
  return vote;
}
