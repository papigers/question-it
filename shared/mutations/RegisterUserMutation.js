import Relay from 'react-relay';

export default class RegisterUserMutation extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation { registerUser }`;
  }

  getVariables() {
    return {
      username: this.props.username,
      email: this.props.email,
      password: this.props.password,
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on RegisterUserPayload {
        user,
        error,
      }
    `;
  }

  getConfigs() {
    return [
      {
        type: 'REQUIRED_CHILDREN',
        children: [
          Relay.QL`
            fragment on RegisterUserPayload {
              user,
              error
            }
          `,
        ],
      },
    ];
  }
}
