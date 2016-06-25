/* eslint-disable comma-dangle, no-use-before-define */
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLEnumType
} from 'graphql';

import GraphQLDate from 'graphql-custom-datetype';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  // cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  // mutationWithClientMutationId,
  nodeDefinitions
  // toGlobalId
} from 'graphql-relay';

import * as db from './database';

/* eslint-enable comma-dangle */

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
    return null;
  }
);

const pollSortEnum = new GraphQLEnumType({
  name: 'PollSort',
  description: 'Sorting parameters for polls',
  values: {
    TRENDING: {
      value: 1,
      description: 'Trending polls',
    },
    NEW: {
      value: 2,
      description: 'Newest polls',
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
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    votes: {
      type: voteConnectionType,
      args: connectionArgs,
      resolve: ((user, args) => connectionFromArray(db.getVotes(), args)),
    },
    polls: {
      type: pollConnectionType,
      args: {
        ...connectionArgs,
        orderBy: {
          type: pollSortEnum,
        },
      },
      resolve: ((user, { orderBy, ...args }) => connectionFromArray(db.getPolls(orderBy), args)),
    },
  })),
  interfaces: [nodeInterface],
});

const pollType = new GraphQLObjectType({
  name: 'Poll',
  description: 'Poll which can be voted by registered users',
  fields: (() => ({
    id: globalIdField('Poll'),
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    options: {
      type: new GraphQLNonNull(new GraphQLList(GraphQLString)),
    },
    votes: {
      type: voteConnectionType,
      args: connectionArgs,
      resolve: ((user, args) => connectionFromArray(db.getVotes(), args)),
    },
    author: {
      type: new GraphQLNonNull(userType),
    },
    timestamp: {
      type: new GraphQLNonNull(GraphQLDate),
    },
  })),
  interfaces: [nodeInterface],
});

const {
  connectionType: pollConnectionType,
  // edgeType: pollEdgeType,
} = connectionDefinitions({
  name: 'Poll',
  nodeType: pollType,
});


const voteType = new GraphQLObjectType({
  name: 'Vote',
  description: 'User vote on a poll',
  fields: (() => ({
    id: globalIdField('Vote'),
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user: {
      type: new GraphQLNonNull(userType),
    },
    poll: {
      type: new GraphQLNonNull(pollType),
    },
    vote: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    timestamp: {
      type: new GraphQLNonNull(GraphQLDate),
    },
  })),
  interfaces: [nodeInterface],
});

const {
  connectionType: voteConnectionType,
  // edgeType: voteEdgeType,
} = connectionDefinitions({
  name: 'Vote',
  nodeType: voteType,
});

const Root = new GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    node: nodeField,
    viewer: {
      type: userType,
      resolve: () => db.getViewer(),
    },
    user: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (root, { id }) => db.getUsers()[id],
    },
    poll: {
      type: pollType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (root, { id }) => db.getPolls()[id],
    },
    polls: {
      type: pollConnectionType,
      args: {
        ...connectionArgs,
        orderBy: {
          type: pollSortEnum,
        },
      },
      resolve: ((user, { orderBy, ...args }) => connectionFromArray(db.getPolls(orderBy), args)),
    },
    votes: {
      type: voteConnectionType,
      args: connectionArgs,
      resolve: ((user, args) => connectionFromArray(db.getVotes(), args)),
    },
  }),
});

const schema = new GraphQLSchema({
  query: Root,
});

export default schema;
