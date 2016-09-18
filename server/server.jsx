import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import favicon from 'express-favicon';
import schema from '../data/schema';
import graphQLHTTP from 'express-graphql';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import expressJwt from 'express-jwt';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match } from 'react-router';
import Relay from 'react-relay';
import IsomorphicRouter from 'isomorphic-relay-router';
import Helmet from 'react-helmet';

import routes from '../shared/routes';
import { routes as authRoutes, passport } from './auth';
import upload from './upload';
import Root from '../shared/root';

import config from '../config';

const GRAPHQL_URL = `${config.appURL}:${config.port}/graphql`;

const app = express();

app.use(favicon(config.favicon));

app.use(express.static('public'));
app.use('/bundle', express.static(config.buildLocation));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(expressJwt({
  secret: config.auth.jwt.secret,
  credentialsRequired: false,
  getToken: req => req.cookies.id_token,
}));

app.use(passport.initialize());

app.use(authRoutes);

app.use('/upload', upload);

app.get('/api/:id/avatar', (req, res) => {
  const root = path.join(config.uploadLocation, req.params.id, 'images');
  res.sendFile('avatar.png', { root });
});

/* eslint-enable no-console */

app.use('/graphql', graphQLHTTP(req => ({
  schema,
  graphiql: true,
  context: {
    viewerId: req.user && req.user.id, // config.mockViewer,
  },
})));

app.use((req, res, next) => {
  const css = [];

  const networkLayer = new Relay.DefaultNetworkLayer(GRAPHQL_URL, {
    headers: {
      cookie: req.headers.cookie,
    },
  });

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

    const render = function render({ data, props }) {
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
      const head = Helmet.rewind();
      const HTML = `
      <!DOCTYPE html>
      <html ${head.htmlAttributes.toString()}>
        <head>
          ${head.title.toString()}
          ${head.meta.toString()}
          ${head.script.toString()}
          ${head.link.toString()}
          <style type="text/css">${css.join('')}</style>
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
          <link type="text/css" rel="stylesheet" href="/bundle/bundle.css">
        </body>
      </html>
      `;

      res.end(HTML);
    };

    IsomorphicRouter.prepareData(renderProps, networkLayer).then(render).catch(next);
  });
});

export default function() {
  const PORT = config.port;
  const MONGODB_URI = config.mongoURL;
  mongoose.connect(MONGODB_URI);

  /* eslint-disable no-console */
  mongoose.connection.once('connected', () => {
    console.log('\x1b[1m\x1b[32mConnected to DB on:\x1b[39m', MONGODB_URI);
  });
  mongoose.connection.on('error', (err) => {
    console.log('\x1b[1m\x1b[31mDatabase Error:\x1b[39m');
    console.log(err.stack);
  });

  app.listen(PORT, () => {
    console.log('\x1b[1m\x1b[32m');
    console.log('Server listening on:\x1b[39m', `${config.appURL}:${PORT}`);
    /* eslint-enable no-console */
  });
}
