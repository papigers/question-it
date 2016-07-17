import express from 'express';
import mongoose from 'mongoose';
import favicon from 'express-favicon';
import schema from '../data/schema';
import graphQLHTTP from 'express-graphql';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match } from 'react-router';
import Relay from 'react-relay';
import IsomorphicRouter from 'isomorphic-relay-router';

import routes from '../shared/routes';
import Root from '../shared/root';

import config from '../config';

const GRAPHQL_URL = `http://${config.hostname}:${config.port}/graphql`;
const networkLayer = new Relay.DefaultNetworkLayer(GRAPHQL_URL);

const app = express();

export default function() {
  app.use(favicon(config.favicon));

  app.use(express.static('statics'));
  app.use('/public', express.static(config.buildLocation));

  const MONGODB_URI = process.env.MONGODB_URI || config.mongoUrl;
  mongoose.connect(MONGODB_URI);

  app.use('/graphql', graphQLHTTP({
    schema,
    graphiql: true,
    context: {
      viewerId: '578bcc490cdd6928110989eb',
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
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="apple-touch-icon" sizes="180x180" href="/statics/favicon/apple-touch-icon.png">
            <link rel="icon" type="image/png" href="/statics/favicon/favicon-32x32.png" sizes="32x32">
            <link rel="icon" type="image/png" href="/statics/favicon/favicon-16x16.png" sizes="16x16">
            <link rel="manifest" href="/statics/favicon/manifest.json">
            <link rel="mask-icon" href="/statics/favicon/safari-pinned-tab.svg" color="#d50000">
            <link rel="shortcut icon" href="/statics/favicon/favicon.ico">
            <meta name="msapplication-config" content="/statics/favicon/browserconfig.xml">
            <meta name="theme-color" content="#a50000">
            <title>Question It - Online Polls</title>
            <script async type="application/javascript" src="/public/bundle.js"></script>
            <style type="text/css">${css.join('')}</style>
            <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
            <link href="https://file.myfontastic.com/m6D5EwwEfBU4hxAfLHHbdR/icons.css" rel="stylesheet">
          </head>
          <body>
            <div id="react-view">${componentHTML}</div>
            <link rel="stylesheet" href="/nprogress/nprogress.css"></script>
            <script type="application/javascript" src="/nprogress/nprogress.js"></script>
            <script type="application/javascript">
              NProgress.start();
            </script>
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

  const PORT = process.env.PORT || config.port;
  app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log('\x1b[1m\x1b[32m');
    console.log('Server listening on:\x1b[39m', `http://${config.hostname}:${PORT}`);
    /* eslint-enable no-console */
  });
}
