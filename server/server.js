import express from 'express';
import schema from '../data/schema';
import graphQLHTTP from 'express-graphql';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match } from 'react-router';
import Relay from 'react-relay';
import IsomorphicRouter from 'isomorphic-relay-router';

import routes from '../shared/routes';
import Root from '../shared/root';

const GRAPHQL_URL = 'http://localhost:3000/graphql';
const networkLayer = new Relay.DefaultNetworkLayer(GRAPHQL_URL);


const app = express();

export default function() {
  app.use('/public', express.static('build'));

  app.use('/graphql', graphQLHTTP({
    schema,
    graphiql: true,
    context: {
      viewerId: 1,
    },
  }));

  app.use((req, res, next) => {
    const css = [];
    match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
      if (err) {
        // return res.status(500).end('Internal server error');
        next(err);
      }
      if (redirectLocation) {
        return res.redirect(redirectLocation.pathname + redirectLocation.search);
      }
      if (!renderProps) {
        return res.status(404).end('Not found.');
      }

      IsomorphicRouter.prepareData(renderProps, networkLayer).then(render).catch(next);

      function render({ data, props }) {
        const userAgent = req.headers['user-agent'];

        const InitialComponent = (
          <Root
            userAgent={userAgent}
            onInsertCss={(styles) => css.push(styles._getCss())}
          >
            {IsomorphicRouter.render(props)}
          </Root>
        );

        const componentHTML = renderToString(InitialComponent);
        const HTML = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta http-equiv="Content-Style-Type" content="text/css">
            <meta name="theme-color" content="#950000">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Question It - Online Polls</title>
            <script async type="application/javascript" src="/public/bundle.js"></script>
            <style type="text/css">${css.join('')}</style>
            <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
            <link href="https://file.myfontastic.com/m6D5EwwEfBU4hxAfLHHbdR/icons.css" rel="stylesheet">
          </head>
          <body>
            <div id="react-view">${componentHTML}</div>
            <script id="preloadedData" type="application/json" src="">
              ${JSON.stringify(data)}
            </script>
          </body>
        </html>
        `;

        res.end(HTML);
      }
    });
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log('\x1b[1m\x1b[32m');
    console.log('Server listening on', PORT);
    console.log('\x1b[39m');
    /* eslint-enable no-console */
  });
}
