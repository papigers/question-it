import Relay from 'react-relay';

export default class UpdateUserMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation { updateUser }`;
  }

  getVariables() {
    return {
      updatedUser: this.props.user,
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on UpdateUserPayload {
        viewer{
          bio,
          publicEmail,
          avatar,
          birthDate{
            value,
            public,
          },
          name{
            value,
            public,
          },
          facebook{
            public,
          },
          google{
            public,
          },
          linkedin{
            public,
          },
        }
      }
    `;
  }

  getConfigs() {
    return [
      {
        type: 'FIELDS_CHANGE',
        fieldIDs: {
          viewer: this.props.user.id,
        },
      },
    ];
  }
}
