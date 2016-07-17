/* eslint-disable prefer-arrow-callback, func-names, new-cap */
import mongoose from 'mongoose';
import * as db from '../database';
import * as mock from '../mock/database';
import chai from 'chai';

chai.use(require('chaid'));
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));
chai.should();

before(function(done) {
  mongoose.connect('mongodb://localhost/question-it', done);
  mongoose.Promise = global.Promise;
  const conn = mongoose.connection;
  conn.on('error', console.error.bind(console, 'connection error'));
});

describe('User', function() {
  describe('getViewer', function() {
    it('Should return the first user (for now)', function() {
      return db.getViewer().should.eventually.have.property('username', mock.getViewer().username);
    });
  });

  describe('getUser', function() {
    it('Should return the right user', function() {
      return db.getUser('578a98aa39e33aac1785617b')
        .should.eventually.have.id('578a98aa39e33aac1785617b');
    });
  });

  describe('getUsers', function() {
    it('Should have 5 users (for now)', function() {
      return db.getUsers().should.eventually.have.length(5);
    });
  });

  describe('countUserPolls', function() {
    it('Should return the right amount of polls', function() {
      return db.countUserPolls('578a98aa39e33aac1785617b')
        .should.eventually.equal(mock.getUserPolls(4).length);
    });
  });

  describe('getUserPolls', function() {
    it('Should return polls', function() {
      return db.getUserPolls('578a98aa39e33aac1785617b')
        .should.eventually.all.have.property('type', 'Poll');
    });

    it('Should return right polls', function() {
      return db.getUserPolls('578a98aa39e33aac1785617b')
        .should.eventually.include.something.that.have.property('title', mock.getUserPolls(4)[0].title);
    });
  });
});
