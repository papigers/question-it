import React from 'react';
import Relay from 'react-relay';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './app';
import Home from './home';
import Login from './login';
import Explore from './explore';
import CreatePoll from './createPoll';
import Poll from './poll';
import User from './user';

let query = { viewer: () => Relay.QL`query { viewer }` };

export default (
  <Route component={App} path="/" queries={query}>
    <IndexRoute component={Home} />
    <Route path="explore">
      <IndexRedirect to="trending" />
      <Route path="trending" tab="trending" component={Explore} />
      <Route path="top" tab="top" component={Explore} />
      <Route path="new" tab="new" component={Explore} />
      <Route path="search" tab="search" component={Explore} />
    </Route>
    <Route
      path="poll"
      component={Poll}
      onEnter={function requirePollId(nextState, replace) {
        if (!nextState.location.query.id) {
          replace('/explore/trending');
        }
      }}
    />
    <Route path="poll/new" component={CreatePoll} />
    <Route path="user" component={User} />
    <Route component={Login} path="login" />
  </Route>
);
