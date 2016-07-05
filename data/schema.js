/* eslint-disable comma-dangle, no-use-before-define, no-shadow, no-underscore-dangle */
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
  GraphQLEnumType
} from 'graphql';

import GraphQLDate from 'graphql-custom-datetype';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions
  // toGlobalId
} from 'graphql-relay';

import * as db from './database.js';

/* eslint-enable comma-dangle */

class Store {}

const store = new Store();

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId);
    if (type === 'Poll') {
      return db.getPoll(id);
    }
    else if (type === 'User') {
      return db.getUser(id);
    }
    else if (type === 'Vote') {
      return db.getVote(id);
    }
    else if (type === 'Store') {
      return store;
    }
    return null;
  },
  (obj) => {
    if (obj instanceof db.Poll) {
      return pollType;
    }
    else if (obj instanceof db.User) {
      return userType;
    }
    else if (obj instanceof db.Vote) {
      return voteType;
    }
    else if (obj instanceof Store) {
      return storeType;
    }
    return null;
  }
);

const pollSortEnum = new GraphQLEnumType({
  name: 'PollSort',
  description: 'Sorting parameters for polls',
  values: {
    TRENDING: {
      value: 1,
      description: 'Trending polls: polls with the most recent votes.',
    },
    RECENT: {
      value: 2,
      description: 'Newest polls: polls that were recently created.',
    },
    TOP: {
      value: 3,
      description: 'Most voted polls',
    },
  },
});

const userType = new GraphQLObjectType({
  name: 'User',
  description: 'Registered user',
  fields: (() => ({
    id: globalIdField('User'),
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    bio: {
      type: GraphQLString,
    },
    votes: {
      type: voteConnectionType,
      args: connectionArgs,
      resolve: ((user, args) =>
                connectionFromArray(db.getUserVotes(user.id), args)),
    },
    voteCount: {
      type: GraphQLInt,
      resolve: (user => db.getUserVotes(user.id).length),
    },
    recievedVotesCount: {
      type: GraphQLInt,
      resolve: (user => db.getUserRecievedVotes(user.id)),
    },
    polls: {
      type: pollConnectionType,
      args: {
        orderBy: {
          type: pollSortEnum,
        },
        ...connectionArgs,
      },
      resolve: ((user, { orderBy, ...args }) =>
                connectionFromArray(db.getUserPolls(user.id, orderBy), args)),
    },
    pollCount: {
      type: GraphQLInt,
      resolve: (user => db.getUserPolls(user.id).length),
    },
  })),
  interfaces: [nodeInterface],
});

const pollType = new GraphQLObjectType({
  name: 'Poll',
  description: 'Poll which can be voted by registered users',
  fields: (() => ({
    id: globalIdField('Poll'),
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    options: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    multi: {
      type: GraphQLBoolean,
    },
    votes: {
      type: voteConnectionType,
      args: connectionArgs,
      resolve: ((poll, args) =>
                connectionFromArray(db.getPollVotes(poll.id), args)),
    },
    voteCount: {
      type: GraphQLInt,
      resolve: (poll => db.getPollVotes(poll.id).length),
    },
    author: {
      type: new GraphQLNonNull(userType),
      resolve: ((poll) => db.getPollAuthor(poll.id)),
    },
    timestamp: {
      type: new GraphQLNonNull(GraphQLDate),
    },
  })),
  interfaces: [nodeInterface],
});

const {
  connectionType: pollConnectionType,
  edgeType: pollEdgeType,
} = connectionDefinitions({
  name: 'Poll',
  nodeType: pollType,
});

const voteType = new GraphQLObjectType({
  name: 'Vote',
  description: 'User vote on a poll',
  fields: (() => ({
    id: globalIdField('Vote'),
    user: {
      type: new GraphQLNonNull(userType),
      resolve: ((vote) => db.getVoteUser(vote.id)),
    },
    poll: {
      type: new GraphQLNonNull(pollType),
      resolve: ((vote) => db.getVotePoll(vote.id)),
    },
    options: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLInt))),
    },
    timestamp: {
      type: new GraphQLNonNull(GraphQLDate),
    },
  })),
  interfaces: [nodeInterface],
});

const {
  connectionType: voteConnectionType,
  edgeType: voteEdgeType,
} = connectionDefinitions({
  name: 'Vote',
  nodeType: voteType,
});

const storeType = new GraphQLObjectType({
  name: 'Store',
  fields: (() => ({
    id: globalIdField('Store'),
    votes: {
      type: voteConnectionType,
      args: connectionArgs,
      resolve: ((store, args) => connectionFromArray(db.getVotes(), args)),
    },
    voteCount: {
      type: GraphQLInt,
      resolve: (() => db.getVotes().length),
    },
    pollCount: {
      type: GraphQLInt,
      resolve: (() => db.getPolls().length),
    },
    polls: {
      type: pollConnectionType,
      args: {
        ...connectionArgs,
        orderBy: {
          type: pollSortEnum,
        },
      },
      resolve: ((store, { orderBy, ...args }) =>
                connectionFromArray(db.getPolls(orderBy), args)),
    },
  })),
  interfaces: [nodeInterface],
});

const Root = new GraphQLObjectType({
  name: 'Root',
  fields: (() => ({
    node: nodeField,
    viewer: {
      type: userType,
      resolve: ((root, args, { viewerId }) => db.getUser(viewerId)),
    },
    store: {
      type: storeType,
      resolve: (() => store),
    },
  })),
});

const CreatePollMutation = mutationWithClientMutationId({
  name: 'CreatePoll',

  inputFields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    multi: {
      type: GraphQLBoolean,
    },
    options: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    author: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },

  outputFields: {
    pollEdge: {
      type: pollEdgeType,
      resolve: (poll => (
        {
          cursor: cursorForObjectInConnection(db.getPolls(), poll),
          node: poll,
        }
      )),
    },
    viewer: {
      type: userType,
      resolve: ((root, args, { viewerId }) => db.getUser(viewerId)),
    },
    store: {
      type: storeType,
      resolve: (() => store),
    },
  },

  mutateAndGetPayload: ({ title, multi, options, author }) => {
    const { id: authorId } = fromGlobalId(author);
    const poll = db.createPoll(title, options, authorId, multi);
    return poll;
  },

});

const CreateVoteMutation = mutationWithClientMutationId({
  name: 'VotePoll',
  
  inputFields: {
    poll: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user: {
      type: new GraphQLNonNull(GraphQLID),
    },
    options: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLInt))),
    },
  },
  
  outputFields: {
    voteEdge: {
      type: voteEdgeType,
      resolve: (({ voteId }) => {
        const vote = db.getVote(voteId);
        return {
          cursor: cursorForObjectInConnection(db.getVotes(), vote),
          node: vote,
        };
      }),
    },
    viewer: {
      type: userType,
      resolve: ((root, args, { viewerId }) => db.getUser(viewerId)),
    },
    store: {
      type: storeType,
      resolve: (() => store),
    },
    poll: {
      type: pollType,
      resolve: (({ pollId }) => db.getPoll(pollId)),
    },
  },
  
  mutateAndGetPayload: ({ poll, user, options }) => {
    const { id: pollId } = fromGlobalId(poll);
    const { id: userId } = fromGlobalId(user);
    const vote = db.createVote(userId, pollId, options);
    return {
      voteId: vote.id,
      pollId,
    };
  },
  
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createPoll: CreatePollMutation,
    votePoll: CreateVoteMutation,
  },
});

const schema = new GraphQLSchema({
  query: Root,
  mutation: Mutation,
});

export default schema;
