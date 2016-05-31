import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Index from './index';
import Home from './home';
import Login from './login';
import Chart from './chart';


export default (
    <Route component={Index} path="/">
			<IndexRoute component={Home} />
			<Route component={Chart} path="chart" />
			<Route component={Login} path="login" />
    </Route>
);