import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import Index from './index';
import Home from './home';
import About from './about';
import Login from './login';
import Polls from './polls'
import Chart from './chart';


export default (
    <Route component={Index} path="/">
			<IndexRoute component={Home} />
      <Route path="polls">
        <IndexRedirect to="trending" />
        <Route path="trending" tab="trending" component={About} />
        <Route path="top" tab="top" component={About} />
        <Route path="new" tab="new" component={About} />
        <Route path="create" component={About} />
        <Route path=":id" component={Chart} />
      </Route>
			<Route component={Login} path="login" />
    </Route>
);
