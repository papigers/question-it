import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
import { User, Poll, Vote } from './models';

export function getViewer(promise = true) {
  const query = User.findOne({});
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, res) => err ? reject(err) : resolve(res));
    });
  }
  return {
    query,
  };
}

export function findDoc(model, q, promise = true, one = false) {
  const query = one ? model.findOne(q) : model.find(q);
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, res) => err ? reject(err) : resolve(res));
    });
  }
  return {
    query,
  };
}

export function findUser(q, one = false, promise = true) {
  return findDoc(User, q, promise, one);
}

export function getUser(id, promise = true) {
  const query = User.findById(id);
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, res) => err ? reject(err) : resolve(res));
    });
  }
  return {
    query,
  };
}

export function getUsers(promise = true) {
  const query = User.find({});
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, res) => err ? reject(err) : resolve(res));
    });
  }
  return {
    query,
  };
}

export function findPoll(q, one = false, promise = true) {
  q.deleted = false;
  return findDoc(Poll, q, promise, one);
}

export function getPoll(id, promise = true) {
  const query = Poll.findOne({ id, deleted: false });
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, res) => err ? reject(err) : resolve(res));
    });
  }
  return {
    query,
  };
}

export function countPolls(query = {}, promise = true) {
  query.deleted = false;
  const q = Poll.count(query);
  if (promise) {
    return new Promise((resolve, reject) => {
      q.exec((err, res) => err ? reject(err) : resolve(res));
    });
  }
  return {
    query: q,
  };
}

export function findVote(q, one = false, promise = true) {
  return findDoc(Vote, q, promise, one);
}

export function getVote(id, promise = true) {
  const query = Vote.findById(id);
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, res) => err ? reject(err) : resolve(res));
    });
  }
  return {
    query,
  };
}

export function getVotes(query = {}, promise = true) {
  const q = Vote.find(query);
  if (promise) {
    return new Promise((resolve, reject) => {
      q.exec((err, res) => err ? reject(err) : resolve(res));
    });
  }
  return {
    query: q,
  };
}

export function countVotes(query = {}, promise = true) {
  const q = Vote.count(query);
  if (promise) {
    return new Promise((resolve, reject) => {
      q.exec((err, res) => err ? reject(err) : resolve(res));
    });
  }
  return {
    query: q,
  };
}

export function getUserPolls(id, orderBy = 1, promise = true) {
  return getPolls({ author: id, deleted: false }, orderBy, promise);
}

export function countUserPolls(id, promise = true) {
  return countPolls({ author: id, deleted: false }, promise);
}

export function getUserVotes(id, promise = true) {
  return getVotes({ user: id }, promise);
}

export function countUserVotes(id, promise = true) {
  return countVotes({ user: id }, promise);
}

export function getUserRecievedVotes(id, promise = true) {
  const query = Poll.aggregate([
    { $match: { author: id } },
    { $unwind: '$votes' },
    { $lookup: { from: 'votes', localField: 'votes', foreignField: '_id', as: 'votes' } },
    { $unwind: '$votes' },
  ]);
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, res) => err ? reject(err) : resolve(res.votes));
    });
  }
  return {
    query,
    map: (res) => res.votes,
  };
}

export function countUserRecievedVotes(id, promise = true) {
  const query = Poll.aggregate([
    { $match: { author: id } },
    { $unwind: '$votes' },
    { $group: { _id: null, vts: { $push: '$votes' } } },
    { $project: { _id: 0, voteCount: { $size: '$vts' } } },
  ]);
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, res) => err ? reject(err) : resolve(res[0] && res[0].voteCount ? res[0].voteCount : 0));
    });
  }
  return {
    query,
    map: (res) => res[0] && res[0].voteCount ? res[0].voteCount : 0,
  };
}

export function getPollAuthor(id, promise = true) {
  const query = Poll.findById(id).populate({ path: 'author' });
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, res) => err ? reject(err) : resolve(res.author));
    });
  }
  return {
    query,
    map: (res) => res.author,
  };
}

export function getPollVotes(id, promise = true) {
  const query = Poll.aggregate([
    { $match: { _id: id } },
    { $unwind: '$votes' },
    { $lookup: { from: 'votes', localField: 'votes', foreignField: '_id', as: 'votes' } },
    { $unwind: '$votes' },
  ]);
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, res) => err ? reject(err) : resolve(res.votes));
    });
  }
  return {
    query,
    map: (res) => res.votes,
  };
}

export function countPollVotes(id, promise = true) {
  const query = Poll.aggregate([
    { $match: { _id: id } },
    { $project: { voteCount: { $size: '$votes' } } },
  ]);
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, [{ voteCount }]) => err ? reject(err) : resolve(voteCount));
    });
  }
  return {
    query,
    map: ([{ voteCount }]) => voteCount,
  };
}

export function getVoteUser(id, promise = true) {
  const query = Vote.findById(id).populate({ path: 'user' });
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, res) => err ? reject(err) : resolve(res.user));
    });
  }
  return {
    query,
    map: (res) => res.user,
  };
}

export function getVotePoll(id, promise = true) {
  const query = Poll.findOne({ votes: id });
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, res) => err ? reject(err) : resolve(res));
    });
  }
  return {
    query,
  };
}

export function getPolls(query = {}, orderBy = 1, promise = true) {
  query.deleted = false;
  switch (orderBy) {
    case 2:
      return newPolls(query, promise);
    case 3:
      return topPolls(query, promise);
    case 1:
    default:
      return trendingPolls(query, promise);
  }
}

function topPolls(q, promise = true) {
  const query = Poll.aggregate([
    { $match: q },
    { $project: { voteCount: { $size: '$votes' }, document: '$$ROOT' } },
    { $sort: { voteCount: -1 } },
  ]);
  if (promise) {
    return new Promise((resolve, reject) => {
      query.exec((err, res) => err ? reject(err) : resolve(res.map(r => r.document)));
    });
  }
  return {
    query,
    map: (res) => res.document,
  };
}

function newPolls(query, promise = true) {
  const q = Poll.find(query).sort({ createdAt: -1 });
  if (promise) {
    return new Promise((resolve, reject) => {
      q.exec((err, res) => err ? reject(err) : resolve(res));
    });
  }
  return {
    query: q,
  };
}

function trendingPolls(query, promise = true) {
  const q = Poll.find(query).sort('-updatedAt');
  if (promise) {
    return new Promise((resolve, reject) => {
      q.exec((err, res) => err ? reject(err) : resolve(res));
    });
  }
  return {
    query: q,
  };
}

export function createPoll(title, options, userHref, multi) {
  return new Promise((resolve, reject) => {
    findUser({ href: userHref }, true).then(user => {
      const poll = new Poll({
        title,
        options,
        multi,
        author: user.id,
      });
      poll.save(
        (err, res) => err ? reject(err) : resolve(res)
      );
    });
  });
}

export function createVote(userHref, pollHref, options) {
  return new Promise((resolve, reject) => {
    findUser({ href: userHref }, true).then(user => {
      const vote = new Vote({
        user: user.id,
        options,
      });
      vote.save((err, res) => {
        if (err) {
          reject(err);
        }
        else {
          Poll.findOneAndUpdate({ href: pollHref }, { $push: { votes: res.id } }).exec((updErr) => {
            if (updErr) {
              res.remove();
              return reject(updErr);
            }
            resolve(res);
          });
        }
      });
    });
  });
}

export function createUser(username, email, password) {
  const user = new User({
    username,
    email,
  });
  return new Promise((resolve, reject) => {
    user.generateHash(password, (error, hash) => {
      if (error) {
        return reject(error);
      }
      user.password = hash;
      user.save((err, res) =>
        err ? reject(err) : resolve(res)
      );
    });
  });
}

export function updateUser(href, update) {
  const { profile } = update;
  delete update.profile;
  ['facebook', 'google', 'linkedin'].forEach(social => {
    if (profile && profile[social]) {
      update[`profile.${social}.public`] = !(!profile[social].public);
    }
  });
  return new Promise((resolve, reject) => {
    User.findOneAndUpdate({ href }, update, { new: true }, (err, user) => {
      if (err) {
        return reject(err);
      }
      return resolve(user);
    });
  });
}

export function deletePoll(href) {
  return new Promise((resolve, reject) => {
    findPoll({ href }, true).then(poll => {
      poll.deleted = true;
      poll.save((err) =>
                err ? reject(err) : resolve(href));
    }).catch(reject);
  });
}
