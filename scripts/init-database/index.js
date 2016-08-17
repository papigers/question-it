/* eslint-disable no-console */
require('babel-register');
import mongoose from 'mongoose';
import { User, Poll, Vote } from '../../data/models';
import data from './data';
import config from '../../config';

const clean = true;
const MONGODB_URI = config.mongoRL;

mongoose.connect(MONGODB_URI, () => {
  if (clean) {
    mongoose.connection.db.dropDatabase();
  }
});

const db = mongoose.connection;

const users = [];
const polls = [];
const votes = [];

db.on('error', console.error.bind(console, 'connection error'));

db.once('open', () => {
  function saveUsers(cb) {
    const i = users.length;
    const u = data.users[i];
    const user = new User(u);
    user.save((err, savedUser) => {
      if (err) {
        console.log(u);
        console.error(err);
        mongoose.connection.close();
        process.exit(1);
      }
      users[i] = savedUser;
      if (i === data.users.length - 1) {
        cb();
      }
      else {
        saveUsers(cb);
      }
    });
  }

  function savePolls(cb) {
    const i = polls.length;
    const p = data.polls[i];
    p.author = users[p.author - 1].id;
    const poll = new Poll(p);
    poll.save((err, savedPoll) => {
      if (err) {
        console.log(p);
        console.error(err);
        mongoose.connection.close();
        process.exit(1);
      }
      polls[i] = savedPoll;

      if (i === data.polls.length - 1) {
        cb();
      }
      else {
        savePolls(cb);
      }
    });
  }

  function saveVotes(cb) {
    const i = votes.length;
    const v = data.votes[i];
    v.user = users[v.user - 1].id;
    const poll = polls[v.poll - 1];

    const vote = new Vote(v);
    vote.save((err, savedVote) => {
      if (err) {
        console.log(v);
        console.error(err);
        mongoose.connection.close();
        process.exit(1);
      }

      votes[i] = savedVote;
      poll.votes.push(savedVote);

      poll.save((errPoll, savedPoll) => {
        if (errPoll) {
          console.error(err);
          mongoose.connection.close();
          process.exit(1);
        }

        polls[v.poll - 1] = savedPoll;

        if (i === data.votes.length - 1) {
          cb();
        }
        else {
          saveVotes(cb);
        }
      });
    });
  }

  saveUsers(() => {
    savePolls(() => {
      saveVotes(() => {
        mongoose.connection.close();
      });
    });
  });
});
/* eslint-enable no-console */
