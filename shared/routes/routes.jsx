import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import { storeQuery, viewerQuery, nodeQuery } from '../queries';

import App from './app';
import Home, { HomeFlexibleSpace } from './home';
import Login from './login';
import Explore, { ExploreTabs, ExploreFlexibleSpace } from './explore';
import CreatePoll from './createPoll';
import Poll from './poll';
import User from './user';

export default (
  <Route component={App} path="/" queries={viewerQuery}>

    <IndexRoute
      components={{ main: Home, flexibleSpace: HomeFlexibleSpace }}
      queries={{ main: storeQuery }}
    />

    <Route path="explore">

      <IndexRedirect to="trending" />
      <Route
        path=":tab"
        components={{ main: Explore, flexibleSpace: ExploreFlexibleSpace, tabs: ExploreTabs }}
        queries={{ main: storeQuery }}
        prepareParams={
          function prepareExploreParams(params, { location }) {
            let { tab } = params;
            let query = '';

            if (tab === 'search') {
              tab = 'top';
              query = location.query.q;
            }

            return {
              ...params,
              query,
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

    <Route
      path="poll/new"
      components={{ main: CreatePoll }}
      queries={{ main: { ...storeQuery, ...viewerQuery } }}
    />

    <Route path="poll">
      <Route
        path=":id"
        components={{ main: Poll }}
        queries={{ main: { ...nodeQuery, ...viewerQuery, ...storeQuery } }}
      />
    </Route>


    <Route path="user/:id" components={{ main: User }} queries={{ main: nodeQuery }} />


    <Route components={{ main: Login }} path="login" />

  </Route>
);
