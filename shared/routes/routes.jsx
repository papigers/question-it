import React from 'react';
import { Route, IndexRoute, IndexRedirect, Redirect } from 'react-router';

import { storeQuery, viewerQuery, nodeQuery } from '../queries';

import App from './app';
import Home, { HomeFlexibleSpace } from './home';
import Login from './login';
import Explore, { ExploreTabs, ExploreFlexibleSpace } from './explore';
import CreatePoll from './createPoll';
import Poll from './poll';
import User from './user';
import Loading from '../components/loading';

/* eslint-disable react/prop-types */

function renderLoading({ props, routerProps, element }) {
  if (!props) {
    return <Loading {...routerProps} />;
  }
  return React.cloneElement(element, props);
}

export default (
  <Route component={App} path="/" queries={viewerQuery}>

    <IndexRoute
      components={{ main: Home, flexibleSpace: HomeFlexibleSpace }}
      queries={{ main: storeQuery }}
      render={{ main: renderLoading }}
    />

    <Route path="explore">

      <IndexRedirect to="trending" />
      <Route
        path=":tab"
        components={{ main: Explore, flexibleSpace: ExploreFlexibleSpace, tabs: ExploreTabs }}
        queries={{ main: storeQuery }}
        render={{ main: renderLoading }}
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

    <Route path="poll">

      <IndexRedirect to="/explore" />

      <Route
        path="new"
        components={{ main: CreatePoll }}
        queries={{ main: { ...viewerQuery, ...storeQuery } }}
        render={{ main: renderLoading }}
      />

      <Route
        path=":id"
        components={{ main: Poll }}
        queries={{ main: { ...nodeQuery, ...viewerQuery, ...storeQuery } }}
        render={{ main: renderLoading }}
      />

    </Route>

    <Route path="profile">

      <IndexRoute
        components={{ main: User }}
        queries={{ main: { user: viewerQuery.viewer } }}
        render={{ main: renderLoading }}
      />

      <Route
        path=":id"
        components={{ main: User }}
        queries={{ main: { user: nodeQuery.node } }}
        render={{ main: renderLoading }}
      />

    </Route>


    <Route
      components={{ main: Login }}
      path="login"
      queries={{ main: viewerQuery }}
      render={{ main: renderLoading }}
    />

    <Redirect from="login/local" to="login" />

  </Route>
);
