import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import { storeQuery, viewerQuery } from '../queries';

import App from './app';
import Home from './home';
import Login from './login';
import Explore from './explore';
import CreatePoll from './createPoll';
import Poll from './poll';
import User from './user';

export default (
  <Route component={App} path="/" queries={viewerQuery}>

    <IndexRoute component={Home} queries={storeQuery} />

    <Route path="explore">

      <IndexRedirect to="trending" />
      <Route
        path=":tab"
        component={Explore}
        queries={storeQuery}
        prepareParams={
          function prepareTabParams(params) {
            let { tab } = params;
            tab = (tab === 'search' ? 'top' : tab);
            return {
              ...params,
              sort: tab.toUpperCase(),
            };
          }
        }
        onEnter={function checkTab(nextState, replace) {
          const { pathname } = nextState.location;
          let tab = /^\/explore\/(\w*)/.exec(pathname)[1];
          tab = tab.toLowerCase();
          if (['trending', 'top', 'new', 'search'].indexOf(tab) < 0) {
            replace('/explore/trending');
          }
        }}
      />

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
