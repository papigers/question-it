import Relay from 'react-relay';

export default {
  node: () => Relay.QL`
    query {
      node(id: $id),
    }`,
};
