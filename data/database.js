import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
import { User, Poll, Vote } from './models';

export function getViewer() {
  return new Promise((resolve, reject) => {
    User.findOne({})
      .exec((err, res) => err ? reject(err) : resolve(res));
  });
}

export function getUser(id) {
  return new Promise((resolve, reject) => {
    User.findById(id)
      .exec((err, res) => err ? reject(err) : resolve(res));
  });
}

export function getUsers() {
  return new Promise((resolve, reject) => {
    User.find({})
      .exec((err, res) => err ? reject(err) : resolve(res));
  });
}

export function getPoll(id) {
  return new Promise((resolve, reject) => {
    Poll.findById(id)
      .exec((err, res) => err ? reject(err) : resolve(res));
  });
}

export function countPolls(query = {}) {
  return new Promise((resolve, reject) => {
    Poll.count(query)
      .exec((err, res) => err ? reject(err) : resolve(res));
  });
}

export function getVote(id) {
  return new Promise((resolve, reject) => {
    Vote.findById(id)
      .exec((err, res) => err ? reject(err) : resolve(res));
  });
}

export function getVotes(query = {}) {
  return new Promise((resolve, reject) => {
    Vote.find(query)
      .exec((err, res) => err ? reject(err) : resolve(res));
  });
}

export function countVotes(query = {}) {
  return new Promise((resolve, reject) => {
    Vote.count(query)
      .exec((err, res) => err ? reject(err) : resolve(res));
  });
}

export function getUserPolls(id, orderBy = 1) {
  return getPolls({ author: id }, orderBy);
}

export function countUserPolls(id) {
  return countPolls({ author: id });
}

export function getUserVotes(id) {
  return getVotes({ user: id });
}

export function countUserVotes(id) {
  return countVotes({ user: id });
}

export function getUserRecievedVotes(id) {
  return new Promise((resolve, reject) => {
    getUserPolls(id).then(polls => {
      Vote.find({
        poll: { $in: polls },
      })
        .exec((err, res) => err ? reject(err) : resolve(res));
    });
  });
}

export function countUserRecievedVotes(id) {
  return new Promise((resolve, reject) => {
    getUserPolls(id).then(polls => {
      Vote.count({
        poll: { $in: polls },
      })
        .exec((err, res) => err ? reject(err) : resolve(res));
    });
  });
}

export function getPollAuthor(id) {
  return new Promise((resolve, reject) => {
    Poll
      .findById(id)
      .populate({
        path: 'author',
      })
      .exec((error, poll) => {
        if (error) {
          reject(error);
        }
        else {
          resolve(poll.author);
        }
      });
  });
}

export function getPollVotes(id) {
  return getVotes({ poll: id });
}

export function countPollVotes(id) {
  return countVotes({ poll: id });
}

export function getVoteUser(id) {
  return new Promise((resolve, reject) => {
    Vote
      .findById(id)
      .populate({
        path: 'user',
      })
      .exec((err, res) => err ? reject(err) : resolve(res.user));
  });
}

export function getVotePoll(id) {
  return new Promise((resolve, reject) => {
    Vote
      .findById(id)
      .populate({
        path: 'poll',
      })
      .exec((err, res) => err ? reject(err) : resolve(res.poll));
  });
}

export function getPolls(query = {}, orderBy = 1) {
  switch (orderBy) {
    case 2:
      return newPolls(query);
    case 3:
      return topPolls(query);
    case 1:
    default:
      return trendingPolls(query);
  }
}

function topPolls(query) {
  const newQuery = {};
  Object.keys(query).forEach(key => {
    newQuery[`poll.0.${key}`] = query[key];
  });
  return new Promise((resolve, reject) => {
    Vote.aggregate([
      { $group: { _id: '$poll', votes: { $sum: 1 } } },
      { $sort: { votes: -1 } },
      { $lookup: { from: 'polls', localField: '_id', foreignField: '_id', as: 'poll' } },
      { $match: newQuery },
    ]).then(aggr => {
      const polls = aggr.map(v => v.poll[0]);
      Poll.find(Object.assign(query, { _id: { $nin: polls.map(poll => poll._id) } }))
        .exec((err, res) => err ? reject(err) : resolve(polls.concat(res)));
    });
  });
}

function newPolls(query) {
  return new Promise((resolve, reject) => {
    Poll.find(query).sort({ createdAt: -1 })
      .exec((err, res) => err ? reject(err) : resolve(res));
  });
}

function trendingPolls(query) {
  const newQuery = {};
  Object.keys(query).forEach(key => {
    newQuery[`poll.0.${key}`] = query[key];
  });

  return new Promise((resolve, reject) => {
    Vote.aggregate([
      { $group: { _id: '$poll', mostRecentVote: { $max: '$createdAt' } } },
      { $sort: { mostRecentVote: -1 } },
      { $lookup: { from: 'polls', localField: '_id', foreignField: '_id', as: 'poll' } },
      { $match: newQuery },
    ])
      .exec((err, res) => {
        const polls = res.map(r => r.poll[0]);
        return err ? reject(err) : resolve(polls);
      });
  });
}

export function createPoll(title, options, userId, multi) {
  const poll = new Poll({
    title,
    options,
    multi,
    author: userId,
  });
  return poll.save();
}

export function createVote(user, poll, options) {
  const vote = new Vote({
    user,
    poll,
    options,
  });
  return vote.save();
}
