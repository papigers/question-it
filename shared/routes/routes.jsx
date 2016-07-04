import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import { storeQuery, viewerQuery, nodeQuery } from '../queries';

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
          if (['trending', 'top', 'recent', 'search'].indexOf(tab) < 0) {
            replace('/explore/trending');
          }
        }}
      />

    </Route>

    <Route path="poll/new" component={CreatePoll} queries={{ ...storeQuery, ...viewerQuery }} />

    <Route path="poll">
      <Route path=":id" component={Poll} queries={nodeQuery} />
    </Route>

    <Route path="user">
      <Route path=":id" component={User} queries={nodeQuery} />
    </Route>

    <Route component={Login} path="login" />

  </Route>
);
