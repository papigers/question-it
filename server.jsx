import path 											from 'path';
import express                    from 'express';
import React                      from 'react';
import { renderToString }         from 'react-dom/server'
import { RouterContext, match } 	from 'react-router';
import createLocation             from 'history/lib/createLocation';

import routes                     from './shared/routes';
import Root                    	 	from './shared/root';

export default function(){	
	const app = express();

	//app.use(express.static('static'));
	app.use(express.static('public'));
	app.use((req, res) => {

		const location = createLocation(req.url);
		const css = [];
		match({ routes, location }, (err, redirectLocation, renderProps) => {
			if (err) { 
				console.error(err);
				return res.status(500).end('Internal server error');
			}
      if (redirectLocation){
        return res.redirect(redirectLocation.pathname + redirectLocation.search);
      }
			if (!renderProps) return res.status(404).end('Not found.');
			const userAgent = req.headers['user-agent'];
			const InitialComponent = (
				<Root 
					userAgent={userAgent}
					onInsertCss={(styles) => css.push(styles._getCss())}
				>
					<RouterContext {...renderProps}/>
				</Root>
			);

			const componentHTML = renderToString(InitialComponent);
			const HTML = `
			<!DOCTYPE html>
			<html>
				<head>
					<meta charset="utf-8">
					<meta name="theme-color" content="#950000">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<title>Question It - Online Polls</title>
					<script async type="application/javascript" src="/build/bundle.js"></script>
					<style type="text/css">${css.join('')}</style>
					<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
					<link href="https://file.myfontastic.com/m6D5EwwEfBU4hxAfLHHbdR/icons.css" rel="stylesheet">
				</head>
				<body>
					<div id="react-view">${componentHTML}</div>
				</body>
			</html>
			`;

			res.end(HTML);
		});
	});
	
	const PORT = process.env.PORT || 3000;
	app.listen(PORT, function () {
  	console.log('Server listening on', PORT);
	});
};
