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
    Poll.aggregate([
      { $match: { author: id } },
      { $unwind: '$votes' },
      { $group: { _id: null, vts: { $push: '$votes' } } },
      { $project: { _id: 0, votes: '$vts' } },
    ])
      .exec((err, res) => err ? reject(err) : resolve(res));
  });
}

export function countUserRecievedVotes(id) {
  return new Promise((resolve, reject) => {
    Poll.aggregate([
      { $match: { author: id } },
      { $unwind: '$votes' },
      { $group: { _id: null, vts: { $push: '$votes' } } },
      { $project: { _id: 0, voteCount: { $size: '$vts' } } },
    ])
      .exec((err, [{ voteCount }]) => err ? reject(err) : resolve(voteCount));
  });
}

export function getPollAuthor(id) {
  return new Promise((resolve, reject) => {
    Poll
      .findById(id)
      .populate({
        path: 'author',
      })
      .exec((err, res) => err ? reject(err) : resolve(res.author));
  });
}

export function getPollVotes(id) {
  return new Promise((resolve, reject) => {
    Poll
      .findById(id)
      .populate({
        path: 'votes',
      })
      .exec((err, res) => err ? reject(err) : resolve(res.votes));
  });
}

export function countPollVotes(id) {
  return new Promise((resolve, reject) => {
    Poll.aggregate([
      { $match: { _id: id } },
      { $project: { voteCount: { $size: '$votes' } } },
    ])
      .exec((err, [{ voteCount }]) => err ? reject(err) : resolve(voteCount));
  });
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
    Poll
      .findOne({ votes: id })
      .exec((err, res) => err ? reject(err) : resolve(res));
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
  return new Promise((resolve, reject) => {
    Poll.aggregate([
      { $match: query },
      { $project: { voteCount: { $size: '$votes' }, document: '$$ROOT' } },
      { $sort: { voteCount: -1 } },
    ])
      .exec((err, res) => err ? reject(err) : resolve(res.map(r => r.document)));
  });
}

function newPolls(query) {
  return new Promise((resolve, reject) => {
    Poll.find(query).sort({ createdAt: -1 })
      .exec((err, res) => err ? reject(err) : resolve(res));
  });
}

function trendingPolls(query) {
  return new Promise((resolve, reject) => {
    Poll.find(query).sort('-updatedAt')
      .exec((err, res) => err ? reject(err) : resolve(res));
  });
}

export function createPoll(title, options, userId, multi) {
  const poll = new Poll({
    title,
    options,
    multi,
    author: userId,
  });
  return new Promise((resolve, reject) => {
    poll.save((err, res) =>
      err ? reject(err) : resolve(res)
    );
  });
}

export function createVote(user, poll, options) {
  const vote = new Vote({
    user,
    options,
  });
  return new Promise((resolve, reject) => {
    vote.save((err, res) => {
      if (err) {
        reject(err);
      }
      else {
        Poll.findByIdAndUpdate(poll, { $push: { votes: res._id } })
          .exec((updErr) => updErr ? reject(updErr) : resolve(res));
      }
    });
  });
}
