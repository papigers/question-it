import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Index from 'pages';
import Home from 'pages/home';
import Login from 'pages/login';
import Chart from 'pages/chart';


export default (
    <Route component={Index} path="/">
			<IndexRoute component={Home} />
			<Route component={Chart} path="chart" />
			<Route component={Login} path="login" />
    </Route>
);