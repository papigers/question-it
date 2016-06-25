import React from 'react';
import Relay from 'react-relay';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './app';
import Home from './home';
import Login from './login';
import Polls from './polls';
import CreatePoll from './polls/createPoll';
import Chart from './chart';
import User from './user';

let query = { viewer: () => Relay.QL`query { viewer }` };

export default (
  <Route component={App} path="/" queries={query}>
    <IndexRoute component={Home} />
    <Route path="polls">
      <IndexRedirect to="trending" />
      <Route path="trending" tab="trending" component={Polls} />
      <Route path="top" tab="top" component={Polls} />
      <Route path="new" tab="new" component={Polls} />
      <Route path="search" tab="search" component={Polls} />
    </Route>
    <Route path="poll">
      <IndexRedirect to="/polls" />
      <Route path="create" component={CreatePoll} />
      <Route path="view" component={Chart} />
    </Route>
    <Route path="user" component={User} />
    <Route component={Login} path="login" />
  </Route>
);
