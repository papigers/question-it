import path 											from 'path';
import express                    from 'express';
import React                      from 'react';
import { renderToString }         from 'react-dom/server'
import { RouterContext, match } 	from 'react-router';
import createLocation             from 'history/lib/createLocation';
import routes                     from 'routes';
import Root                    	 	from 'Root';

const app = express();

//app.use(express.static('static'));
app.use(express.static('public'));

app.use((req, res) => {
  
  const location = createLocation(req.url);
  
  match({ routes, location }, (err, redirectLocation, renderProps) => {
		
    if (err) { 
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found.');
    
		const userAgent = req.headers['user-agent'];
			
    const InitialComponent = (
      <Root userAgent={userAgent}>
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
				<link rel="stylesheet" href="build/bundle.css">
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <script type="application/javascript" src="build/bundle.js"></script>
      </body>
    </html>
    `;
  
    res.end(HTML);
  });
});

export default app;