import Relay from 'react-relay';

export default class CreatePollMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation { createPoll }`;
  }

  getVariables() {
    return {
      title: this.props.title,
      multi: this.props.multi,
      options: this.props.options,
      author: this.props.viewer.id,
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on CreatePollPayload {
        pollEdge,
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
        type: 'RANGE_ADD',
        parentName: 'store',
        parentID: this.props.store.id,
        connectionName: 'polls',
        edgeName: 'pollEdge',
        rangeBehaviors: (() => 'append'),
      },
      {
        type: 'RANGE_ADD',
        parentName: 'viewer',
        parentID: this.props.viewer.id,
        connectionName: 'polls',
        edgeName: 'pollEdge',
        rangeBehaviors: (() => 'append'),
      },
      {
        type: 'REQUIRED_CHILDREN',
        children: [
          Relay.QL`
            fragment on CreatePollPayload {
              pollEdge
            }
          `,
        ],
      },
    ];
  }

  getOptimisticResponse() {
    const { viewer, title, options, multi } = this.props;

    return {
      pollEdge: {
        node: {
          title,
          options,
          multi,
          author: viewer,
          timestamp: new Date(),
        },
      },
    };
  }

  static fragments = {
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
