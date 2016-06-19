import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} from 'graphql';

import GraphQLDate from 'graphql-custom-datetype';

import * as db from './database';

let userType, pollType, voteType;

userType = new GraphQLObjectType({
  name: 'User',
  description: 'Registered user',
  fields: (() => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    email: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    },
    username: {
      type: GraphQLString
    },
    polls: {
      type: new GraphQLList(pollType),
      resolve: user => db.getUserPolls(user.id)
    },
    votes: {
      type: new GraphQLList(voteType),
      resolve: user => db.getUserVotes(user.id)
    }
  })),
  resolve: id => db.getUsers()[id]
});

pollType = new GraphQLObjectType({
  name: 'Poll',
  description: 'Poll which can be voted by registered users',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    title: {
      type: GraphQLString
    },
    options: {
      type: new GraphQLList(GraphQLString),
    },
    votes: {
      type: new GraphQLList(voteType),
      resolve: poll => db.getPollVotes(poll.id)
    },
    author: {
      type: userType,
      resolve: poll => db.getPollAuthor(poll.id)
    },
    timestamp: {
      type: GraphQLDate
    }
  })
});

voteType = new GraphQLObjectType({
  name: 'Vote',
  description: 'User vote on a poll',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    user: {
      type: userType,
      resolve: vote => db.getVoteUser(vote.id)
    },
    poll: {
      type: pollType,
      resolve: vote => db.getVotePoll(vote.id)
    },
    vote: {
      type: GraphQLInt
    },
    timestamp: {
      type: GraphQLDate
    }
  })
});

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      users: {
        type: new GraphQLList(userType),
        resolve: () => db.getUsers()
      },
      polls: {
        type: new GraphQLList(pollType),
        resolve: () => db.getPolls()
      },
      votes: {
        type: new GraphQLList(voteType),
        resolve: () => db.getVotes()
      }
    })
  })
});

export default schema;
