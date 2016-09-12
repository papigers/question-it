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
  GraphQLEnumType,
  GraphQLInputObjectType
} from 'graphql';

import GraphQLDate from 'graphql-date';

import {
  connectionArgs,
  connectionDefinitions,
  // cursorForObjectInConnection,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions
  // toGlobalId
} from 'graphql-relay';

import * as db from './database.js';

import {
  connectionFromMongooseQuery,
  connectionFromMongooseAggregate
} from 'relay-mongodb-connection';

import Query from 'mongoose/lib/query';

function connectionFromMongoose({ query, map }, args) {
  if (query instanceof Query) {
    return connectionFromMongooseQuery(query, args, map);
  }
  return connectionFromMongooseAggregate(query, args, map);
}

/* eslint-enable comma-dangle */

class Store {}

const store = new Store();

const { nodeInterface, nodeField } = nodeDefinitions(
  (globalId) => {
    const { type, id: href } = fromGlobalId(globalId);
    if (type === 'Poll') {
      return db.findPoll({ href }, true);
    }
    else if (type === 'User') {
      return db.findUser({ href }, true);
    }
    else if (type === 'Vote') {
      return db.findVote({ href }, true);
    }
    else if (type === 'Store') {
      return store;
    }
    return null;
  },
  (obj) => {
    const type = obj.constructor.modelName;
    if (type === 'Poll') {
      return pollType;
    }
    else if (type === 'User') {
      return userType;
    }
    else if (type === 'Vote') {
      return voteType;
    }
    else if (obj instanceof Store) {
      return storeType;
    }
    return null;
  }
);

function privateFieldType(field, type, valueField = 'value', resolve = user => user[field]) {
  const name = field[0].toUpperCase() + field.substr(1);
  return {
    type: new GraphQLObjectType({
      name,
      fields: (() => ({
        [valueField]: {
          type,
        },
        public: {
          type: GraphQLBoolean,
        },
      })),
    }),
    resolve: ((user, args, { viewerId }) => {
      const isPublic = resolve(user).public;
      const value = isPublic || viewerId === user._id.toString() ? resolve(user)[valueField] : null;
      return {
        [valueField]: value,
        public: isPublic,
      };
    }),
  };
}

function privateSocialFieldType(social) {
  return privateFieldType(social, GraphQLString, 'link', (user) => user.profile[social]);
}

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
    id: globalIdField('User', user => user.href),
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLString,
    },
    avatar: {
      type: GraphQLString,
    },
    bio: {
      type: GraphQLString,
    },
    birthDate: privateFieldType('birthDate', GraphQLDate),
    name: privateFieldType('name', GraphQLString),
    facebook: privateSocialFieldType('facebook'),
    google: privateSocialFieldType('google'),
    linkedin: privateSocialFieldType('linkedin'),
    votes: {
      type: voteConnectionType,
      args: connectionArgs,
      resolve: (user, args) => connectionFromMongoose(db.getUserVotes(user._id, false), args),
    },
    voteCount: {
      type: GraphQLInt,
      resolve: (user => db.countUserVotes(user.id)),
    },
    recievedVotes: {
      type: voteConnectionType,
      args: connectionArgs,
      resolve: (user, args) => connectionFromMongoose(db.getUserRecievedVotes(user._id, false), args),
    },
    recievedVotesCount: {
      type: GraphQLInt,
      resolve: (user => db.countUserRecievedVotes(user._id)),
    },
    polls: {
      type: pollConnectionType,
      args: {
        orderBy: {
          type: pollSortEnum,
        },
        ...connectionArgs,
      },
      resolve: (user, { orderBy, ...args }) => connectionFromMongoose(db.getUserPolls(user._id, orderBy, false), args),
    },
    pollCount: {
      type: GraphQLInt,
      resolve: (user => db.countUserPolls(user._id)),
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDate),
    },
    updatedAt: {
      type: new GraphQLNonNull(GraphQLDate),
    },
  })),
  interfaces: [nodeInterface],
});

const pollType = new GraphQLObjectType({
  name: 'Poll',
  description: 'Poll which can be voted by registered users',
  fields: (() => ({
    id: globalIdField('Poll', poll => poll.href),
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
      type: new GraphQLNonNull(userType),
      resolve: ((poll) => db.getPollAuthor(poll._id)),
    },
    votes: {
      type: voteConnectionType,
      args: connectionArgs,
      resolve: (poll, args) => connectionFromMongoose(db.getPollVotes(poll._id, false), args),
    },
    voteCount: {
      type: GraphQLInt,
      resolve: (poll => db.countPollVotes(poll._id)),
    },
    deleted: {
      type: GraphQLBoolean,
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDate),
    },
    updatedAt: {
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
    id: globalIdField('Vote', vote => vote.href),
    user: {
      type: new GraphQLNonNull(userType),
      resolve: ((vote) => db.getVoteUser(vote._id)),
    },
    poll: {
      type: new GraphQLNonNull(pollType),
      resolve: ((vote) => db.getVotePoll(vote._id)),
    },
    options: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(GraphQLInt))),
    },
    createdAt: {
      type: new GraphQLNonNull(GraphQLDate),
    },
    updatedAt: {
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
      resolve: (store, args) => connectionFromMongoose(db.getVotes({}, false), args),
    },
    voteCount: {
      type: GraphQLInt,
      resolve: (() => db.countVotes()),
    },
    pollCount: {
      type: GraphQLInt,
      resolve: (() => db.countPolls()),
    },
    polls: {
      type: pollConnectionType,
      args: {
        ...connectionArgs,
        orderBy: {
          type: pollSortEnum,
        },
        query: {
          type: GraphQLString,
        },
      },
      resolve: (store, { orderBy, query, ...args }) => {
        const q = query ? { title: new RegExp(query, 'i') } : {};
        return connectionFromMongoose(db.getPolls(q, orderBy, false), args);
      },
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
      resolve: ((root, args, context) => db.getUser(context.viewerId)),
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
          cursor: 0,
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
    const { id: authorHref } = fromGlobalId(author);
    return db.createPoll(title, options, authorHref, multi);
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
          cursor: 0,
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
      resolve: (({ pollHref }) => db.findPoll({ href: pollHref }, true)),
    },
  },
  
  mutateAndGetPayload: ({ poll, user, options }) => {
    const { id: pollHref } = fromGlobalId(poll);
    const { id: userHref } = fromGlobalId(user);
    return new Promise((resolve, reject) => {
      db.createVote(userHref, pollHref, options).then(vote => resolve({
        voteId: vote.id,
        pollHref,
      })).catch(reject);
    });
  },
  
});

const RegisterUserMutation = mutationWithClientMutationId({
  name: 'RegisterUser',

  inputFields: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },

  },

  outputFields: {
    user: {
      type: userType,
      resolve: (({ user }) => user),
    },
    error: {
      type: GraphQLString,
      resolve: (({ error }) => error),
    },
  },

  mutateAndGetPayload: ({ username, email, password }) =>
    new Promise((resolve) => {
      db.findUser({ username: new RegExp(username, 'i') }).then(res => {
        if (res.length) {
          resolve({ error: 'Username is already taken.' });
        }
        return db.findUser({ email: new RegExp(email, 'i') });
      }).then(res => {
        if (res.length) {
          resolve({ error: 'Email is already taken.' });
        }
        return db.createUser(username, email, password);
      })
        .then(user => resolve({ user }))
        .catch(() => resolve({ error: 'There was a problem creating the user, try again.' }));
    }),
});

const updateUserInput = new GraphQLInputObjectType({
  name: 'UpdateUser',
  description: 'Update user input',
  fields: (() => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    avatar: {
      type: GraphQLString,
    },
    bio: {
      type: GraphQLString,
    },
    birthDate: {
      type: new GraphQLInputObjectType({
        name: 'BirthDateUpdate',
        fields: (() => ({
          public: {
            type: GraphQLBoolean,
          },
          value: {
            type: GraphQLDate,
          },
        })),
      }),
    },
    name: {
      type: new GraphQLInputObjectType({
        name: 'NameUpdate',
        fields: (() => ({
          public: {
            type: GraphQLBoolean,
          },
          value: {
            type: GraphQLString,
          },
        })),
      }),
    },
    profile: {
      type: new GraphQLInputObjectType({
        name: 'SocialProfilesUpdate',
        fields: (() => ({
          facebook: {
            type: new GraphQLInputObjectType({
              name: 'FacebookUpdate',
              fields: (() => ({
                public: {
                  type: GraphQLBoolean,
                },
              })),
            }),
          },
          google: {
            type: new GraphQLInputObjectType({
              name: 'GoogleUpdate',
              fields: (() => ({
                public: {
                  type: GraphQLBoolean,
                },
              })),
            }),
          },
          linkedin: {
            type: new GraphQLInputObjectType({
              name: 'LinkedinUpdate',
              fields: (() => ({
                public: {
                  type: GraphQLBoolean,
                },
              })),
            }),
          },
        })),
      }),
    },
  })),
});

const UpdateUserMutation = mutationWithClientMutationId({
  name: 'UpdateUser',

  inputFields: {
    updatedUser: {
      type: new GraphQLNonNull(updateUserInput),
    },
  },

  outputFields: {
    viewer: {
      type: userType,
      resolve: ((root, args, { viewerId }) => db.getUser(viewerId)),
    },
  },

  mutateAndGetPayload: ({ updatedUser }) => {
    const update = updatedUser;
    const id = update.id;
    delete update.id;
    const { id: href } = fromGlobalId(id);
    return db.updateUser(href, update);
  },
});

const DeletePollMutation = mutationWithClientMutationId({
  name: 'DeletePoll',

  inputFields: {
    pollId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },

  outputFields: {
    deletedPollId: {
      type: GraphQLID,
      resolve: ({ pollId }) => pollId,
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

  mutateAndGetPayload: ({ pollId }) => {
    const { id: href } = fromGlobalId(pollId);
    return new Promise((resolve, reject) => {
      db.deletePoll(href)
        .then(() => resolve({ pollId }))
        .catch(reject);
    });
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createPoll: CreatePollMutation,
    votePoll: CreateVoteMutation,
    registerUser: RegisterUserMutation,
    updateUser: UpdateUserMutation,
    deletePoll: DeletePollMutation,
  },
});

const schema = new GraphQLSchema({
  query: Root,
  mutation: Mutation,
});

export default schema;
