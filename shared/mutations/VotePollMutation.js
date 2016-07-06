import Relay from 'react-relay';

export default class VotePollMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation { votePoll }`;
  }

  getVariables() {
    return {
      options: this.props.options,
      poll: this.props.poll.id,
      user: this.props.viewer.id,
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on VotePollPayload {
        voteEdge,
        store{
          voteCount,
          votes,
        },
        viewer{
          voteCount,
          votes,
        }
        poll{
          voteCount,
          votes,
        },
      }
    `;
  }

  getConfigs() {
    return [
      {
        type: 'FIELDS_CHANGE',
        fieldIDs: {
          poll: this.props.poll.id,
          store: this.props.store.id,
          viewer: this.props.viewer.id,
        },
      },
      {
        type: 'RANGE_ADD',
        parentName: 'poll',
        parentID: this.props.poll.id,
        connectionName: 'votes',
        edgeName: 'voteEdge',
        rangeBehaviors: (() => 'append'),
      },
      {
        type: 'RANGE_ADD',
        parentName: 'store',
        parentID: this.props.store.id,
        connectionName: 'votes',
        edgeName: 'voteEdge',
        rangeBehaviors: (() => 'append'),
      },
      {
        type: 'RANGE_ADD',
        parentName: 'viewer',
        parentID: this.props.viewer.id,
        connectionName: 'votes',
        edgeName: 'voteEdge',
        rangeBehaviors: (() => 'append'),
      },
    ];
  }

  getOptimisticResponse() {
    const { store, viewer, poll, options } = this.props;
  
    return {
      voteEdge: {
        node: {
          user: viewer,
          poll,
          options,
          timestamp: new Date(),
        },
      },
      viewer: {
        id: viewer.id,
      },
      store: {
        id: store.id,
      },
      poll: {
        id: poll.id,
        voteCount: poll.voteCount + 1,
      },
    };
  }

  static fragments = {
    poll: (() => Relay.QL`
      fragment on Poll{
        id,
        voteCount,
      }
    `),
    viewer: (() => Relay.QL`
      fragment on User{
        id,
      }
    `),
    store: (() => Relay.QL`
      fragment on Store{
        id,
      }
    `),
  };
}
