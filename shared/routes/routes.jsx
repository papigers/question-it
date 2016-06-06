import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import Index from './index';
import Home from './home';
import About from './about';
import Login from './login';
import Polls from './polls';
import CreatePoll from './polls/createPoll'
import Chart from './chart';


export default (
    <Route component={Index} path="/">
			<IndexRoute component={Home} />
      <Route path="polls">
        <IndexRedirect to="trending" />
        <Route path="trending" tab="trending" component={Polls} />
        <Route path="top" tab="top" component={Polls} />
        <Route path="new" tab="new" component={Polls} />
        <Route path="create" component={CreatePoll} />
        <Route path=":id" component={Chart} />
      </Route>
			<Route component={Login} path="login" />
    </Route>
);
