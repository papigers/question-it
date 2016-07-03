import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, match } from 'react-router';
import routes from '../shared/routes';
import Root from '../shared/root';
import Relay from 'react-relay';
import IsomorphicRouter from 'isomorphic-relay-router';
import IsomorphicRelay from 'isomorphic-relay';
import injectTapEventPlugin from 'react-tap-event-plugin';

const environment = new Relay.Environment();
environment.injectNetworkLayer(new Relay.DefaultNetworkLayer('/graphql'));

const data = JSON.parse(document.getElementById('preloadedData').textContent);

IsomorphicRelay.injectPreparedData(environment, data);

injectTapEventPlugin();

match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
  IsomorphicRouter.prepareInitialRender(environment, renderProps).then(props => {
    render(
      <Root onInsertCss={(styles) => styles._insertCss()}>
        <Router {...props} onUpdate={() => window.scrollTo(0, 0)} />
      </Root>,
      document.getElementById('react-view'));
  });
});
