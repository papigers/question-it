import React                      from 'react';
import { render }                 from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes                     from 'routes';
import Root                     	from 'root';


var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

render(
  <Root onInsertCss={(styles) => styles._insertCss()}>
		<Router children={routes} history={browserHistory} onUpdate={() => window.scrollTo(0, 0)} />
	</Root>, 
  document.getElementById('react-view')
);
