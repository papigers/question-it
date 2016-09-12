import Relay from 'react-relay';

export default class DeletePollMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation { deletePoll }`;
  }

  getVariables() {
    return {
      pollId: this.props.poll.id,
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on DeletePollPayload {
        deletedPollId,
        viewer{
          pollCount,
          polls,
        }
        store{
          pollCount,
          polls,
        }
      }
    `;
  }

  getConfigs() {
    return [
      {
        type: 'FIELDS_CHANGE',
        fieldIDs: {
          store: this.props.store.id,
          viewer: this.props.viewer.id,
        },
      },
      {
        type: 'RANGE_DELETE',
        parentName: 'store',
        parentID: this.props.store.id,
        connectionName: 'polls',
        deletedIDFieldName: 'deletedPollId',
        pathToConnection: ['store', 'polls'],
      },
      {
        type: 'RANGE_DELETE',
        parentName: 'viewer',
        parentID: this.props.viewer.id,
        connectionName: 'polls',
        deletedIDFieldName: 'deletedPollId',
        pathToConnection: ['viewer', 'polls'],
      },
    ];
  }

  getOptimisticResponse() {
    return {
      deletedPollId: this.props.poll.id,
    };
  }

  static fragments = {
    poll: (() => Relay.QL`
      fragment on Poll {
        id,
      }
    `),
    store: (() => Relay.QL`
      fragment on Store {
        id,
      }
    `),
    viewer: (() => Relay.QL`
      fragment on User {
        id,
      }
    `),
  };
}
