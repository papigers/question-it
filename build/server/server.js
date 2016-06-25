module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _stringify=__webpack_require__(/*! babel-runtime/core-js/json/stringify */ 5);var _stringify2=_interopRequireDefault(_stringify);exports.default=function(){app.use('/public',_express2.default.static('build'));app.use('/graphql',(0,_expressGraphql2.default)({schema:_schema2.default,graphiql:true}));app.use(function(req,res,next){var location=(0,_createLocation2.default)(req.url);var css=[];(0,_reactRouter.match)({routes:_routes2.default,location:location},function(err,redirectLocation,renderProps){if(err){ // return res.status(500).end('Internal server error');
	next(err);}if(redirectLocation){return res.redirect(redirectLocation.pathname+redirectLocation.search);}if(!renderProps){return res.status(404).end('Not found.');}_isomorphicRelayRouter2.default.prepareData(renderProps,networkLayer).then(render).catch(next);function render(_ref){var data=_ref.data;var props=_ref.props;var userAgent=req.headers['user-agent'];var InitialComponent=_react2.default.createElement(_root2.default,{userAgent:userAgent,onInsertCss:function onInsertCss(styles){return css.push(styles._getCss());}},_isomorphicRelayRouter2.default.render(props));var preloadedData=(0,_stringify2.default)(data);var componentHTML=(0,_server.renderToString)(InitialComponent);var HTML='\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <meta charset="utf-8">\n            <meta name="theme-color" content="#950000">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n            <title>Question It - Online Polls</title>\n            <script async type="application/javascript" src="/public/bundle.js"></script>\n            <style type="text/css">'+css.join('')+'</style>\n            <link href=\'https://fonts.googleapis.com/css?family=Roboto\' rel=\'stylesheet\' type=\'text/css\'>\n            <link href="https://file.myfontastic.com/m6D5EwwEfBU4hxAfLHHbdR/icons.css" rel="stylesheet">\n          </head>\n          <body>\n            <div id="react-view">'+componentHTML+'</div>\n            <script id="preloadedData" type="application/json" src="">\n              '+(0,_stringify2.default)(preloadedData).replace(/\//g,'\\/')+'\n            </script>\n          </body>\n        </html>\n        ';res.end(HTML);}});});var PORT=({"BROWSER":true,"NODE_ENV":"development"}).PORT||3000;app.listen(PORT,function(){ /* eslint-disable no-console */console.log('\x1b[1m\x1b[32m');console.log('Server listening on',PORT);console.log('\x1b[39m'); /* eslint-enable no-console */});};var _express=__webpack_require__(/*! express */ 6);var _express2=_interopRequireDefault(_express);var _schema=__webpack_require__(/*! ./data/schema */ 7);var _schema2=_interopRequireDefault(_schema);var _expressGraphql=__webpack_require__(/*! express-graphql */ 15);var _expressGraphql2=_interopRequireDefault(_expressGraphql);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _server=__webpack_require__(/*! react-dom/server */ 17);var _reactRouter=__webpack_require__(/*! react-router */ 18);var _reactRelay=__webpack_require__(/*! react-relay */ 19);var _reactRelay2=_interopRequireDefault(_reactRelay);var _isomorphicRelayRouter=__webpack_require__(/*! isomorphic-relay-router */ 20);var _isomorphicRelayRouter2=_interopRequireDefault(_isomorphicRelayRouter);var _createLocation=__webpack_require__(/*! history/lib/createLocation */ 21);var _createLocation2=_interopRequireDefault(_createLocation);var _routes=__webpack_require__(/*! ./shared/routes */ 22);var _routes2=_interopRequireDefault(_routes);var _root=__webpack_require__(/*! ./shared/root */ 138);var _root2=_interopRequireDefault(_root);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var GRAPHQL_URL='http://localhost:3000/graphql';var networkLayer=new _reactRelay2.default.DefaultNetworkLayer(GRAPHQL_URL);var app=(0,_express2.default)();module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "server.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 6 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 7 */
/*!************************!*\
  !*** ./data/schema.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _objectWithoutProperties2=__webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ 8);var _objectWithoutProperties3=_interopRequireDefault(_objectWithoutProperties2);var _extends2=__webpack_require__(/*! babel-runtime/helpers/extends */ 9);var _extends3=_interopRequireDefault(_extends2);var _graphql=__webpack_require__(/*! graphql */ 10);var _graphqlCustomDatetype=__webpack_require__(/*! graphql-custom-datetype */ 11);var _graphqlCustomDatetype2=_interopRequireDefault(_graphqlCustomDatetype);var _graphqlRelay=__webpack_require__(/*! graphql-relay */ 12);var _database=__webpack_require__(/*! ./database */ 13);var db=_interopRequireWildcard(_database);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else {var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};} /* eslint-enable comma-dangle */ /* eslint-disable comma-dangle, no-use-before-define */var _nodeDefinitions=(0,_graphqlRelay.nodeDefinitions)(function(globalId){var _fromGlobalId=(0,_graphqlRelay.fromGlobalId)(globalId);var type=_fromGlobalId.type;var id=_fromGlobalId.id;if(type==='Poll'){return db.getPoll(id);}else if(type==='User'){return db.getUser(id);}else if(type==='Vote'){return db.getVote(id);}return null;},function(obj){if(obj instanceof db.Poll){return pollType;}else if(obj instanceof db.User){return userType;}else if(obj instanceof db.Vote){return voteType;}return null;});var nodeInterface=_nodeDefinitions.nodeInterface;var nodeField=_nodeDefinitions.nodeField;var pollSortEnum=new _graphql.GraphQLEnumType({name:'PollSort',description:'Sorting parameters for polls',values:{TRENDING:{value:1,description:'Trending polls'},NEW:{value:2,description:'Newest polls'},TOP:{value:3,description:'Most voted polls'}}});var userType=new _graphql.GraphQLObjectType({name:'User',description:'Registered user',fields:function fields(){return {id:(0,_graphqlRelay.globalIdField)('User'),_id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)},email:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},password:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},username:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},votes:{type:voteConnectionType,args:_graphqlRelay.connectionArgs,resolve:function resolve(user,args){return (0,_graphqlRelay.connectionFromArray)(db.getVotes(),args);}},polls:{type:pollConnectionType,args:(0,_extends3.default)({},_graphqlRelay.connectionArgs,{orderBy:{type:pollSortEnum}}),resolve:function resolve(user,_ref){var orderBy=_ref.orderBy;var args=(0,_objectWithoutProperties3.default)(_ref,['orderBy']);return (0,_graphqlRelay.connectionFromArray)(db.getPolls(orderBy),args);}}};},interfaces:[nodeInterface]});var pollType=new _graphql.GraphQLObjectType({name:'Poll',description:'Poll which can be voted by registered users',fields:function fields(){return {id:(0,_graphqlRelay.globalIdField)('Poll'),_id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)},title:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLString)},options:{type:new _graphql.GraphQLNonNull(new _graphql.GraphQLList(_graphql.GraphQLString))},votes:{type:voteConnectionType,args:_graphqlRelay.connectionArgs,resolve:function resolve(user,args){return (0,_graphqlRelay.connectionFromArray)(db.getVotes(),args);}},author:{type:new _graphql.GraphQLNonNull(userType)},timestamp:{type:new _graphql.GraphQLNonNull(_graphqlCustomDatetype2.default)}};},interfaces:[nodeInterface]});var _connectionDefinition= // edgeType: pollEdgeType,
	(0,_graphqlRelay.connectionDefinitions)({name:'Poll',nodeType:pollType});var pollConnectionType=_connectionDefinition.connectionType;var voteType=new _graphql.GraphQLObjectType({name:'Vote',description:'User vote on a poll',fields:function fields(){return {id:(0,_graphqlRelay.globalIdField)('Vote'),_id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)},user:{type:new _graphql.GraphQLNonNull(userType)},poll:{type:new _graphql.GraphQLNonNull(pollType)},vote:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLInt)},timestamp:{type:new _graphql.GraphQLNonNull(_graphqlCustomDatetype2.default)}};},interfaces:[nodeInterface]});var _connectionDefinition2= // edgeType: voteEdgeType,
	(0,_graphqlRelay.connectionDefinitions)({name:'Vote',nodeType:voteType});var voteConnectionType=_connectionDefinition2.connectionType;var Root=new _graphql.GraphQLObjectType({name:'Root',fields:function fields(){return {node:nodeField,viewer:{type:userType,resolve:function resolve(){return db.getViewer();}},user:{type:userType,args:{id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)}},resolve:function resolve(root,_ref2){var id=_ref2.id;return db.getUsers()[id];}},poll:{type:pollType,args:{id:{type:new _graphql.GraphQLNonNull(_graphql.GraphQLID)}},resolve:function resolve(root,_ref3){var id=_ref3.id;return db.getPolls()[id];}},polls:{type:pollConnectionType,args:(0,_extends3.default)({},_graphqlRelay.connectionArgs,{orderBy:{type:pollSortEnum}}),resolve:function resolve(user,_ref4){var orderBy=_ref4.orderBy;var args=(0,_objectWithoutProperties3.default)(_ref4,['orderBy']);return (0,_graphqlRelay.connectionFromArray)(db.getPolls(orderBy),args);}},votes:{type:voteConnectionType,args:_graphqlRelay.connectionArgs,resolve:function resolve(user,args){return (0,_graphqlRelay.connectionFromArray)(db.getVotes(),args);}}};}});var schema=new _graphql.GraphQLSchema({query:Root});exports.default=schema;module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "schema.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 8 */
/*!****************************************************************!*\
  !*** external "babel-runtime/helpers/objectWithoutProperties" ***!
  \****************************************************************/
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ },
/* 9 */
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 10 */
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ function(module, exports) {

	module.exports = require("graphql");

/***/ },
/* 11 */
/*!******************************************!*\
  !*** external "graphql-custom-datetype" ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = require("graphql-custom-datetype");

/***/ },
/* 12 */
/*!********************************!*\
  !*** external "graphql-relay" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = require("graphql-relay");

/***/ },
/* 13 */
/*!**************************!*\
  !*** ./data/database.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.Vote=exports.Poll=exports.User=undefined;var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);exports.getViewer=getViewer;exports.getUsers=getUsers;exports.getPolls=getPolls;exports.getVotes=getVotes;exports.getUserPolls=getUserPolls;exports.getUserVotes=getUserVotes;exports.getPollAuthor=getPollAuthor;exports.getPollVotes=getPollVotes;exports.getVoteUser=getVoteUser;exports.getVotePoll=getVotePoll;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};} /* eslint-disable no-underscore-dangle */var User=exports.User=function User(){(0,_classCallCheck3.default)(this,User);};var Poll=exports.Poll=function Poll(){(0,_classCallCheck3.default)(this,Poll);};var Vote=exports.Vote=function Vote(){(0,_classCallCheck3.default)(this,Vote);};var users=[];for(var i=0;i<5;i++){var user=new User();user.email='email'+i+'@email.com';user.username='MyUsername'+i;user.password='1234';user._id=''+i;user.votes=[];user.polls=[];users.push(user);}var polls=[];for(var _i=0;_i<8;_i++){var poll=new Poll();poll._id=''+_i;poll.title='Poll '+_i+' Title';var optionsNum=2+Math.floor(Math.random()*3);poll.options=[];for(var j=0;j<optionsNum;j++){poll.options.push('Poll '+_i+' Option '+j);}poll.votes=[];var author=Math.floor(Math.random()*users.length);poll.author=''+author;users[author].polls.push(''+_i);poll.timestamp=new Date();polls.push(poll);}var votes=[];for(var _i2=0;_i2<users.length;_i2++){for(var _j=0;_j<polls.length;_j++){var vote=new Vote();vote._id=''+((_i2+1)*(_j+1)-1);var _poll=polls[_j];var _user=users[_i2];_user.votes.push(''+vote._id);_poll.votes.push(''+vote._id);vote.user=''+_user._id;vote.poll=''+_poll._id;vote.vote=''+Math.floor(Math.random()*_poll.options.length);vote.timestamp=new Date();votes.push(vote);}}function getViewer(){return users[0];}function getUsers(){return users;}function getPolls(){var orderBy=arguments.length<=0||arguments[0]===undefined?1:arguments[0];return orderPolls(polls,orderBy);}function getVotes(){return votes;}function getUserPolls(id){var orderBy=arguments.length<=1||arguments[1]===undefined?1:arguments[1];return orderPolls(users[id].polls.map(function(pollId){return polls[pollId];}),orderBy);}function getUserVotes(id){return users[id].votes.map(function(voteId){return votes[voteId];});}function getPollAuthor(id){return users[polls[id].author];}function getPollVotes(id){return polls[id].votes.map(function(voteId){return votes[voteId];});}function getVoteUser(id){return users[votes[id].user];}function getVotePoll(id){return polls[votes[id].poll];}function sortByTime(a,b){return a.timestamp>=b.timestamp;}function orderPolls(unordered,orderBy){switch(orderBy){case 2:return newPolls(unordered);case 3:return topPolls(unordered);case 1:default:return trendingPolls(unordered);}}function topPolls(unordered){return unordered.sort(function(pA,pB){return pA.votes.length>=pB.votes.length;});}function newPolls(unordered){return unordered.sort(sortByTime);}function trendingPolls(unordered){return unordered.sort(function(pA,pB){var vA=pA.votes;var vB=pB.votes;vA.sort(sortByTime);vB.sort(sortByTime);return vA.timestamp>=vB.timestamp;});}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "database.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 14 */
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 15 */
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/***/ function(module, exports) {

	module.exports = require("express-graphql");

/***/ },
/* 16 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 17 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 18 */
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 19 */
/*!******************************!*\
  !*** external "react-relay" ***!
  \******************************/
/***/ function(module, exports) {

	module.exports = require("react-relay");

/***/ },
/* 20 */
/*!******************************************!*\
  !*** external "isomorphic-relay-router" ***!
  \******************************************/
/***/ function(module, exports) {

	module.exports = require("isomorphic-relay-router");

/***/ },
/* 21 */
/*!*********************************************!*\
  !*** external "history/lib/createLocation" ***!
  \*********************************************/
/***/ function(module, exports) {

	module.exports = require("history/lib/createLocation");

/***/ },
/* 22 */
/*!**********************************!*\
  !*** ./shared/routes/routes.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _reactRelay=__webpack_require__(/*! react-relay */ 19);var _reactRelay2=_interopRequireDefault(_reactRelay);var _reactRouter=__webpack_require__(/*! react-router */ 18);var _app=__webpack_require__(/*! ./app */ 23);var _app2=_interopRequireDefault(_app);var _home=__webpack_require__(/*! ./home */ 70);var _home2=_interopRequireDefault(_home);var _login=__webpack_require__(/*! ./login */ 78);var _login2=_interopRequireDefault(_login);var _polls=__webpack_require__(/*! ./polls */ 95);var _polls2=_interopRequireDefault(_polls);var _createPoll=__webpack_require__(/*! ./polls/createPoll */ 98);var _createPoll2=_interopRequireDefault(_createPoll);var _chart=__webpack_require__(/*! ./chart */ 106);var _chart2=_interopRequireDefault(_chart);var _user=__webpack_require__(/*! ./user */ 117);var _user2=_interopRequireDefault(_user);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var query={viewer:function viewer(){return function(){return {children:[{fieldName:'id',kind:'Field',metadata:{isGenerated:true,isRequisite:true},type:'ID'}],fieldName:'viewer',kind:'Query',metadata:{},name:'Routes',type:'User'};}();}};exports.default=_react2.default.createElement(_reactRouter.Route,{component:_app2.default,path:'/',queries:query},_react2.default.createElement(_reactRouter.IndexRoute,{component:_home2.default}),_react2.default.createElement(_reactRouter.Route,{path:'polls'},_react2.default.createElement(_reactRouter.IndexRedirect,{to:'trending'}),_react2.default.createElement(_reactRouter.Route,{path:'trending',tab:'trending',component:_polls2.default}),_react2.default.createElement(_reactRouter.Route,{path:'top',tab:'top',component:_polls2.default}),_react2.default.createElement(_reactRouter.Route,{path:'new',tab:'new',component:_polls2.default}),_react2.default.createElement(_reactRouter.Route,{path:'search',tab:'search',component:_polls2.default}),_react2.default.createElement(_reactRouter.Route,{path:'create',component:_createPoll2.default}),_react2.default.createElement(_reactRouter.Route,{path:'poll/:id',component:_chart2.default})),_react2.default.createElement(_reactRouter.Route,{path:'users/:id',component:_user2.default}),_react2.default.createElement(_reactRouter.Route,{component:_login2.default,path:'login'}));module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "routes.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 23 */
/*!***********************************!*\
  !*** ./shared/routes/app/App.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _reactRelay=__webpack_require__(/*! react-relay */ 19);var _reactRelay2=_interopRequireDefault(_reactRelay);var _footer=__webpack_require__(/*! ../footer */ 28);var _footer2=_interopRequireDefault(_footer);var _appToolbar=__webpack_require__(/*! ../../components/appToolbar */ 38);var _appToolbar2=_interopRequireDefault(_appToolbar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var logo=__webpack_require__(/*! ./logo.png */ 57);var App=function(_React$Component){(0,_inherits3.default)(App,_React$Component);function App(){var _Object$getPrototypeO;var _temp,_this,_ret;(0,_classCallCheck3.default)(this,App);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=(0,_possibleConstructorReturn3.default)(this,(_Object$getPrototypeO=(0,_getPrototypeOf2.default)(App)).call.apply(_Object$getPrototypeO,[this].concat(args))),_this),_this.onLogoClick=function(){_this.context.router.push('/');},_temp),(0,_possibleConstructorReturn3.default)(_this,_ret);}(0,_createClass3.default)(App,[{key:'render',value:function render(){var loggedon=this.props.viewer;var flexibleSpace=this.context.router.isActive('/',true)?_react2.default.createElement(__webpack_require__(/*! ./homeToolbar/flexibleSpace */ 58), // eslint-disable-line global-require
	{logo:logo}):null;var tabs=null;if(this.context.router.isActive('/polls')&&!this.props.params.id){var tab=this.props.routes[this.props.routes.length-1].tab;var _require=__webpack_require__(/*! ./exploreToolbar */ 61);var Tabs=_require.Tabs;var FlexibleSpace=_require.FlexibleSpace; // eslint-disable-line global-require
	tabs=_react2.default.createElement(Tabs,{tab:tab});flexibleSpace=_react2.default.createElement(FlexibleSpace,{query:this.props.location.query.q});}return _react2.default.createElement('div',{id:'app-view'},_react2.default.createElement('header',null,_react2.default.createElement(_appToolbar2.default,{onLogoClick:this.onLogoClick,zDepth:2,title:'QUESTION IT',flexibleSpaceElement:flexibleSpace,logoUrl:logo,tabsElement:tabs,loggedOn:loggedon})),_react2.default.createElement('main',null,this.props.children),_react2.default.createElement('footer',null,_react2.default.createElement(_footer2.default,null)));}}]);return App;}(_react2.default.Component);App.contextTypes={router:_react2.default.PropTypes.object.isRequired};App.propTypes={viewer:_react2.default.PropTypes.object.isRequired,routes:_react2.default.PropTypes.array.isRequired,location:_react2.default.PropTypes.object.isRequired,children:_react2.default.PropTypes.element.isRequired,params:_react2.default.PropTypes.object};App=_reactRelay2.default.createContainer(App,{fragments:{viewer:function viewer(){return function(){return {children:[{fieldName:'id',kind:'Field',metadata:{isRequisite:true},type:'ID'},{fieldName:'_id',kind:'Field',metadata:{},type:'ID'},{fieldName:'username',kind:'Field',metadata:{},type:'String'}],id:_reactRelay2.default.QL.__id(),kind:'Fragment',metadata:{},name:'App_ViewerRelayQL',type:'User'};}();}}});exports.default=App;module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 24 */
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 25 */
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 26 */
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 27 */
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 28 */
/*!*****************************************!*\
  !*** ./shared/routes/footer/Footer.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _IconButton=__webpack_require__(/*! material-ui/IconButton */ 30);var _IconButton2=_interopRequireDefault(_IconButton);var _Footer=__webpack_require__(/*! ./Footer.css */ 31);var _Footer2=_interopRequireDefault(_Footer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Footer=function(_React$Component){(0,_inherits3.default)(Footer,_React$Component);function Footer(){(0,_classCallCheck3.default)(this,Footer);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(Footer).apply(this,arguments));}(0,_createClass3.default)(Footer,[{key:'render',value:function render(){return _react2.default.createElement('div',null,_react2.default.createElement('h4',{className:'center-text'},'Created By Gershon Papi'),_react2.default.createElement('p',{className:'center-text',style:{padding:'0 20px',margin:0}},'papigers93@gmail.com'),_react2.default.createElement('div',{className:'center-div'},_react2.default.createElement('a',{href:'http://www.facebook.com/GershonPapi',target:'_blank'},_react2.default.createElement(_IconButton2.default,{iconClassName:'icon-facebook'})),_react2.default.createElement('a',{href:'http://www.linkedin.com/in/gershonpapi',target:'_blank'},_react2.default.createElement(_IconButton2.default,{iconClassName:'icon-linkedin'})),_react2.default.createElement('a',{href:'http://github.com/papigers',target:'_blank'},_react2.default.createElement(_IconButton2.default,{iconClassName:'icon-github'})),_react2.default.createElement('a',{href:'mailto:papigers93@gmail.com',target:'_blank'},_react2.default.createElement(_IconButton2.default,{iconClassName:'icon-envelope'}))));}}]);return Footer;}(_react2.default.Component);exports.default=(0,_withStyles2.default)(_Footer2.default)(Footer);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Footer.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 29 */
/*!*********************************************************!*\
  !*** external "isomorphic-style-loader/lib/withStyles" ***!
  \*********************************************************/
/***/ function(module, exports) {

	module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 30 */
/*!*****************************************!*\
  !*** external "material-ui/IconButton" ***!
  \*****************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/IconButton");

/***/ },
/* 31 */
/*!*****************************************!*\
  !*** ./shared/routes/footer/Footer.css ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./Footer.css */ 32);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./Footer.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./Footer.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 32 */
/*!********************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/routes/footer/Footer.css ***!
  \********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, "\nfooter{\r\n\tbackground-color: #854332;\r\n\tcolor: #e8e8d8;\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\tz-index: 1100;\r\n\t-webkit-box-shadow: rgba(0, 0, 0, 0.156863) 0px -3px 10px, rgba(0, 0, 0, 0.227451) 0px -3px 10px;\r\n\t        box-shadow: rgba(0, 0, 0, 0.156863) 0px -3px 10px, rgba(0, 0, 0, 0.227451) 0px -3px 10px\r\n}\nfooter [class*=\"icon-\"]{\r\n\tcolor: white !important;\r\n\tposition: relative;\r\n\tfont-size: 20px !important\r\n}\nfooter [class*=\"icon-\"]:hover{\r\n\ttext-shadow: 1px 1px 15px white;\r\n\tcolor: rgb(255, 208, 128) !important\r\n}\nfooter button{\r\n\tposition: relative;\r\n\tpadding: 0px !important;\r\n\twidth: 28px !important;\r\n\theight: 24px !important\r\n}\nfooter p{\r\n\tfont-size: .9em;\r\n\tmargin: 10px !important\r\n}\nfooter h4{\r\n\tmargin: 0;\r\n\tmargin-top: 12px\r\n}\r\n\r\n", "", {"version":3,"sources":["/./shared/routes/footer/Footer.css"],"names":[],"mappings":";AACA;CACC,0BAA0B;CAC1B,eAAe;CACf,YAAY;CACZ,iBAAiB;CACjB,cAAc;CACd,iGAAyF;SAAzF,wFAAyF;CA8BzF;AA5BA;CACC,wBAAwB;CACxB,mBAAmB;CACjB,0BAA2B;CAM7B;AAJA;CACC,gCAAgC;CAC7B,oCAA8C;CACjD;AAGF;CACC,mBAAmB;CACjB,wBAAwB;CACxB,uBAAuB;CACvB,uBAAwB;CAC1B;AAED;CACC,gBAAgB;CACd,uBAAwB;CAC1B;AAED;CACG,UAAU;CACZ,gBAAiB;CAEjB","file":"Footer.css","sourcesContent":["\nfooter{\r\n\tbackground-color: #854332;\r\n\tcolor: #e8e8d8;\r\n\twidth: 100%;\r\n\toverflow: hidden;\r\n\tz-index: 1100;\r\n\tbox-shadow: rgba(0, 0, 0, 0.156863) 0px -3px 10px, rgba(0, 0, 0, 0.227451) 0px -3px 10px;\r\n\t\r\n\t& [class*=\"icon-\"]{\r\n\t\tcolor: white !important;\r\n\t\tposition: relative;\r\n    font-size: 20px !important;\n\r\n\t\t&:hover{\r\n\t\t\ttext-shadow: 1px 1px 15px white;\n      color: color($accent1Color w(50%)) !important;\n\t\t}\r\n\t}\r\n\t\r\n\t& button{\r\n\t\tposition: relative;\r\n    padding: 0px !important;\n    width: 28px !important;\n    height: 24px !important;\n\t}\r\n\t\r\n\t& p{\r\n\t\tfont-size: .9em;\r\n    margin: 10px !important;\n\t}\r\n\t\r\n\t& h4{\n    margin: 0;\n\t\tmargin-top: 12px;\n\t\t\r\n\t}\r\n}\r\n\r\n"],"sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 33 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 34 */
/*!****************************************************!*\
  !*** ./~/isomorphic-style-loader/lib/insertCss.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 35);

	var _assign2 = _interopRequireDefault(_assign);

	var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 5);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ 36);

	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

	var _getIterator2 = __webpack_require__(/*! babel-runtime/core-js/get-iterator */ 37);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Isomorphic CSS style loader for Webpack
	 *
	 * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE.txt file in the root directory of this source tree.
	 */

	var prefix = 's';
	var inserted = {};

	// Base64 encoding and decoding - The "Unicode Problem"
	// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
	function b64EncodeUnicode(str) {
	  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
	    return String.fromCharCode('0x' + p1);
	  }));
	}

	/**
	 * Remove style/link elements for specified node IDs
	 * if they are no longer referenced by UI components.
	 */
	function removeCss(ids) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var id = _step.value;

	      if (--inserted[id] <= 0) {
	        var elem = document.getElementById(prefix + id);
	        if (elem) {
	          elem.parentNode.removeChild(elem);
	        }
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}

	/**
	 * Example:
	 *   // Insert CSS styles object generated by `css-loader` into DOM
	 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
	 *
	 *   // Remove it from the DOM
	 *   removeCss();
	 */
	function insertCss(styles, options) {
	  var _Object$assign = (0, _assign2.default)({
	    replace: false,
	    prepend: false
	  }, options);

	  var replace = _Object$assign.replace;
	  var prepend = _Object$assign.prepend;


	  var ids = [];
	  for (var i = 0; i < styles.length; i++) {
	    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4);

	    var moduleId = _styles$i[0];
	    var css = _styles$i[1];
	    var media = _styles$i[2];
	    var sourceMap = _styles$i[3];

	    var id = moduleId + '-' + i;

	    ids.push(id);

	    if (inserted[id]) {
	      if (!replace) {
	        inserted[id]++;
	        continue;
	      }
	    }

	    inserted[id] = 1;

	    var elem = document.getElementById(prefix + id);
	    var create = false;

	    if (!elem) {
	      create = true;

	      elem = document.createElement('style');
	      elem.setAttribute('type', 'text/css');
	      elem.id = prefix + id;

	      if (media) {
	        elem.setAttribute('media', media);
	      }
	    }

	    var cssText = css;
	    if (sourceMap) {
	      cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
	      cssText += '\n/*# sourceURL=' + sourceMap.file + '*/';
	    }

	    if ('textContent' in elem) {
	      elem.textContent = cssText;
	    } else {
	      elem.styleSheet.cssText = cssText;
	    }

	    if (create) {
	      if (prepend) {
	        document.head.insertBefore(elem, document.head.childNodes[0]);
	      } else {
	        document.head.appendChild(elem);
	      }
	    }
	  }

	  return removeCss.bind(null, ids);
	}

	module.exports = insertCss;

/***/ },
/* 35 */
/*!******************************************************!*\
  !*** external "babel-runtime/core-js/object/assign" ***!
  \******************************************************/
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 36 */
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/***/ function(module, exports) {

	module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 37 */
/*!*****************************************************!*\
  !*** external "babel-runtime/core-js/get-iterator" ***!
  \*****************************************************/
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 38 */
/*!*****************************************************!*\
  !*** ./shared/components/appToolbar/AppToolbar.jsx ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(/*! babel-runtime/helpers/extends */ 9);var _extends3=_interopRequireDefault(_extends2);var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _Paper=__webpack_require__(/*! material-ui/Paper */ 39);var _Paper2=_interopRequireDefault(_Paper);var _Toolbar=__webpack_require__(/*! material-ui/Toolbar */ 40);var _MuiThemeProvider=__webpack_require__(/*! material-ui/styles/MuiThemeProvider */ 41);var _MuiThemeProvider2=_interopRequireDefault(_MuiThemeProvider);var _getMuiTheme=__webpack_require__(/*! material-ui/styles/getMuiTheme */ 42);var _getMuiTheme2=_interopRequireDefault(_getMuiTheme);var _navButtons=__webpack_require__(/*! ../navButtons */ 43);var _navButtons2=_interopRequireDefault(_navButtons);var _AppToolbar=__webpack_require__(/*! ./AppToolbar.css */ 55);var _AppToolbar2=_interopRequireDefault(_AppToolbar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles={title:{fontSize:30},toolbar:{position:'fixed',top:0,width:'100%'}};var AppToolbar=function(_React$Component){(0,_inherits3.default)(AppToolbar,_React$Component);function AppToolbar(){(0,_classCallCheck3.default)(this,AppToolbar);var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(AppToolbar).call(this));_this.handleScroll=function(){var height=document.getElementById('calcHeight').clientHeight;var doDepth=window.scrollY>height||!_this.props.flexibleSpaceElement;_this.setState({doDepth:doDepth});};_this.state={};_this.listener=_this.handleScroll.bind(_this);return _this;}(0,_createClass3.default)(AppToolbar,[{key:'getChildContext',value:function getChildContext(){return {loggedOn:this.props.loggedOn};}},{key:'componentWillMount',value:function componentWillMount(){var parent=this.context.muiTheme;this.muiTheme=(0,_getMuiTheme2.default)(parent,{toolbar:{height:parent.appBar.height,backgroundColor:parent.appBar.color},zIndex:{toolbar:parent.zIndex.appBar}});}},{key:'componentDidMount',value:function componentDidMount(){window.addEventListener('scroll',this.listener);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){this.setState({doDepth:nextProps.flexibleSpaceElement===null});}},{key:'componentWillUnmount',value:function componentWillUnmount(){window.removeEventListener('scroll',this.listener);}},{key:'render',value:function render(){var zIndex=this.muiTheme.zIndex.toolbar;var textColor=this.muiTheme.appBar.textColor;var _muiTheme$toolbar=this.muiTheme.toolbar;var backgroundColor=_muiTheme$toolbar.backgroundColor;var height=_muiTheme$toolbar.height;return _react2.default.createElement(_MuiThemeProvider2.default,{muiTheme:this.muiTheme},_react2.default.createElement('div',{style:{marginBottom:this.props.tabsElement&&this.state.doDepth?height+48:height}},_react2.default.createElement(_Paper2.default,{id:'appBar',zDepth:this.state.doDepth&&!this.props.tabsElement?this.props.zDepth:0,style:(0,_extends3.default)({},styles.toolbar,{backgroundColor:backgroundColor,color:textColor,zIndex:zIndex}),className:_AppToolbar2.default.removeShadowTrans},_react2.default.createElement(_Toolbar.Toolbar,null,_react2.default.createElement(_Toolbar.ToolbarGroup,{onClick:this.props.onLogoClick,style:{cursor:this.props.onLogoClick?'pointer':''}},this.props.logoUrl?_react2.default.createElement('img',{src:this.props.logoUrl,style:{width:'auto',height:height,display:'block'},alt:'Question It Logo'}):'',_react2.default.createElement(_Toolbar.ToolbarTitle,{text:this.props.title,style:(0,_extends3.default)({},styles.title,{color:textColor,fontWeight:600})})),_react2.default.createElement(_Toolbar.ToolbarGroup,{lastChild:true,float:'right'},_react2.default.createElement(_navButtons2.default,null)))),_react2.default.createElement(_Paper2.default,{id:'calcHeight',zDepth:this.props.tabsElement?0:this.props.zDepth,style:{backgroundColor:backgroundColor,color:textColor,position:'relative',top:height,zIndex:zIndex-1},className:_AppToolbar2.default.removeShadowTrans},this.props.flexibleSpaceElement),_react2.default.createElement(_Paper2.default,{zDepth:this.props.zDepth,style:{backgroundColor:backgroundColor,color:textColor,position:this.state.doDepth?'fixed':'relative',width:'100%',top:height,zIndex:zIndex-2},className:_AppToolbar2.default.removeShadowTrans},this.props.tabsElement)));}}]);return AppToolbar;}(_react2.default.Component); // AppToolbar = Relay.createContainer(AppToolbar, {
	//  fragments: {
	//    viewer: () => Relay.QL`
	//      fragment on User {
	//        id
	//      }
	//    `
	//  }
	// });
	AppToolbar.contextTypes={muiTheme:_react2.default.PropTypes.object.isRequired};AppToolbar.childContextTypes={loggedOn:_react2.default.PropTypes.object};AppToolbar.propTypes={title:_react2.default.PropTypes.string.isRequired,loggedOn:_react2.default.PropTypes.object,flexibleSpaceElement:_react2.default.PropTypes.element,tabsElement:_react2.default.PropTypes.element,zDepth:_react2.default.PropTypes.number,logoUrl:_react2.default.PropTypes.string,onLogoClick:_react2.default.PropTypes.func};AppToolbar.defaultProps={title:'',zDepth:1};exports.default=(0,_withStyles2.default)(_AppToolbar2.default)(AppToolbar);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppToolbar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 39 */
/*!************************************!*\
  !*** external "material-ui/Paper" ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/Paper");

/***/ },
/* 40 */
/*!**************************************!*\
  !*** external "material-ui/Toolbar" ***!
  \**************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/Toolbar");

/***/ },
/* 41 */
/*!******************************************************!*\
  !*** external "material-ui/styles/MuiThemeProvider" ***!
  \******************************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ },
/* 42 */
/*!*************************************************!*\
  !*** external "material-ui/styles/getMuiTheme" ***!
  \*************************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/getMuiTheme");

/***/ },
/* 43 */
/*!*****************************************************!*\
  !*** ./shared/components/navButtons/NavButtons.jsx ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _mobile=__webpack_require__(/*! ./mobile */ 44);var _mobile2=_interopRequireDefault(_mobile);var _desktop=__webpack_require__(/*! ./desktop */ 51);var _desktop2=_interopRequireDefault(_desktop);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var pages=[{label:'Home',path:'/'},{label:'Explore',path:'/polls'}, // {label: 'about', path: '/about'},
	{label:'Login',path:'/login'},{label:'My Profile',path:'/users/1'}];var NavButtons=function(_React$Component){(0,_inherits3.default)(NavButtons,_React$Component);function NavButtons(){(0,_classCallCheck3.default)(this,NavButtons);var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(NavButtons).call(this));_this.handleResize=function(){var small=window.innerWidth<=768;if(small!==_this.state.small){_this.setState({small:small});}};_this.isActive=function(path){return _this.context.router.isActive(path,path!=='/polls');};_this.state={small:true};_this.resizeListener=_this.handleResize.bind(_this);return _this;}(0,_createClass3.default)(NavButtons,[{key:'componentDidMount',value:function componentDidMount(){this.handleResize();window.addEventListener('resize',this.resizeListener);}},{key:'componentWillUnmount',value:function componentWillUnmount(){window.removeEventListener('resize',this.resizeListener);}},{key:'render',value:function render(){var loggedOn=this.context.loggedOn;var showPages=pages.filter(function(page){switch(page.label){case 'Login':return !loggedOn;case 'My Profile':return loggedOn;default:return true;}});return this.state.small?_react2.default.createElement(_mobile2.default,{pages:showPages,isActive:this.isActive}):_react2.default.createElement(_desktop2.default,{pages:showPages,isActive:this.isActive});}}]);return NavButtons;}(_react2.default.Component);NavButtons.contextTypes={loggedOn:_react2.default.PropTypes.object,router:_react2.default.PropTypes.object.isRequired};exports.default=NavButtons;module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "NavButtons.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 44 */
/*!******************************************************************!*\
  !*** ./shared/components/navButtons/mobile/MobileNavButtons.jsx ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _reactRouter=__webpack_require__(/*! react-router */ 18);var _IconMenu=__webpack_require__(/*! material-ui/IconMenu */ 45);var _IconMenu2=_interopRequireDefault(_IconMenu);var _MenuItem=__webpack_require__(/*! material-ui/MenuItem */ 46);var _MenuItem2=_interopRequireDefault(_MenuItem);var _IconButton=__webpack_require__(/*! material-ui/IconButton/IconButton */ 47);var _IconButton2=_interopRequireDefault(_IconButton);var _moreVert=__webpack_require__(/*! material-ui/svg-icons/navigation/more-vert */ 48);var _moreVert2=_interopRequireDefault(_moreVert);var _MobileNavButtons=__webpack_require__(/*! ./MobileNavButtons.css */ 49);var _MobileNavButtons2=_interopRequireDefault(_MobileNavButtons);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var MobileNavButtons=function(_React$Component){(0,_inherits3.default)(MobileNavButtons,_React$Component);function MobileNavButtons(){(0,_classCallCheck3.default)(this,MobileNavButtons);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(MobileNavButtons).apply(this,arguments));}(0,_createClass3.default)(MobileNavButtons,[{key:'render',value:function render(){var _props=this.props;var pages=_props.pages;var isActive=_props.isActive;return _react2.default.createElement(_IconMenu2.default,{iconButtonElement:_react2.default.createElement(_IconButton2.default,null,_react2.default.createElement(_moreVert2.default,null)),anchorOrigin:{horizontal:'middle',vertical:'center'},targetOrigin:{horizontal:'right',vertical:'top'},className:_MobileNavButtons2.default.navBtn},pages.map(function(obj,i){return _react2.default.createElement(_MenuItem2.default,{primaryText:obj.label,linkButton:true,containerElement:_react2.default.createElement(_reactRouter.Link,{to:obj.path}),key:i,value:obj.path,className:''+(isActive(obj.path)?_MobileNavButtons2.default.active:'')});}));}}]);return MobileNavButtons;}(_react2.default.Component);MobileNavButtons.propTypes={pages:_react2.default.PropTypes.array.isRequired,isActive:_react2.default.PropTypes.func.isRequired};exports.default=(0,_withStyles2.default)(_MobileNavButtons2.default)(MobileNavButtons);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "MobileNavButtons.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 45 */
/*!***************************************!*\
  !*** external "material-ui/IconMenu" ***!
  \***************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/IconMenu");

/***/ },
/* 46 */
/*!***************************************!*\
  !*** external "material-ui/MenuItem" ***!
  \***************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/MenuItem");

/***/ },
/* 47 */
/*!****************************************************!*\
  !*** external "material-ui/IconButton/IconButton" ***!
  \****************************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/IconButton/IconButton");

/***/ },
/* 48 */
/*!*************************************************************!*\
  !*** external "material-ui/svg-icons/navigation/more-vert" ***!
  \*************************************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/svg-icons/navigation/more-vert");

/***/ },
/* 49 */
/*!******************************************************************!*\
  !*** ./shared/components/navButtons/mobile/MobileNavButtons.css ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../../~/postcss-loader!./MobileNavButtons.css */ 50);
	    var insertCss = __webpack_require__(/*! ./../../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js!./MobileNavButtons.css", function() {
	        content = require("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js!./MobileNavButtons.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 50 */
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/components/navButtons/mobile/MobileNavButtons.css ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".MobileNavButtons_navBtn_2bE{\n}\n\n.MobileNavButtons_navBtn_2bE button{\n  height: 64px !important;\n}\n\n.MobileNavButtons_navBtn_2bE button svg{\n  fill: white !important;\n}\n\n.MobileNavButtons_active_2Jg{\n  background: #ffa000 !important;\n  color: white !important;\n}\n", "", {"version":3,"sources":["/./shared/components/navButtons/mobile/MobileNavButtons.css"],"names":[],"mappings":"AAAA;CAQC;;AAPA;EACC,wBAAwB;CAKxB;;AAHA;EACC,uBAAuB;CACvB;;AAIH;EACE,+BAAqC;EACrC,wBAAwB;CACzB","file":"MobileNavButtons.css","sourcesContent":[".navBtn{\n\t& button{\n\t\theight: 64px !important;\n\n\t\t& svg{\n\t\t\tfill: white !important;\n\t\t}\n\t}\n}\n\n.active{\n  background: $accent1Color !important;\n  color: white !important;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"navBtn": "MobileNavButtons_navBtn_2bE",
		"active": "MobileNavButtons_active_2Jg"
	};

/***/ },
/* 51 */
/*!********************************************************************!*\
  !*** ./shared/components/navButtons/desktop/DesktopNavButtons.jsx ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _RaisedButton=__webpack_require__(/*! material-ui/RaisedButton */ 52);var _RaisedButton2=_interopRequireDefault(_RaisedButton);var _reactRouter=__webpack_require__(/*! react-router */ 18);var _DesktopNavButtons=__webpack_require__(/*! ./DesktopNavButtons.css */ 53);var _DesktopNavButtons2=_interopRequireDefault(_DesktopNavButtons);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var DesktopNavButtons=function(_React$Component){(0,_inherits3.default)(DesktopNavButtons,_React$Component);function DesktopNavButtons(){(0,_classCallCheck3.default)(this,DesktopNavButtons);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(DesktopNavButtons).apply(this,arguments));}(0,_createClass3.default)(DesktopNavButtons,[{key:'render',value:function render(){var _props=this.props;var pages=_props.pages;var isActive=_props.isActive;return _react2.default.createElement('div',{className:_DesktopNavButtons2.default.root},pages.map(function(obj,i){return _react2.default.createElement(_RaisedButton2.default,{linkButton:true,containerElement:_react2.default.createElement(_reactRouter.Link,{to:obj.path}),label:obj.label,secondary:isActive(obj.path),className:_DesktopNavButtons2.default.navBtn,key:i});}));}}]);return DesktopNavButtons;}(_react2.default.Component);DesktopNavButtons.propTypes={pages:_react2.default.PropTypes.array.isRequired,isActive:_react2.default.PropTypes.func.isRequired};exports.default=(0,_withStyles2.default)(_DesktopNavButtons2.default)(DesktopNavButtons);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "DesktopNavButtons.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 52 */
/*!*******************************************!*\
  !*** external "material-ui/RaisedButton" ***!
  \*******************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/RaisedButton");

/***/ },
/* 53 */
/*!********************************************************************!*\
  !*** ./shared/components/navButtons/desktop/DesktopNavButtons.css ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../../~/postcss-loader!./DesktopNavButtons.css */ 54);
	    var insertCss = __webpack_require__(/*! ./../../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js!./DesktopNavButtons.css", function() {
	        content = require("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js!./DesktopNavButtons.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 54 */
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/components/navButtons/desktop/DesktopNavButtons.css ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".DesktopNavButtons_root_TqQ{\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.DesktopNavButtons_navBtn_l_D{\n\tmargin-left: 15px !important;\n\tmargin-right: 15px !important\n}\n\n.DesktopNavButtons_navBtn_l_D span{\n  font-weight: 600 !important;\n}\n", "", {"version":3,"sources":["/./shared/components/navButtons/desktop/DesktopNavButtons.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;EAApB,4BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;CACrB;;AAED;CACC,6BAA6B;CAC7B,6BAA8B;CAK9B;;AAHA;EACC,4BAA4B;CAC5B","file":"DesktopNavButtons.css","sourcesContent":[".root{\n  display: flex;\n  align-items: center;\n}\n\n.navBtn{\n\tmargin-left: 15px !important;\n\tmargin-right: 15px !important;\n\n\t& span{\n\t\tfont-weight: 600 !important;\n\t}\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"root": "DesktopNavButtons_root_TqQ",
		"navBtn": "DesktopNavButtons_navBtn_l_D"
	};

/***/ },
/* 55 */
/*!*****************************************************!*\
  !*** ./shared/components/appToolbar/AppToolbar.css ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./AppToolbar.css */ 56);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./AppToolbar.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./AppToolbar.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 56 */
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/components/appToolbar/AppToolbar.css ***!
  \********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".AppToolbar_removeShadowTrans_38G{\n  -webkit-transition: none !important;\n  -o-transition: none !important;\n  transition: none !important;\n}\n", "", {"version":3,"sources":["/./shared/components/appToolbar/AppToolbar.css"],"names":[],"mappings":"AAAA;EACE,oCAA4B;EAA5B,+BAA4B;EAA5B,4BAA4B;CAC7B","file":"AppToolbar.css","sourcesContent":[".removeShadowTrans{\n  transition: none !important;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"removeShadowTrans": "AppToolbar_removeShadowTrans_38G"
	};

/***/ },
/* 57 */
/*!************************************!*\
  !*** ./shared/routes/app/logo.png ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d2dc7a1350e21b90c495c57c5a9aa601.png";

/***/ },
/* 58 */
/*!***********************************************************************!*\
  !*** ./shared/routes/app/homeToolbar/flexibleSpace/FlexibleSpace.jsx ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _reactRouter=__webpack_require__(/*! react-router */ 18);var _RaisedButton=__webpack_require__(/*! material-ui/RaisedButton */ 52);var _RaisedButton2=_interopRequireDefault(_RaisedButton);var _FlexibleSpace=__webpack_require__(/*! ./FlexibleSpace.css */ 59);var _FlexibleSpace2=_interopRequireDefault(_FlexibleSpace);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var FlexibleSpace=function(_React$Component){(0,_inherits3.default)(FlexibleSpace,_React$Component);function FlexibleSpace(){(0,_classCallCheck3.default)(this,FlexibleSpace);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(FlexibleSpace).apply(this,arguments));}(0,_createClass3.default)(FlexibleSpace,[{key:'render',value:function render(){var _context=this.context;var loggedOn=_context.loggedOn;var muiTheme=_context.muiTheme;return _react2.default.createElement('div',{className:'container '+_FlexibleSpace2.default.root},_react2.default.createElement('h1',null,'QUESTION IT'),_react2.default.createElement('img',{src:this.props.logo,alt:'Question It Logo',className:_FlexibleSpace2.default.logo}),_react2.default.createElement('h2',{style:{color:muiTheme.palette.accent2Color}},'Online Voting Application'),_react2.default.createElement('p',null,'Question It is an online voting application, inspired by a FreeCodeCamp project.',_react2.default.createElement('br',null),'It is created using React and Material-UI.'),_react2.default.createElement(_RaisedButton2.default,{linkButton:true,containerElement:_react2.default.createElement(_reactRouter.Link,{to:loggedOn?'/polls/create':'/login'}),label:loggedOn?'Create Poll':'Join Us',secondary:true,className:_FlexibleSpace2.default.joinBtn}));}}]);return FlexibleSpace;}(_react2.default.Component);FlexibleSpace.contextTypes={muiTheme:_react2.default.PropTypes.object.isRequired,loggedOn:_react2.default.PropTypes.object};FlexibleSpace.propTypes={logo:_react2.default.PropTypes.string.isRequired};exports.default=(0,_withStyles2.default)(_FlexibleSpace2.default)(FlexibleSpace);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "FlexibleSpace.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 59 */
/*!***********************************************************************!*\
  !*** ./shared/routes/app/homeToolbar/flexibleSpace/FlexibleSpace.css ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../../../~/postcss-loader!./FlexibleSpace.css */ 60);
	    var insertCss = __webpack_require__(/*! ./../../../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../../../node_modules/postcss-loader/index.js!./FlexibleSpace.css", function() {
	        content = require("!!./../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../../../node_modules/postcss-loader/index.js!./FlexibleSpace.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 60 */
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/routes/app/homeToolbar/flexibleSpace/FlexibleSpace.css ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".FlexibleSpace_root_Cp5{\n\ttext-align: center\n}\n\n.FlexibleSpace_root_Cp5 .FlexibleSpace_logo_3JC{\n\theight: 170px;\n\twidth: auto\n}\n\n.FlexibleSpace_joinBtn_3Bz {\n\tmargin-bottom: 15px;\n}\n", "", {"version":3,"sources":["/./shared/routes/app/homeToolbar/flexibleSpace/FlexibleSpace.css"],"names":[],"mappings":"AAAA;CACC,kBAAmB;CAMnB;;AAJA;CACC,cAAc;CACd,WAAY;CACZ;;AAGF;CACC,oBAAoB;CACpB","file":"FlexibleSpace.css","sourcesContent":[".root{\n\ttext-align: center;\n\n\t& .logo{\n\t\theight: 170px;\n\t\twidth: auto;\n\t}\n}\n\n.joinBtn {\n\tmargin-bottom: 15px;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"root": "FlexibleSpace_root_Cp5",
		"logo": "FlexibleSpace_logo_3JC",
		"joinBtn": "FlexibleSpace_joinBtn_3Bz"
	};

/***/ },
/* 61 */
/*!***************************************************!*\
  !*** ./shared/routes/app/exploreToolbar/index.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.FlexibleSpace=exports.Tabs=undefined;var _tabs=__webpack_require__(/*! ./tabs */ 62);var _tabs2=_interopRequireDefault(_tabs);var _flexibleSpace=__webpack_require__(/*! ./flexibleSpace */ 64);var _flexibleSpace2=_interopRequireDefault(_flexibleSpace);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.Tabs=_tabs2.default;exports.FlexibleSpace=_flexibleSpace2.default;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 62 */
/*!********************************************************!*\
  !*** ./shared/routes/app/exploreToolbar/tabs/Tabs.jsx ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _Tabs=__webpack_require__(/*! material-ui/Tabs */ 63);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var ExploreTabs=function(_React$Component){(0,_inherits3.default)(ExploreTabs,_React$Component);function ExploreTabs(){var _Object$getPrototypeO;var _temp,_this,_ret;(0,_classCallCheck3.default)(this,ExploreTabs);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=(0,_possibleConstructorReturn3.default)(this,(_Object$getPrototypeO=(0,_getPrototypeOf2.default)(ExploreTabs)).call.apply(_Object$getPrototypeO,[this].concat(args))),_this),_this.switchTabs=function(tab){_this.context.router.push('/polls/'+tab);},_temp),(0,_possibleConstructorReturn3.default)(_this,_ret);}(0,_createClass3.default)(ExploreTabs,[{key:'render',value:function render(){var tab=this.props.tab;return _react2.default.createElement(_Tabs.Tabs,{value:tab,onChange:this.switchTabs},_react2.default.createElement(_Tabs.Tab,{label:'trending',value:'trending'}),_react2.default.createElement(_Tabs.Tab,{label:'top',value:'top'}),_react2.default.createElement(_Tabs.Tab,{label:'new',value:'new'}));}}]);return ExploreTabs;}(_react2.default.Component);ExploreTabs.defaultProps={tab:''};ExploreTabs.propTypes={tab:_react2.default.PropTypes.string.isRequired};ExploreTabs.contextTypes={router:_react2.default.PropTypes.object.isRequired};exports.default=ExploreTabs;module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Tabs.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 63 */
/*!***********************************!*\
  !*** external "material-ui/Tabs" ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/Tabs");

/***/ },
/* 64 */
/*!**************************************************************************!*\
  !*** ./shared/routes/app/exploreToolbar/flexibleSpace/FlexibleSpace.jsx ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _reactRouter=__webpack_require__(/*! react-router */ 18);var _RaisedButton=__webpack_require__(/*! material-ui/RaisedButton */ 52);var _RaisedButton2=_interopRequireDefault(_RaisedButton);var _searchBar=__webpack_require__(/*! ../../../../components/searchBar */ 65);var _searchBar2=_interopRequireDefault(_searchBar);var _FlexibleSpace=__webpack_require__(/*! ./FlexibleSpace.css */ 68);var _FlexibleSpace2=_interopRequireDefault(_FlexibleSpace);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var FlexibleSpace=function(_React$Component){(0,_inherits3.default)(FlexibleSpace,_React$Component);function FlexibleSpace(){(0,_classCallCheck3.default)(this,FlexibleSpace);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(FlexibleSpace).apply(this,arguments));}(0,_createClass3.default)(FlexibleSpace,[{key:'render',value:function render(){return _react2.default.createElement('div',{className:'container '+_FlexibleSpace2.default.root},_react2.default.createElement(_searchBar2.default,{hint:'Explore Polls',value:this.props.query}),_react2.default.createElement(_RaisedButton2.default,{linkButton:true,containerElement:_react2.default.createElement(_reactRouter.Link,{to:'/polls/create'}),label:'Create Poll',secondary:true,className:_FlexibleSpace2.default.createBtn}));}}]);return FlexibleSpace;}(_react2.default.Component);FlexibleSpace.propTypes={query:_react2.default.PropTypes.string};exports.default=(0,_withStyles2.default)(_FlexibleSpace2.default)(FlexibleSpace);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "FlexibleSpace.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 65 */
/*!***************************************************!*\
  !*** ./shared/components/searchBar/SearchBar.jsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _IconButton=__webpack_require__(/*! material-ui/IconButton */ 30);var _IconButton2=_interopRequireDefault(_IconButton);var _Toolbar=__webpack_require__(/*! material-ui/Toolbar */ 40);var _Toolbar2=_interopRequireDefault(_Toolbar);var _SearchBar=__webpack_require__(/*! ./SearchBar.css */ 66);var _SearchBar2=_interopRequireDefault(_SearchBar);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var SearchBar=function(_React$Component){(0,_inherits3.default)(SearchBar,_React$Component);function SearchBar(props){(0,_classCallCheck3.default)(this,SearchBar);var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(SearchBar).call(this,props));_this.onFocus=function(){return _this.setState({focused:true});};_this.onBlur=function(){return _this.setState({focused:false});};_this.onChange=function(event){var value=event.target.value;var router=_this.context.router;if(value===''){router.goBack();}else {if(window.location.pathname==='/polls/search'){router.replace({pathname:'/polls/search',query:{q:value}});}else {router.push({pathname:'/polls/search',query:{q:value}});}}_this.setState({value:value});};_this.state={value:props.value||'',focused:false};return _this;}(0,_createClass3.default)(SearchBar,[{key:'render',value:function render(){var _state=this.state;var focused=_state.focused;var value=_state.value;if(!focused){value='';}return _react2.default.createElement('div',null,_react2.default.createElement(_Toolbar2.default,{className:_SearchBar2.default.toolbar+' '+(focused?_SearchBar2.default.focus:'')},_react2.default.createElement(_IconButton2.default,{iconClassName:'icon-search '+_SearchBar2.default.icon,className:_SearchBar2.default.button}),_react2.default.createElement('input',{type:'text',onFocus:this.onFocus,onBlur:this.onBlur,value:value,onChange:this.onChange,placeholder:this.props.hint,className:_SearchBar2.default.textField})));}}]);return SearchBar;}(_react2.default.Component);SearchBar.propTypes={hint:_react2.default.PropTypes.string,value:_react2.default.PropTypes.string};SearchBar.contextTypes={router:_react2.default.PropTypes.object.isRequired};exports.default=(0,_withStyles2.default)(_SearchBar2.default)(SearchBar);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SearchBar.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 66 */
/*!***************************************************!*\
  !*** ./shared/components/searchBar/SearchBar.css ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./SearchBar.css */ 67);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./SearchBar.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./SearchBar.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 67 */
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/components/searchBar/SearchBar.css ***!
  \******************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".SearchBar_toolbar_34V{\n  background-color: rgb(214, 56, 56) !important;\n  border-radius: 5px;\n  max-width: 700px;\n  margin: 0 auto;\n  padding-left: 0 !important;\n  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n\n.SearchBar_focus_2dR{\n    background-color: white !important\n  }\n\n.SearchBar_focus_2dR .SearchBar_textField_rJs{\n  color: black;\n}\n\n.SearchBar_focus_2dR .SearchBar_icon_Oev{\n  color: #d50000 !important;\n}\n\n.SearchBar_textField_rJs{\n  background: rgba(0,0,0,0);\n  border: none;\n  outline: none;\n  font-size: 1.8em;\n  //text-align: center;\n  margin-right: 64px;\n  color: white;\n  width: 100%;\n  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms\n}\n\n.SearchBar_textField_rJs.SearchBar_focus_2dR{\n  color: black;\n}\n\n::-webkit-input-placeholder{\n  color: white;\n  font-size: 1.1em;\n  text-align: center;\n  font-weight: 600;\n  font-family: 'Roboto', sans-serif;\n}\n\n::-moz-placeholder{\n  color: white;\n  font-size: 1.1em;\n  text-align: center;\n  font-weight: 600;\n  font-family: 'Roboto', sans-serif;\n}\n\n:-ms-input-placeholder{\n  color: white;\n  font-size: 1.1em;\n  text-align: center;\n  font-weight: 600;\n  font-family: 'Roboto', sans-serif;\n}\n\n::placeholder{\n  color: white;\n  font-size: 1.1em;\n  text-align: center;\n  font-weight: 600;\n  font-family: 'Roboto', sans-serif;\n}\n\n.SearchBar_icon_Oev{\n  color: white !important;\n  font-size: 38px !important;\n  -webkit-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  -o-transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms\n}\n\n.SearchBar_icon_Oev.SearchBar_focused_27K{\n  color: #d50000 !important;\n}\n\n.SearchBar_button_1lO{\n  height: 64px !important;\n  width: 64px !important;\n  margin-right: 15px !important;\n}\n", "", {"version":3,"sources":["/./shared/components/searchBar/SearchBar.css"],"names":[],"mappings":"AAAA;EACE,8CAA0D;EAC1D,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,2BAA2B;EAC3B,iEAAyD;EAAzD,4DAAyD;EAAzD,yDAAyD;CAC1D;;AAED;IACI,kCAAmC;GASpC;;AAPC;EACE,aAAY;CACb;;AAED;EACE,0BAAiC;CAClC;;AAGL;EACE,0BAA0B;EAC1B,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,iEAAyD;EAAzD,4DAAyD;EAAzD,wDAAyD;CAK1D;;AAHC;EACE,aAAa;CACd;;AAGH;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,kCAAkC;CACnC;;AAND;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,kCAAkC;CACnC;;AAND;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,kCAAkC;CACnC;;AAND;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,kCAAkC;CACnC;;AAED;EACE,wBAAwB;EACxB,2BAA2B;EAC3B,iEAAyD;EAAzD,4DAAyD;EAAzD,wDAAyD;CAK1D;;AAHC;EACE,0BAAiC;CAClC;;AAGH;EACE,wBAAwB;EACxB,uBAAuB;EACvB,8BAA8B;CAC/B","file":"SearchBar.css","sourcesContent":[".toolbar{\n  background-color: color($primary1Color w(22%)) !important;\n  border-radius: 5px;\n  max-width: 700px;\n  margin: 0 auto;\n  padding-left: 0 !important;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n\n.focus{\n    background-color: white !important;\n\n    & .textField{\n      color:black;\n    }\n\n    & .icon{\n      color: $primary1Color !important;\n    }\n  }\n\n.textField{\n  background: rgba(0,0,0,0);\n  border: none;\n  outline: none;\n  font-size: 1.8em;\n  //text-align: center;\n  margin-right: 64px;\n  color: white;\n  width: 100%;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n\n  &.focus{\n    color: black;\n  }\n}\n\n::placeholder{\n  color: white;\n  font-size: 1.1em;\n  text-align: center;\n  font-weight: 600;\n  font-family: 'Roboto', sans-serif;\n}\n\n.icon{\n  color: white !important;\n  font-size: 38px !important;\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n\n  &.focused{\n    color: $primary1Color !important;\n  }\n}\n\n.button{\n  height: 64px !important;\n  width: 64px !important;\n  margin-right: 15px !important;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"toolbar": "SearchBar_toolbar_34V",
		"focus": "SearchBar_focus_2dR",
		"textField": "SearchBar_textField_rJs",
		"icon": "SearchBar_icon_Oev",
		"focused": "SearchBar_focused_27K",
		"button": "SearchBar_button_1lO"
	};

/***/ },
/* 68 */
/*!**************************************************************************!*\
  !*** ./shared/routes/app/exploreToolbar/flexibleSpace/FlexibleSpace.css ***!
  \**************************************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../../../~/postcss-loader!./FlexibleSpace.css */ 69);
	    var insertCss = __webpack_require__(/*! ./../../../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../../../node_modules/postcss-loader/index.js!./FlexibleSpace.css", function() {
	        content = require("!!./../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../../../node_modules/postcss-loader/index.js!./FlexibleSpace.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 69 */
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/routes/app/exploreToolbar/flexibleSpace/FlexibleSpace.css ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".FlexibleSpace_root_2dg{\n  text-align: center;\n}\n\n.FlexibleSpace_header_2Uh{\n  font-size: 200%;\n  margin: 0;\n  padding: 12px;\n}\n\n.FlexibleSpace_createBtn_2OJ {;\n\tmargin: 15px;\n}\n", "", {"version":3,"sources":["/./shared/routes/app/exploreToolbar/flexibleSpace/FlexibleSpace.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;CACpB;;AAED;EACE,gBAAgB;EAChB,UAAU;EACV,cAAc;CACf;;AAED;CACC,aAAa;CACb","file":"FlexibleSpace.css","sourcesContent":[".root{\n  text-align: center;\n}\n\n.header{\n  font-size: 200%;\n  margin: 0;\n  padding: 12px;\n}\n\n.createBtn {;\n\tmargin: 15px;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"root": "FlexibleSpace_root_2dg",
		"header": "FlexibleSpace_header_2Uh",
		"createBtn": "FlexibleSpace_createBtn_2OJ"
	};

/***/ },
/* 70 */
/*!*************************************!*\
  !*** ./shared/routes/home/Home.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _Link=__webpack_require__(/*! react-router/lib/Link */ 71);var _Link2=_interopRequireDefault(_Link);var _RaisedButton=__webpack_require__(/*! material-ui/RaisedButton */ 52);var _RaisedButton2=_interopRequireDefault(_RaisedButton);var _pollItem=__webpack_require__(/*! ../../components/pollItem */ 72);var _pollItem2=_interopRequireDefault(_pollItem);var _Home=__webpack_require__(/*! ./Home.css */ 76);var _Home2=_interopRequireDefault(_Home);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Home=function(_React$Component){(0,_inherits3.default)(Home,_React$Component);function Home(){(0,_classCallCheck3.default)(this,Home);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(Home).apply(this,arguments));}(0,_createClass3.default)(Home,[{key:'render',value:function render(){return _react2.default.createElement('div',{className:'container'},_react2.default.createElement('div',{className:'row'},_react2.default.createElement('h1',{className:'center-text'},'Trending Polls'),_react2.default.createElement(_RaisedButton2.default,{linkButton:true,containerElement:_react2.default.createElement(_Link2.default,{to:'/polls'}),label:'Explore More',className:_Home2.default.exploreBtn,primary:true}),_react2.default.createElement('div',null,_react2.default.createElement(_pollItem2.default,{username:'papigers',title:'Example Title',choices:[['Mushrooms',3],['Onions',1],['Olives',1],['Zucchini',1],['Pepperoni',2]]}),_react2.default.createElement(_pollItem2.default,{username:'papigers',title:'Example Title',choices:[['Mushrooms',3],['Onions',1],['Olives',1],['Zucchini',1],['Pepperoni',2]]}))));}}]);return Home;}(_react2.default.Component);exports.default=(0,_withStyles2.default)(_Home2.default)(Home);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Home.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 71 */
/*!****************************************!*\
  !*** external "react-router/lib/Link" ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = require("react-router/lib/Link");

/***/ },
/* 72 */
/*!*************************************************!*\
  !*** ./shared/components/pollItem/PollItem.jsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _Paper=__webpack_require__(/*! material-ui/Paper */ 39);var _Paper2=_interopRequireDefault(_Paper);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _chartColors=__webpack_require__(/*! ./chartColors */ 73);var _chartColors2=_interopRequireDefault(_chartColors);var _PollItem=__webpack_require__(/*! ./PollItem.css */ 74);var _PollItem2=_interopRequireDefault(_PollItem);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var PollItem=function(_React$Component){(0,_inherits3.default)(PollItem,_React$Component);function PollItem(){(0,_classCallCheck3.default)(this,PollItem);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(PollItem).apply(this,arguments));}(0,_createClass3.default)(PollItem,[{key:'render',value:function render(){var choices=this.props.choices;var colorSpread=choices.map(function(choice,i){return _react2.default.createElement('div',{key:i,className:'colorSpread',style:{flexGrow:choice[1],backgroundColor:_chartColors2.default[i]}});});return _react2.default.createElement('div',{className:'col-xs-12 col-sm-6 col-md-4 col-xlg-3 '+_PollItem2.default.root},_react2.default.createElement(_Paper2.default,{zDepth:2},_react2.default.createElement('div',{className:_PollItem2.default.colorSpreadContainer+' '+_PollItem2.default.top},colorSpread),_react2.default.createElement('div',{className:_PollItem2.default.content},_react2.default.createElement('h4',{className:'center-text'},_react2.default.createElement('span',{className:_PollItem2.default.user},this.props.username),' asked:'),_react2.default.createElement('h2',{className:'center-text'},this.props.title),_react2.default.createElement('div',{className:_PollItem2.default.gradinetHide})),_react2.default.createElement('div',{className:_PollItem2.default.colorSpreadContainer},colorSpread)));}}]);return PollItem;}(_react2.default.Component);PollItem.propTypes={choices:_react2.default.PropTypes.array.isRequired,username:_react2.default.PropTypes.string.isRequired,title:_react2.default.PropTypes.string.isRequired};PollItem.contextTypes={muiTheme:_react2.default.PropTypes.object.isRequired};exports.default=(0,_withStyles2.default)(_PollItem2.default)(PollItem);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "PollItem.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 73 */
/*!***************************************************!*\
  !*** ./shared/components/pollItem/chartColors.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=['#3366CC','#DC3912','#FF9900','#109618','#990099','#3B3EAC','#0099C6','#DD4477','#66AA00','#B82E2E','#316395','#994499','#22AA99','#AAAA11','#6633CC','#E67300','#8B0707','#329262','#5574A6','#3B3EAC'];module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "chartColors.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 74 */
/*!*************************************************!*\
  !*** ./shared/components/pollItem/PollItem.css ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./PollItem.css */ 75);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./PollItem.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./PollItem.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 75 */
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/components/pollItem/PollItem.css ***!
  \****************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".PollItem_root_3Eu {\r\n\tmargin: 12px 0;\r\n}\r\n\r\n.PollItem_colorSpread_ETG {\r\n\theight: 100%;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.PollItem_user_3dX{\r\n\tcolor: #d50000;\r\n}\r\n\r\n.PollItem_content_sXq {\r\n\tpadding: 10px 20px;\r\n\theight: 200px;\n\tposition: relative;\r\n\toverflow: hidden;\r\n}\r\n\r\n.PollItem_gradinetHide_2UR {\r\n\tposition: absolute;\r\n\theight: 60%;\n\tbottom: 0;\r\n\tleft: 0;\r\n\tbackground: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(white));\r\n\tbackground: -webkit-linear-gradient(rgba(0, 0, 0, 0), white);\r\n\tbackground: -o-linear-gradient(rgba(0, 0, 0, 0), white);\r\n\tbackground: linear-gradient(rgba(0, 0, 0, 0), white);\r\n\twidth: 100%;\r\n}\r\n\r\n.PollItem_colorSpreadContainer_3sc {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\theight: 10px\r\n}\r\n\r\n.PollItem_colorSpreadContainer_3sc.PollItem_top_RxG {\r\n\theight: 5px;\r\n}\n", "", {"version":3,"sources":["/./shared/components/pollItem/PollItem.css"],"names":[],"mappings":"AAAA;CACC,eAAe;CACf;;AAED;CACC,aAAa;CACb,sBAAsB;CACtB;;AAED;CACC,eAAsB;CACtB;;AAED;CACC,mBAAmB;CACnB,cAAc;CACd,mBAAmB;CACnB,iBAAiB;CACjB;;AAED;CACC,mBAAmB;CACnB,YAAY;CACZ,UAAU;CACV,QAAQ;CACR,+FAAqD;CAArD,6DAAqD;CAArD,wDAAqD;CAArD,qDAAqD;CACrD,YAAY;CACZ;;AAED;CACC,qBAAc;CAAd,sBAAc;CAAd,qBAAc;CAAd,cAAc;CACd,YAAY;CACZ,YAAa;CAIb;;AAHA;CACC,YAAY;CACZ","file":"PollItem.css","sourcesContent":[".root {\r\n\tmargin: 12px 0;\r\n}\r\n\r\n.colorSpread {\r\n\theight: 100%;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.user{\r\n\tcolor: $primary1Color;\r\n}\r\n\r\n.content {\r\n\tpadding: 10px 20px;\r\n\theight: 200px;\n\tposition: relative;\r\n\toverflow: hidden;\r\n}\r\n\r\n.gradinetHide {\r\n\tposition: absolute;\r\n\theight: 60%;\n\tbottom: 0;\r\n\tleft: 0;\r\n\tbackground: linear-gradient(rgba(0, 0, 0, 0), white);\r\n\twidth: 100%;\r\n}\r\n\r\n.colorSpreadContainer {\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\theight: 10px;\r\n\t&.top {\r\n\t\theight: 5px;\r\n\t}\r\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"root": "PollItem_root_3Eu",
		"colorSpread": "PollItem_colorSpread_ETG",
		"user": "PollItem_user_3dX",
		"content": "PollItem_content_sXq",
		"gradinetHide": "PollItem_gradinetHide_2UR",
		"colorSpreadContainer": "PollItem_colorSpreadContainer_3sc",
		"top": "PollItem_top_RxG"
	};

/***/ },
/* 76 */
/*!*************************************!*\
  !*** ./shared/routes/home/Home.css ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./Home.css */ 77);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./Home.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./Home.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 77 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/routes/home/Home.css ***!
  \****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".Home_exploreBtn_3pU{\n  text-align: center;\n  display: block !important;\n  width: 200px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n", "", {"version":3,"sources":["/./shared/routes/home/Home.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;EACb,eAAe;EACf,oBAAoB;CACrB","file":"Home.css","sourcesContent":[".exploreBtn{\n  text-align: center;\n  display: block !important;\n  width: 200px;\n  margin: 0 auto;\n  margin-bottom: 20px;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"exploreBtn": "Home_exploreBtn_3pU"
	};

/***/ },
/* 78 */
/*!***************************************!*\
  !*** ./shared/routes/login/Login.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _Dialog=__webpack_require__(/*! material-ui/Dialog */ 79);var _Dialog2=_interopRequireDefault(_Dialog);var _loginSection=__webpack_require__(/*! ../../components/loginSection */ 80);var _loginSection2=_interopRequireDefault(_loginSection);var _registerForm=__webpack_require__(/*! ../../components/registerForm */ 91);var _registerForm2=_interopRequireDefault(_registerForm);var _Login=__webpack_require__(/*! ./Login.css */ 93);var _Login2=_interopRequireDefault(_Login);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var LoginPage=function(_React$Component){(0,_inherits3.default)(LoginPage,_React$Component);function LoginPage(props){(0,_classCallCheck3.default)(this,LoginPage);var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(LoginPage).call(this,props));_this.handleClose=function(){_this.setState({open:!_this.state.open});};_this.state={open:false};return _this;}(0,_createClass3.default)(LoginPage,[{key:'render',value:function render(){var _this2=this;return _react2.default.createElement('div',{className:_Login2.default.root},_react2.default.createElement('div',{className:'row '+_Login2.default.row},_react2.default.createElement('div',{className:'col-xs-12 '+_Login2.default.login},_react2.default.createElement(_loginSection2.default,null),_react2.default.createElement('span',{className:'center-text'},'Not registered yet?',' ',_react2.default.createElement('a',{className:_Login2.default.link,onClick:function onClick(){return _this2.setState({open:true});}},'Join Now!')))),_react2.default.createElement(_Dialog2.default,{title:'Haven\'t joined yet?',titleClassName:'center-text '+_Login2.default.dialogTitle,open:this.state.open,onRequestClose:this.handleClose,autoScrollBodyContent:true},_react2.default.createElement(_registerForm2.default,{uniqueId:'register-page'})));}}]);return LoginPage;}(_react2.default.Component);LoginPage.contextTypes={muiTheme:_react2.default.PropTypes.object.isRequired};exports.default=(0,_withStyles2.default)(_Login2.default)(LoginPage);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Login.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 79 */
/*!*************************************!*\
  !*** external "material-ui/Dialog" ***!
  \*************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/Dialog");

/***/ },
/* 80 */
/*!*********************************************************!*\
  !*** ./shared/components/loginSection/LoginSection.jsx ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _loginForm=__webpack_require__(/*! ../loginForm */ 81);var _loginForm2=_interopRequireDefault(_loginForm);var _loginSocial=__webpack_require__(/*! ../loginSocial */ 83);var _loginSocial2=_interopRequireDefault(_loginSocial);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};} // import s from './LoginSection.css';
	// import withStyles from 'isomorphic-style-loader/lib/withStyles';
	var LoginSection=function(_React$Component){(0,_inherits3.default)(LoginSection,_React$Component);function LoginSection(){(0,_classCallCheck3.default)(this,LoginSection);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(LoginSection).apply(this,arguments));}(0,_createClass3.default)(LoginSection,[{key:'render',value:function render(){return _react2.default.createElement('div',null,_react2.default.createElement('h1',{className:'center-text'},'Login'),_react2.default.createElement(_loginSocial2.default,null),_react2.default.createElement('h2',{className:'center-text'},'OR'),_react2.default.createElement(_loginForm2.default,{uniqueId:'login-page'}));}}]);return LoginSection;}(_react2.default.Component);exports.default=LoginSection;module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "LoginSection.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 81 */
/*!***************************************************!*\
  !*** ./shared/components/loginForm/LoginForm.jsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _RaisedButton=__webpack_require__(/*! material-ui/RaisedButton */ 52);var _RaisedButton2=_interopRequireDefault(_RaisedButton);var _TextField=__webpack_require__(/*! material-ui/TextField */ 82);var _TextField2=_interopRequireDefault(_TextField);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles={input:{maxWidth:500,margin:'0 auto',display:'block'}};var LoginForm=function(_React$Component){(0,_inherits3.default)(LoginForm,_React$Component);function LoginForm(){(0,_classCallCheck3.default)(this,LoginForm);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(LoginForm).apply(this,arguments));}(0,_createClass3.default)(LoginForm,[{key:'render',value:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_TextField2.default,{floatingLabelText:'Username or Email',id:'login-form-email-'+this.props.uniqueId,style:styles.input,type:'email'}),_react2.default.createElement(_TextField2.default,{id:'login-form-pass-'+this.props.uniqueId,floatingLabelText:'Password',style:styles.input,type:'password'}),_react2.default.createElement(_RaisedButton2.default,{secondary:true,label:'Login',className:'formButton'}));}}]);return LoginForm;}(_react2.default.Component);LoginForm.propTypes={uniqueId:_react2.default.PropTypes.string.isRequired};exports.default=LoginForm;module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "LoginForm.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 82 */
/*!****************************************!*\
  !*** external "material-ui/TextField" ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/TextField");

/***/ },
/* 83 */
/*!*******************************************************!*\
  !*** ./shared/components/loginSocial/LoginSocial.jsx ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _socialButton=__webpack_require__(/*! ../socialButton */ 84);var _socialButton2=_interopRequireDefault(_socialButton);var _LoginSocial=__webpack_require__(/*! ./LoginSocial.css */ 89);var _LoginSocial2=_interopRequireDefault(_LoginSocial);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var LoginSocial=function(_React$Component){(0,_inherits3.default)(LoginSocial,_React$Component);function LoginSocial(){(0,_classCallCheck3.default)(this,LoginSocial);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(LoginSocial).apply(this,arguments));}(0,_createClass3.default)(LoginSocial,[{key:'render',value:function render(){return _react2.default.createElement('div',{className:_LoginSocial2.default.root},_react2.default.createElement(_socialButton2.default,{type:'facebook'}),_react2.default.createElement(_socialButton2.default,{type:'twitter'}),_react2.default.createElement(_socialButton2.default,{type:'google'}));}}]);return LoginSocial;}(_react2.default.Component);exports.default=(0,_withStyles2.default)(_LoginSocial2.default)(LoginSocial);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "LoginSocial.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 84 */
/*!*********************************************************!*\
  !*** ./shared/components/socialButton/SocialButton.jsx ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _FloatingActionButton=__webpack_require__(/*! material-ui/FloatingActionButton */ 85);var _FloatingActionButton2=_interopRequireDefault(_FloatingActionButton);var _add=__webpack_require__(/*! material-ui/svg-icons/content/add */ 86);var _add2=_interopRequireDefault(_add);var _SocialButton=__webpack_require__(/*! ./SocialButton.css */ 87);var _SocialButton2=_interopRequireDefault(_SocialButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var SocialButton=function(_React$Component){(0,_inherits3.default)(SocialButton,_React$Component);function SocialButton(){(0,_classCallCheck3.default)(this,SocialButton);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(SocialButton).apply(this,arguments));}(0,_createClass3.default)(SocialButton,[{key:'render',value:function render(){var type=this.props.type;return type!=='add'?_react2.default.createElement(_FloatingActionButton2.default,{linkButton:true,className:_SocialButton2.default.root+' '+_SocialButton2.default[type]+' '+this.props.className,iconClassName:'icon-'+type}):_react2.default.createElement(_FloatingActionButton2.default,{linkButton:true,className:_SocialButton2.default.root+' '+_SocialButton2.default.disabled+' '+this.props.className},_react2.default.createElement(_add2.default,{className:_SocialButton2.default.largeIcon}));}}],[{key:'propTypes',value:function propTypes(){return {type:_react2.default.PropTypes.string.isRequired,className:_react2.default.PropTypes.string};}}]);return SocialButton;}(_react2.default.Component);exports.default=(0,_withStyles2.default)(_SocialButton2.default)(SocialButton);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SocialButton.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 85 */
/*!***************************************************!*\
  !*** external "material-ui/FloatingActionButton" ***!
  \***************************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/FloatingActionButton");

/***/ },
/* 86 */
/*!****************************************************!*\
  !*** external "material-ui/svg-icons/content/add" ***!
  \****************************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/svg-icons/content/add");

/***/ },
/* 87 */
/*!*********************************************************!*\
  !*** ./shared/components/socialButton/SocialButton.css ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./SocialButton.css */ 88);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./SocialButton.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./SocialButton.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 88 */
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/components/socialButton/SocialButton.css ***!
  \************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".SocialButton_root_3JT{\r\n\t-webkit-box-flex: 1;\r\n\t-webkit-flex-grow: 1;\r\n\t    -ms-flex-positive: 1;\r\n\t        flex-grow: 1\r\n}\n.SocialButton_root_3JT span{\r\n\twidth: 100% !important\r\n}\n.SocialButton_root_3JT, .SocialButton_root_3JT span{\r\n\tborder-radius: 0px !important\r\n}\n.SocialButton_root_3JT:before, .SocialButton_root_3JT span:before{\r\n\tfont-size: larger;\r\n\tline-height: inherit\r\n}\n.SocialButton_root_3JT .SocialButton_largeIcon_2lw{\r\n\twidth: 38px !important\r\n}\n.SocialButton_root_3JT.SocialButton_disabled_3SD{}\n.SocialButton_root_3JT.SocialButton_disabled_3SD>span{\r\n\tbackground-color: gray !important\r\n}\n.SocialButton_root_3JT.SocialButton_facebook_1jX{}\n.SocialButton_root_3JT.SocialButton_facebook_1jX>span{\r\n\tbackground-color: #3b5998 !important\r\n}\n.SocialButton_root_3JT.SocialButton_twitter_3Wh{}\n.SocialButton_root_3JT.SocialButton_twitter_3Wh>span{\r\n\tbackground-color: cornflowerblue !important\r\n}\n.SocialButton_root_3JT.SocialButton_google_1aR{}\n.SocialButton_root_3JT.SocialButton_google_1aR>span{\r\n\tbackground-color: #d50000 !important\r\n}\n", "", {"version":3,"sources":["/./shared/components/socialButton/SocialButton.css"],"names":[],"mappings":"AAKA;CACC,oBAAa;CAAb,qBAAa;KAAb,qBAAa;SAAb,YAAa;CA2Cb;AAzCA;CACC,sBAAuB;CACvB;AAED;CACC,6BAA8B;CAM9B;AAJA;CACC,kBAAkB;CAClB,oBAAqB;CACrB;AAGD;CACI,sBAAuB;CAC1B;AAED,kDAIA;AAHA;CACC,iCAA6C;CAC7C;AAGF,kDAIC;AAHA;CACC,oCAAuC;CACvC;AAGF,iDAIC;AAHA;CACC,2CAAuC;CACvC;AAGF,gDAKC;AAJA;CACC,oCAAuC;CAEvC","file":"SocialButton.css","sourcesContent":["$fb-color: #3b5998;\r\n$gg-color: #d50000;\r\n$tw-color: cornflowerblue;\r\n$disabled-color: gray;\n\r\n.root{\r\n\tflex-grow: 1;\r\n\t\r\n\t& span{\r\n\t\twidth: 100% !important;\r\n\t}\r\n\t\r\n\t&, & span{\r\n\t\tborder-radius: 0px !important;\r\n\t\t\r\n\t\t&:before{\r\n\t\t\tfont-size: larger;\r\n\t\t\tline-height: inherit;\r\n\t\t}\r\n\t}\r\n\n  & .largeIcon{\n      width: 38px !important;\n  }\n\t\r\n  &.disabled{\n\t\t&>span{\n\t\t\tbackground-color: $disabled-color !important;\n\t\t}\n\t}\n\t\r\n\t&.facebook{\r\n\t\t&>span{\r\n\t\t\tbackground-color: $fb-color !important;\r\n\t\t}\r\n\t}\r\n\t\r\n\t&.twitter{\r\n\t\t&>span{\r\n\t\t\tbackground-color: $tw-color !important;\r\n\t\t}\r\n\t}\r\n\t\r\n\t&.google{\r\n\t\t&>span{\r\n\t\t\tbackground-color: $gg-color !important;\r\n\t\t\t\r\n\t\t}\r\n\t}\r\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"root": "SocialButton_root_3JT",
		"largeIcon": "SocialButton_largeIcon_2lw",
		"disabled": "SocialButton_disabled_3SD",
		"facebook": "SocialButton_facebook_1jX",
		"twitter": "SocialButton_twitter_3Wh",
		"google": "SocialButton_google_1aR"
	};

/***/ },
/* 89 */
/*!*******************************************************!*\
  !*** ./shared/components/loginSocial/LoginSocial.css ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./LoginSocial.css */ 90);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./LoginSocial.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./LoginSocial.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 90 */
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/components/loginSocial/LoginSocial.css ***!
  \**********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".LoginSocial_root_3xN{\r\n\tmargin: 30px auto;\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -webkit-flex;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\tmax-width: 600px;\r\n}", "", {"version":3,"sources":["/./shared/components/loginSocial/LoginSocial.css"],"names":[],"mappings":"AAAA;CACC,kBAAkB;CAClB,qBAAc;CAAd,sBAAc;CAAd,qBAAc;CAAd,cAAc;CACd,iBAAiB;CACjB","file":"LoginSocial.css","sourcesContent":[".root{\r\n\tmargin: 30px auto;\r\n\tdisplay: flex;\r\n\tmax-width: 600px;\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"root": "LoginSocial_root_3xN"
	};

/***/ },
/* 91 */
/*!*********************************************************!*\
  !*** ./shared/components/registerForm/RegisterForm.jsx ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _RaisedButton=__webpack_require__(/*! material-ui/RaisedButton */ 52);var _RaisedButton2=_interopRequireDefault(_RaisedButton);var _TextField=__webpack_require__(/*! material-ui/TextField */ 82);var _TextField2=_interopRequireDefault(_TextField);var _validTextField=__webpack_require__(/*! ../validTextField */ 92);var _validTextField2=_interopRequireDefault(_validTextField);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var styles={input:{maxWidth:500,margin:'0 auto',display:'block'}};var RegisterForm=function(_React$Component){(0,_inherits3.default)(RegisterForm,_React$Component);function RegisterForm(){(0,_classCallCheck3.default)(this,RegisterForm);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(RegisterForm).apply(this,arguments));}(0,_createClass3.default)(RegisterForm,[{key:'render',value:function render(){return _react2.default.createElement('div',null,_react2.default.createElement(_validTextField2.default,{muiId:'register-form-username-'+this.props.uniqueId,style:styles.input,label:'Username',required:'Username is required.'}),_react2.default.createElement(_TextField2.default,{id:'register-form-pass-'+this.props.uniqueId,floatingLabelText:'Password',style:styles.input,type:'password'}),_react2.default.createElement(_TextField2.default,{id:'register-form-pass-confirm-'+this.props.uniqueId,floatingLabelText:'Confirm Password',style:styles.input,type:'password'}),_react2.default.createElement(_TextField2.default,{floatingLabelText:'Email',id:'register-form-email-'+this.props.uniqueId,style:styles.input,type:'email'}),_react2.default.createElement(_RaisedButton2.default,{secondary:true,fullWidth:true,label:'Register',className:'formButton'}));}}]);return RegisterForm;}(_react2.default.Component);RegisterForm.propTypes={uniqueId:_react2.default.PropTypes.string.isRequired};exports.default=RegisterForm;module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "RegisterForm.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 92 */
/*!*************************************************************!*\
  !*** ./shared/components/validTextField/ValidTextField.jsx ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _TextField=__webpack_require__(/*! material-ui/TextField */ 82);var _TextField2=_interopRequireDefault(_TextField);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var regex={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}; // eslint-disable-line max-len
	var ValidTextField=function(_React$Component){(0,_inherits3.default)(ValidTextField,_React$Component);(0,_createClass3.default)(ValidTextField,null,[{key:'propTypes',value:function propTypes(){return {required:_react2.default.PropTypes.boolean,email:_react2.default.PropTypes.boolean,label:_react2.default.PropTypes.string,style:_react2.default.PropTypes.object,muiId:_react2.default.PropTypes.string};}}]);function ValidTextField(){(0,_classCallCheck3.default)(this,ValidTextField);var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(ValidTextField).call(this));_this.validate=function(event){var value=event.target.value;if(_this.props.required&&value.length===0){_this.setState({error:_this.props.required});return;}else if(_this.props.email&&!regex.email.test(value)){_this.setState({error:_this.props.email});return;}_this.setState({error:''});};_this.state={error:''};return _this;}(0,_createClass3.default)(ValidTextField,[{key:'render',value:function render(){return _react2.default.createElement(_TextField2.default,{floatingLabelText:this.props.label,style:this.props.style,id:this.props.muiId,errorText:this.state.error,onChange:this.validate});}}]);return ValidTextField;}(_react2.default.Component);exports.default=ValidTextField;module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ValidTextField.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 93 */
/*!***************************************!*\
  !*** ./shared/routes/login/Login.css ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./Login.css */ 94);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./Login.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./Login.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 94 */
/*!******************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/routes/login/Login.css ***!
  \******************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".Login_root_33c{\r\n\tpadding: 0;\r\n\theight: 100%;\r\n}\r\n\r\n.Login_row_3W6{\r\n\theight: 100%;\r\n\tmargin: 0 !important\r\n}\r\n\r\n@media (min-width: 992px){\r\n\r\n\t.Login_row_3W6{\r\n\t\tdisplay: -webkit-box;\r\n\t\tdisplay: -webkit-flex;\r\n\t\tdisplay: -ms-flexbox;\r\n\t\tdisplay: flex;\r\n\t}\r\n\t}\r\n\r\n{\r\n}\r\n\r\n.formButton{\r\n\twidth: 100%;\r\n\tmax-width: 200px;\r\n\tmargin: 30px auto;\r\n\tdisplay: block !important;\r\n}\r\n\r\n.Login_link_WHV{\r\n  text-decoration: underline;\r\n  color: #d50000;\r\n  cursor: pointer\r\n}\r\n\r\n.Login_link_WHV:hover{\r\n\ttext-decoration: none;\r\n}\r\n\r\n.Login_login_1OD{\r\n\tpadding: 20px 50px !important;\r\n}\r\n\r\n.Login_dialogTitle_3du{\r\n  font-size: 2.5em !important;\r\n  color: white !important;\r\n  background-color: #d50000;\r\n}\r\n\r\n.Login_register_BN6{\r\n\tpadding: 20px 50px !important;\r\n\tbackground: rgb(255, 242, 204)\r\n}\r\n\r\n@media (min-width: 992px) {\r\n\r\n\t.Login_register_BN6{\r\n\t\tborder-right: 1px solid rgba(0,0,0,.2);\r\n\t}\r\n\t}\r\n\r\n@media (max-width: 991px){\r\n\r\n\t.Login_register_BN6{\r\n\t\tborder-top: 1px solid rgba(0,0,0,.2);\r\n\t}\r\n\t}\r\n", "", {"version":3,"sources":["/./shared/routes/login/Login.css"],"names":[],"mappings":"AAOA;CACC,WAAW;CACX,aAAa;CACb;;AAED;CACC,aAAa;CACb,oBAAqB;CAKrB;;AAHA;;CAAA;EACC,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd;EAAA;;AAGF;CAOC;;AANC;CACA,YAAY;CACV,iBAAiB;CACjB,kBAAkB;CAClB,0BAA0B;CAC3B;;AAGH;EACE,2BAA2B;EAC3B,eAAsB;EACtB,eAAgB;CAKjB;;AAHC;CACE,sBAAsB;CACvB;;AAGH;CACC,8BAA8B;CAC9B;;AAED;EACE,4BAA4B;EAC5B,wBAAwB;EACxB,0BAAiC;CAClC;;AAED;CACC,8BAA8B;CAC9B,8BAAwC;CASxC;;AAPA;;CAAA;EACE,uCAAsB;EACvB;EAAA;;AAED;;CAAA;EACC,qCAAoB;EACpB;EAAA","file":"Login.css","sourcesContent":["$md-width: 992px;\r\n$border: 1px solid rgba(0,0,0,.2);\r\n$amber: rgba(255, 160, 0, .15);\r\n\r\n@custom-media --max-md (max-width: $screen-md-max);\r\n@custom-media --min-md (min-width: $screen-md);\r\n\r\n.root{\r\n\tpadding: 0;\r\n\theight: 100%;\r\n}\r\n\r\n.row{\r\n\theight: 100%;\r\n\tmargin: 0 !important;\r\n\t\r\n\t@media (--min-md){\r\n\t\tdisplay: flex;\r\n\t}\r\n}\r\n\r\n:global{\r\n  & .formButton{\r\n\t width: 100%;\r\n    max-width: 200px;\r\n    margin: 30px auto;\r\n    display: block !important;\r\n  }\r\n}\r\n\r\n.link{\r\n  text-decoration: underline;\r\n  color: $primary1Color;\r\n  cursor: pointer;\r\n  \r\n  &:hover{\r\n    text-decoration: none;\r\n  }\r\n}\r\n\r\n.login{\r\n\tpadding: 20px 50px !important;\r\n}\r\n\r\n.dialogTitle{\r\n  font-size: 2.5em !important;\r\n  color: white !important;\r\n  background-color: $primary1Color;\r\n}\r\n\r\n.register{\r\n\tpadding: 20px 50px !important;\r\n\tbackground: color($accent2Color w(80%));\r\n\t\r\n\t@media (--min-md) {\r\n  \tborder-right: $border;\r\n\t}\r\n\t\r\n\t@media (--max-md){\r\n\t\tborder-top: $border;\r\n\t}\r\n}\r\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"root": "Login_root_33c",
		"row": "Login_row_3W6",
		"link": "Login_link_WHV",
		"login": "Login_login_1OD",
		"dialogTitle": "Login_dialogTitle_3du",
		"register": "Login_register_BN6"
	};

/***/ },
/* 95 */
/*!***************************************!*\
  !*** ./shared/routes/polls/Polls.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _Paper=__webpack_require__(/*! material-ui/Paper */ 39);var _Paper2=_interopRequireDefault(_Paper);var _pollItem=__webpack_require__(/*! ../../components/pollItem */ 72);var _pollItem2=_interopRequireDefault(_pollItem);var _Polls=__webpack_require__(/*! ./Polls.css */ 96);var _Polls2=_interopRequireDefault(_Polls);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var polls={trending:{header:'Trending'},top:{header:'Top'},new:{header:'New'},search:{header:'Search'}};var Polls=function(_React$Component){(0,_inherits3.default)(Polls,_React$Component);function Polls(){(0,_classCallCheck3.default)(this,Polls);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(Polls).apply(this,arguments));}(0,_createClass3.default)(Polls,[{key:'componentWillMount',value:function componentWillMount(){ //    if (!this.props.location.query.q) {
	//      this.context.router.push('/polls');
	//    }
	}},{key:'render',value:function render(){var tab=this.props.routes[this.props.routes.length-1].tab;var header=null;if(polls[tab]){header=_react2.default.createElement('h1',{className:_Polls2.default.header},polls[tab].header,' Polls');}return _react2.default.createElement('div',{className:_Polls2.default.root},_react2.default.createElement(_Paper2.default,{zDepth:2,className:'container center-text'},header,_react2.default.createElement('div',{className:''+_Polls2.default.content},_react2.default.createElement(_pollItem2.default,{username:'papigers',title:'Example Title dskjsad asdnasjkdnas djasnjk dasda dasdksan \\ camckans asdnas dasdnas dasdnaskja sdasjnx asx asjdn asds \\ dsns xsn cdj jnkas xsjanx',choices:[['Mushrooms',3],['Onions',1],['Olives',1],['Zucchini',1],['Pepperoni',2]]}),_react2.default.createElement(_pollItem2.default,{username:'papigers',title:'Example Title',choices:[['Mushrooms',3],['Onions',1],['Olives',1],['Zucchini',1],['Pepperoni',2]]}),_react2.default.createElement(_pollItem2.default,{username:'papigers',title:'Example Title',choices:[['Mushrooms',3],['Onions',1],['Olives',1],['Zucchini',1],['Pepperoni',2]]}))));}}]);return Polls;}(_react2.default.Component);Polls.propTypes={location:_react2.default.PropTypes.object.isRequired,routes:_react2.default.PropTypes.array.isRequired};Polls.contextTypes={router:_react2.default.PropTypes.object.isRequired};exports.default=(0,_withStyles2.default)(_Polls2.default)(Polls);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Polls.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 96 */
/*!***************************************!*\
  !*** ./shared/routes/polls/Polls.css ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./Polls.css */ 97);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./Polls.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./Polls.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 97 */
/*!******************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/routes/polls/Polls.css ***!
  \******************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, "main{\n  padding-top: 20px;\n  padding-bottom: 50px;\n  background: rgb(255, 242, 204);\n}\n\n.Polls_header_2l5{\n  padding: 20px;\n  color: #d50000;\n  font-size: 48px;\n  font-size: 3rem;\n}\n\n.Polls_content_37I{\n  width: 85%;\n  margin: 40px auto\n}\n\n.Polls_content_37I > div{\n  margin: 10px auto;\n  margin-bottom: 60px;\n}\n", "", {"version":3,"sources":["/./shared/routes/polls/Polls.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,+BAAwC;CACzC;;AAED;EACE,cAAc;EACd,eAAsB;EACtB,gBAAgB;EAAhB,gBAAgB;CACjB;;AAED;EACE,WAAW;EACX,iBAAkB;CAMnB;;AAJC;EACE,kBAAkB;EAClB,oBAAoB;CACrB","file":"Polls.css","sourcesContent":["main:local{\n  padding-top: 20px;\n  padding-bottom: 50px;\n  background: color($accent2Color w(80%));\n}\n\n.header{\n  padding: 20px;\n  color: $primary1Color;\n  font-size: 3rem;\n}\n\n.content{\n  width: 85%;\n  margin: 40px auto;\n\n  & > div{\n    margin: 10px auto;\n    margin-bottom: 60px;\n  }\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"header": "Polls_header_2l5",
		"content": "Polls_content_37I"
	};

/***/ },
/* 98 */
/*!*******************************************************!*\
  !*** ./shared/routes/polls/createPoll/CreatePoll.jsx ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _TextField=__webpack_require__(/*! material-ui/TextField */ 82);var _TextField2=_interopRequireDefault(_TextField);var _Checkbox=__webpack_require__(/*! material-ui/Checkbox */ 99);var _Checkbox2=_interopRequireDefault(_Checkbox);var _Paper=__webpack_require__(/*! material-ui/Paper */ 39);var _Paper2=_interopRequireDefault(_Paper);var _FloatingActionButton=__webpack_require__(/*! material-ui/FloatingActionButton */ 85);var _FloatingActionButton2=_interopRequireDefault(_FloatingActionButton);var _FlatButton=__webpack_require__(/*! material-ui/FlatButton */ 100);var _FlatButton2=_interopRequireDefault(_FlatButton);var _IconButton=__webpack_require__(/*! material-ui/IconButton */ 30);var _IconButton2=_interopRequireDefault(_IconButton);var _Divider=__webpack_require__(/*! material-ui/Divider */ 101);var _Divider2=_interopRequireDefault(_Divider);var _List=__webpack_require__(/*! material-ui/List */ 102);var _add=__webpack_require__(/*! material-ui/svg-icons/content/add */ 86);var _add2=_interopRequireDefault(_add);var _clear=__webpack_require__(/*! material-ui/svg-icons/content/clear */ 103);var _clear2=_interopRequireDefault(_clear);var _CreatePoll=__webpack_require__(/*! ./CreatePoll.css */ 104);var _CreatePoll2=_interopRequireDefault(_CreatePoll);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var CreatePoll=function(_React$Component){(0,_inherits3.default)(CreatePoll,_React$Component);function CreatePoll(){(0,_classCallCheck3.default)(this,CreatePoll);var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(CreatePoll).call(this));_this.addAnswer=function(){var _this$state=_this.state;var answers=_this$state.answers;var answer=_this$state.answer;if(answer!==''){answers.push(answer);_this.setState({answers:answers,answer:'',error:'',answerError:''});}else {_this.setState({answerError:"Answer can't be empty"});}};_this.removeAnswer=function(event,i){var answers=_this.state.answers;answers.splice(i,1);_this.setState({answers:answers});};_this.changeTitle=function(event){_this.setState({title:event.target.value,titleError:''});};_this.changeAnswer=function(event){_this.setState({answer:event.target.value,answerError:''});};_this.keyPress=function(event){if(event.which===13){_this.addAnswer();}};_this.multipleCheck=function(){_this.setState({multiple:!_this.state.multiple});};_this.submit=function(){var error='';var titleError='';if(_this.state.answers.length===0){error='Poll must have answers';}if(_this.state.title===''){titleError='Poll must have a title';}_this.setState({error:error,titleError:titleError});};_this.titleFocus=function(){_this.setState({titleFocus:true});};_this.titleBlur=function(){_this.setState({titleFocus:false});};_this.state={answers:[],title:'',answer:'',multiple:false,error:'',titleError:'',answerError:'',titleFocus:false};return _this;}(0,_createClass3.default)(CreatePoll,[{key:'render',value:function render(){var _this2=this;var _state=this.state;var answer=_state.answer;var title=_state.title;var answers=_state.answers;var multiple=_state.multiple;var error=_state.error;var titleError=_state.titleError;var answerError=_state.answerError;var titleFocus=_state.titleFocus;var answerList=answers.map(function(item,i){return _react2.default.createElement('div',null,_react2.default.createElement(_Divider2.default,null),_react2.default.createElement(_List.ListItem,{rightIconButton:_react2.default.createElement(_IconButton2.default,{touch:true,onMouseUp:function onMouseUp(){return _this2.removeAnswer(i);}},_react2.default.createElement(_clear2.default,null)),primaryText:item,key:i}),_react2.default.createElement(_Divider2.default,null));});return _react2.default.createElement('div',{className:'container'},_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{className:'center-text col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3'},_react2.default.createElement(_Paper2.default,{zDepth:2,className:_CreatePoll2.default.container},_react2.default.createElement(_TextField2.default,{value:title,id:'poll-title-input',floatingLabelText:'Poll Title',className:_CreatePoll2.default.titleField+' '+(titleFocus||title?_CreatePoll2.default.focus:''),floatingLabelStyle:{color:'black'},floatingLabelFocusStyle:{color:this.context.muiTheme.palette.accent1Color},onChange:this.changeTitle,errorText:titleError,onFocus:this.titleFocus,onBlur:this.titleBlur}),_react2.default.createElement(_List.List,{classNmae:_CreatePoll2.default.answers},answerList)),_react2.default.createElement('div',{className:_CreatePoll2.default.addDiv},_react2.default.createElement(_TextField2.default,{value:answer,id:'poll-answer-input',floatingLabelText:'Add Answer',className:_CreatePoll2.default.answerField,floatingLabelStyle:{color:'black'},floatingLabelFocusStyle:{color:this.context.muiTheme.palette.accent1Color},onChange:this.changeAnswer,onKeyDown:this.keyPress,errorText:answerError}),_react2.default.createElement(_FloatingActionButton2.default,{mini:true,secondary:true,className:_CreatePoll2.default.add,onMouseUp:this.addAnswer},_react2.default.createElement(_add2.default,null))),_react2.default.createElement(_Checkbox2.default,{label:'Enable multiple answers?',checked:multiple,onCheck:this.multipleCheck,className:_CreatePoll2.default.checkbox}),_react2.default.createElement(_FlatButton2.default,{primary:true,label:'Create Poll',onMouseUp:this.submit}),_react2.default.createElement('span',{className:_CreatePoll2.default.error},error))));}}]);return CreatePoll;}(_react2.default.Component);CreatePoll.contextTypes={muiTheme:_react2.default.PropTypes.object.isRequired};exports.default=(0,_withStyles2.default)(_CreatePoll2.default)(CreatePoll);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CreatePoll.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 99 */
/*!***************************************!*\
  !*** external "material-ui/Checkbox" ***!
  \***************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/Checkbox");

/***/ },
/* 100 */
/*!*****************************************!*\
  !*** external "material-ui/FlatButton" ***!
  \*****************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/FlatButton");

/***/ },
/* 101 */
/*!**************************************!*\
  !*** external "material-ui/Divider" ***!
  \**************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/Divider");

/***/ },
/* 102 */
/*!***********************************!*\
  !*** external "material-ui/List" ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/List");

/***/ },
/* 103 */
/*!******************************************************!*\
  !*** external "material-ui/svg-icons/content/clear" ***!
  \******************************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/svg-icons/content/clear");

/***/ },
/* 104 */
/*!*******************************************************!*\
  !*** ./shared/routes/polls/createPoll/CreatePoll.css ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../../~/postcss-loader!./CreatePoll.css */ 105);
	    var insertCss = __webpack_require__(/*! ./../../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js!./CreatePoll.css", function() {
	        content = require("!!./../../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../../node_modules/postcss-loader/index.js!./CreatePoll.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 105 */
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/routes/polls/createPoll/CreatePoll.css ***!
  \**********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".CreatePoll_titleField_1cr{\n  width: 65% !important;\n  font-size: 22.4px !important;\n  font-size: 1.4rem !important\n\n}\n\n.CreatePoll_titleField_1cr input{\n  text-align: center\n\n}\n\n.CreatePoll_titleField_1cr label{\n  left: 50%;\n  -webkit-transform: translate(-50%) !important;\n      -ms-transform: translate(-50%) !important;\n       -o-transform: translate(-50%) !important;\n          transform: translate(-50%) !important\n\n}\n\n.CreatePoll_titleField_1cr.CreatePoll_focus_3L7{\n}\n\n.CreatePoll_titleField_1cr.CreatePoll_focus_3L7 label{\n  -webkit-transform: perspective(1px) scale(0.75) translate3d(0px, -28px, 0px) translate(-50%) !important;\n          transform: perspective(1px) scale(0.75) translate3d(0px, -28px, 0px) translate(-50%) !important\n\n}\n\n.CreatePoll_addDiv_3Ep{\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0 auto;\n  margin-bottom: 25px;\n}\n.CreatePoll_add_1el{\n  position: relative;\n  left: 10px;\n  bottom: -10px;\n}\n\n.CreatePoll_answerField_1kT{\n  //position: absolute !important;\n}\n\n.CreatePoll_container_2vJ{\n  width: 70% !important;\n  margin: 0 auto;\n}\n\n.CreatePoll_answers_1s3{\n  width: 55% !important;\n  margin: 0 auto;\n  text-align: left;\n}\n\n.CreatePoll_checkbox_3D3{\n  width: 45% !important;\n  margin: 15px auto;\n  text-align: left;\n}\n\n.CreatePoll_error_B_D{\n  color: #ffa000;\n  font-size: .85em;\n  display: block;\n}\n", "", {"version":3,"sources":["/./shared/routes/polls/createPoll/CreatePoll.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,6BAA6B;EAA7B,4BAA6B;;CAW9B;;AATC;EACE,kBAAmB;;CACpB;;AAED;EACE,UAAU;EACV,8CAAsC;MAAtC,0CAAsC;OAAtC,yCAAsC;UAAtC,qCAAsC;;CACvC;;AAIH;CAIC;;AAHC;EACE,wGAAgG;UAAhG,+FAAgG;;CACjG;;AAGH;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,yBAAwB;EAAxB,gCAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,0BAAoB;EAApB,4BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,cAAc;CACf;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,sBAAsB;EACtB,eAAe;CAChB;;AAED;EACE,sBAAsB;EACtB,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;CAClB;;AAED;EACE,eAAqB;EACrB,iBAAiB;EACjB,eAAe;CAChB","file":"CreatePoll.css","sourcesContent":[".titleField{\n  width: 65% !important;\n  font-size: 1.4rem !important;\n\n  & input{\n    text-align: center;\n  }\n\n  & label{\n    left: 50%;\n    transform: translate(-50%) !important;\n  }\n\n}\n\n.titleField.focus{\n  & label{\n    transform: perspective(1px) scale(0.75) translate3d(0px, -28px, 0px) translate(-50%) !important;\n  }\n}\n\n.addDiv{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  margin-bottom: 25px;\n}\n.add{\n  position: relative;\n  left: 10px;\n  bottom: -10px;\n}\n\n.answerField{\n  //position: absolute !important;\n}\n\n.container{\n  width: 70% !important;\n  margin: 0 auto;\n}\n\n.answers{\n  width: 55% !important;\n  margin: 0 auto;\n  text-align: left;\n}\n\n.checkbox{\n  width: 45% !important;\n  margin: 15px auto;\n  text-align: left;\n}\n\n.error{\n  color: $accent1Color;\n  font-size: .85em;\n  display: block;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"titleField": "CreatePoll_titleField_1cr",
		"focus": "CreatePoll_focus_3L7",
		"addDiv": "CreatePoll_addDiv_3Ep",
		"add": "CreatePoll_add_1el",
		"answerField": "CreatePoll_answerField_1kT",
		"container": "CreatePoll_container_2vJ",
		"answers": "CreatePoll_answers_1s3",
		"checkbox": "CreatePoll_checkbox_3D3",
		"error": "CreatePoll_error_B_D"
	};

/***/ },
/* 106 */
/*!*******************************************!*\
  !*** ./shared/routes/chart/ChartPage.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _promise=__webpack_require__(/*! babel-runtime/core-js/promise */ 107);var _promise2=_interopRequireDefault(_promise);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _RefreshIndicator=__webpack_require__(/*! material-ui/RefreshIndicator */ 108);var _RefreshIndicator2=_interopRequireDefault(_RefreshIndicator);var _voteArea=__webpack_require__(/*! ../../components/voteArea */ 109);var _voteArea2=_interopRequireDefault(_voteArea);var _ChartPage=__webpack_require__(/*! ./ChartPage.css */ 114);var _ChartPage2=_interopRequireDefault(_ChartPage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var googleLoader=void 0;function GoogleChartsLoader(){var _this=this; /* eslint-disable no-undef */var script=__webpack_require__(/*! scriptjs */ 116); // eslint-disable-line global-require
	this.loading=false;this.loaded=false;var self=this;this.load=function(){if(_this.loading){return _this.promise;}_this.loading=true;_this.promise=new _promise2.default(function(resolve){script('https://www.gstatic.com/charts/loader.js',function(){google.charts.load('current',{packages:['corechart']});google.charts.setOnLoadCallback(function(){self.loaded=true;resolve();});});});return _this.promise;}; /* eslint-enable no-undef */}function getGoogleChartsLoader(){if(!googleLoader){googleLoader=new GoogleChartsLoader();}return googleLoader;}var ChartPage=function(_React$Component){(0,_inherits3.default)(ChartPage,_React$Component);function ChartPage(props){(0,_classCallCheck3.default)(this,ChartPage);var _this2=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(ChartPage).call(this));_this2.onSubmitVote=function(){};var title=props.title;var choices=props.choices;var multi=props.multi;_this2.state={title:title,choices:choices,multi:multi};return _this2;}(0,_createClass3.default)(ChartPage,[{key:'componentDidMount',value:function componentDidMount(){ // if ((typeof google === 'undefined') || (typeof google.visualization === 'undefined'))
	this.loadGoogleCharts=getGoogleChartsLoader();var self=this;if(!this.loadGoogleCharts.loaded){this.loadGoogleCharts.load().then(function(){self.drawChart();});}else {self.drawChart();}}},{key:'componentDidUpdate',value:function componentDidUpdate(){if(this.loadGoogleCharts.loaded){this.drawChart();}}},{key:'drawChart',value:function drawChart(){var data=new google.visualization.DataTable(); // eslint-disable-line no-undef
	data.addColumn('string','Topping');data.addColumn('number','Votes');data.addRows(this.props.choices);var col=document.getElementById('chart-col');var width=col.clientWidth*0.9; // Set chart options
	var options={is3D:true,legend:{position:'top',alignment:'center',maxLines:2,textStyle:{fontSize:16}},titlePosition:'none',width:width,height:width}; // Instantiate and draw our chart, passing in some options.
	var chart=new google.visualization.PieChart( // eslint-disable-line no-undef
	document.getElementById('chart-div'));chart.draw(data,options);}},{key:'render',value:function render(){return _react2.default.createElement('div',{className:'container ChartPage'},_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{id:'chart-col',className:'col-xs-12 col-md-7'},_react2.default.createElement('div',{id:'chart-div'},_react2.default.createElement('div',{style:{display:'flex',flex:'1',alignItems:'center',justifyContent:'center'}},_react2.default.createElement('div',{style:{position:'relative',alignSelf:'center'}},_react2.default.createElement(_RefreshIndicator2.default,{size:90,left:-50,top:150,status:'loading'}))))),_react2.default.createElement('div',{className:'col-xs-12 col-md-5'},_react2.default.createElement(_voteArea2.default,{choices:this.props.choices,multi:this.props.multi,title:this.props.title,onSubmit:this.onSubmitVote}))));}}]);return ChartPage;}(_react2.default.Component);ChartPage.defaultProps={title:'Example Title',choices:[['Mushrooms',3],['Onions',1],['Olives',1],['Zucchini',1],['Pepperoni',2]],multi:false};ChartPage.propTypes={title:_react2.default.PropTypes.string.isRequired,choices:_react2.default.PropTypes.array.isRequired,multi:_react2.default.PropTypes.bool};exports.default=(0,_withStyles2.default)(_ChartPage2.default)(ChartPage);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ChartPage.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 107 */
/*!************************************************!*\
  !*** external "babel-runtime/core-js/promise" ***!
  \************************************************/
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 108 */
/*!***********************************************!*\
  !*** external "material-ui/RefreshIndicator" ***!
  \***********************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/RefreshIndicator");

/***/ },
/* 109 */
/*!*************************************************!*\
  !*** ./shared/components/voteArea/VoteArea.jsx ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _List=__webpack_require__(/*! material-ui/List */ 102);var _Divider=__webpack_require__(/*! material-ui/Divider */ 101);var _Divider2=_interopRequireDefault(_Divider);var _Checkbox=__webpack_require__(/*! material-ui/Checkbox */ 99);var _Checkbox2=_interopRequireDefault(_Checkbox);var _radioButtonChecked=__webpack_require__(/*! material-ui/svg-icons/toggle/radio-button-checked */ 110);var _radioButtonChecked2=_interopRequireDefault(_radioButtonChecked);var _radioButtonUnchecked=__webpack_require__(/*! material-ui/svg-icons/toggle/radio-button-unchecked */ 111);var _radioButtonUnchecked2=_interopRequireDefault(_radioButtonUnchecked);var _RaisedButton=__webpack_require__(/*! material-ui/RaisedButton */ 52);var _RaisedButton2=_interopRequireDefault(_RaisedButton);var _VoteArea=__webpack_require__(/*! ./VoteArea.css */ 112);var _VoteArea2=_interopRequireDefault(_VoteArea);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var VoteArea=function(_React$Component){(0,_inherits3.default)(VoteArea,_React$Component);function VoteArea(props){var _arguments=arguments;(0,_classCallCheck3.default)(this,VoteArea);var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(VoteArea).call(this));_this.onChangeRadio=function(val){var valNum=+val;if(_this.state.selected!==valNum){_this.setState({selected:valNum});}};_this.onChangeCheckbox=function(val){var valNum=+val;var selected=_this.state.selected;selected[valNum]=!selected[valNum];_this.setState({selected:selected});};_this.checkSubmit=function(){var _this$props;if(_this.state.multi){var numSelected=_this.state.selected.reduce(function(counter,value){return value?counter+1:counter;});if(numSelected===0){_this.setState({error:'You have to choose an option.'});return;}}_this.setState({error:''});(_this$props=_this.props).onSubmit.apply(_this$props,_arguments);};var choices=props.choices;var multi=props.multi;_this.state={choices:choices,selected:multi?choices.map(function(o,i){return i===0;}):0,multi:multi,error:''};return _this;}(0,_createClass3.default)(VoteArea,[{key:'render',value:function render(){var _this2=this;var options=this.state.choices.map(function(choice,i){var checkbox=void 0;if(_this2.state.multi){checkbox=_react2.default.createElement(_Checkbox2.default,{label:choice[0],key:i,value:''+i,checked:function checked(){return _this2.state.selected[i];},onCheckFunc:function onCheckFunc(){return _this2.onChangeCheckbox(i);}});}else {checkbox=_react2.default.createElement(_Checkbox2.default,{label:choice[0],key:i,value:''+i,checked:_this2.state.selected===i,onCheckFunc:function onCheckFunc(){return _this2.onChangeRadio(i);},checkedIcon:_react2.default.createElement(_radioButtonChecked2.default,null),uncheckedIcon:_react2.default.createElement(_radioButtonUnchecked2.default,null)});}return _react2.default.createElement('div',{key:i,className:_VoteArea2.default.listItem},i!==0?_react2.default.createElement(_Divider2.default,{key:'divider\''+i}):'',_react2.default.createElement(_List.ListItem,{key:'item'+i,onTouchTap:checkbox.props.onCheckFunc},checkbox));});return _react2.default.createElement('div',null,_react2.default.createElement('h1',null,'Vote:'),_react2.default.createElement('h2',null,this.props.title),_react2.default.createElement(_List.List,null,options),_react2.default.createElement(_RaisedButton2.default,{label:'submit',secondary:true,className:_VoteArea2.default.submitBtn,onMouseUp:this.checkSubmit}),_react2.default.createElement('p',{className:_VoteArea2.default.error},this.state.error));}}]);return VoteArea;}(_react2.default.Component);VoteArea.propTypes={title:_react2.default.PropTypes.string.isRequired,onSubmit:_react2.default.PropTypes.func.isRequired};exports.default=(0,_withStyles2.default)(_VoteArea2.default)(VoteArea);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "VoteArea.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 110 */
/*!********************************************************************!*\
  !*** external "material-ui/svg-icons/toggle/radio-button-checked" ***!
  \********************************************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/svg-icons/toggle/radio-button-checked");

/***/ },
/* 111 */
/*!**********************************************************************!*\
  !*** external "material-ui/svg-icons/toggle/radio-button-unchecked" ***!
  \**********************************************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/svg-icons/toggle/radio-button-unchecked");

/***/ },
/* 112 */
/*!*************************************************!*\
  !*** ./shared/components/voteArea/VoteArea.css ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./VoteArea.css */ 113);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./VoteArea.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./VoteArea.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 113 */
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/components/voteArea/VoteArea.css ***!
  \****************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".VoteArea_submitBtn_30B{\r\n\tmargin: 20px auto !important;\r\n\tmargin-bottom: 10px !important;\r\n\twidth: 50% !important;\r\n\tposition: relative;\r\n\tleft: 50%;\r\n\t-webkit-transform: translate(-50%);\r\n\t    -ms-transform: translate(-50%);\r\n\t     -o-transform: translate(-50%);\r\n\t        transform: translate(-50%);\r\n}\r\n\r\n.VoteArea_error_1IE{\r\n\ttext-align: center;\r\n\tcolor: #d50000;\r\n}\r\n\r\n.VoteArea_listItem_2SX{\r\n\tmax-width: 450px;\r\n}", "", {"version":3,"sources":["/./shared/components/voteArea/VoteArea.css"],"names":[],"mappings":"AAAA;CACC,6BAA6B;CAC7B,+BAA+B;CAC/B,sBAAsB;CACtB,mBAAmB;CACnB,UAAU;CACV,mCAA2B;KAA3B,+BAA2B;MAA3B,8BAA2B;SAA3B,2BAA2B;CAC3B;;AAED;CACC,mBAAmB;CACnB,eAAe;CACf;;AAED;CACC,iBAAiB;CACjB","file":"VoteArea.css","sourcesContent":[".submitBtn{\r\n\tmargin: 20px auto !important;\r\n\tmargin-bottom: 10px !important;\r\n\twidth: 50% !important;\r\n\tposition: relative;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%);\r\n}\r\n\r\n.error{\r\n\ttext-align: center;\r\n\tcolor: #d50000;\r\n}\r\n\r\n.listItem{\r\n\tmax-width: 450px;\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"submitBtn": "VoteArea_submitBtn_30B",
		"error": "VoteArea_error_1IE",
		"listItem": "VoteArea_listItem_2SX"
	};

/***/ },
/* 114 */
/*!*******************************************!*\
  !*** ./shared/routes/chart/ChartPage.css ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./ChartPage.css */ 115);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./ChartPage.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./ChartPage.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 115 */
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/routes/chart/ChartPage.css ***!
  \**********************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, "\r\n#ChartPage_chart-div_vAz{\r\n\tmargin-top: -20px;\r\n\tmargin-bottom: -40px;\r\n\tmin-height: 350px;\r\n\r\n\tdiv[dir=\"ltr\"]{\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\trect{\r\n\t\tfill: transparent;\r\n\t}\r\n}", "", {"version":3,"sources":["/./shared/routes/chart/ChartPage.css"],"names":[],"mappings":";AACA;CACC,kBAAkB;CAClB,qBAAqB;CACrB,kBAAkB;;CAElB;EACC,eAAe;EACf;;CAED;EACC,kBAAkB;EAClB;CACD","file":"ChartPage.css","sourcesContent":["\r\n#chart-div{\r\n\tmargin-top: -20px;\r\n\tmargin-bottom: -40px;\r\n\tmin-height: 350px;\r\n\r\n\tdiv[dir=\"ltr\"]{\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\trect{\r\n\t\tfill: transparent;\r\n\t}\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"chart-div": "ChartPage_chart-div_vAz"
	};

/***/ },
/* 116 */
/*!***************************!*\
  !*** external "scriptjs" ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = require("scriptjs");

/***/ },
/* 117 */
/*!*************************************!*\
  !*** ./shared/routes/user/User.jsx ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _List=__webpack_require__(/*! material-ui/List */ 102);var _Tabs=__webpack_require__(/*! material-ui/Tabs */ 63);var _Paper=__webpack_require__(/*! material-ui/Paper */ 39);var _Paper2=_interopRequireDefault(_Paper);var _userIntro=__webpack_require__(/*! ../../components/userIntro */ 118);var _userIntro2=_interopRequireDefault(_userIntro);var _userStats=__webpack_require__(/*! ../../components/userStats */ 125);var _userStats2=_interopRequireDefault(_userStats);var _userContact=__webpack_require__(/*! ../../components/userContact */ 128);var _userContact2=_interopRequireDefault(_userContact);var _userPassword=__webpack_require__(/*! ../../components/userPassword */ 131);var _userPassword2=_interopRequireDefault(_userPassword);var _User=__webpack_require__(/*! ./User.css */ 134);var _User2=_interopRequireDefault(_User);var _scrollspy=__webpack_require__(/*! ../../utils/scrollspy */ 136);var _scrollspy2=_interopRequireDefault(_scrollspy);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var menu=[{label:'Intro',id:'user-intro'},{label:'Stats',id:'user-stats'},{label:'Contact Info',id:'user-contact'},{label:'Password',id:'user-password'}];var User=function(_React$Component){(0,_inherits3.default)(User,_React$Component);function User(){var _Object$getPrototypeO;var _temp,_this,_ret;(0,_classCallCheck3.default)(this,User);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=(0,_possibleConstructorReturn3.default)(this,(_Object$getPrototypeO=(0,_getPrototypeOf2.default)(User)).call.apply(_Object$getPrototypeO,[this].concat(args))),_this),_this.setScrollspyRef=function(ref){_this.scrollSpy.push(ref);},_this.scrollTo=function(elId){_this.sweetScroll.to('#'+elId);},_temp),(0,_possibleConstructorReturn3.default)(_this,_ret);}(0,_createClass3.default)(User,[{key:'componentWillMount',value:function componentWillMount(){this.scrollSpy=[];}},{key:'componentDidMount',value:function componentDidMount(){var SweetScroll=__webpack_require__(/*! sweet-scroll */ 137); // eslint-disable-line global-require
	this.sweetScroll=new SweetScroll({offset:-85});}},{key:'render',value:function render(){var _this2=this;return _react2.default.createElement('div',null,_react2.default.createElement('div',{className:'hide-sm-up '+_User2.default.fixedTabs},_react2.default.createElement(_Paper2.default,{zDepth:2},_react2.default.createElement(_Tabs.Tabs,{className:_User2.default.tabs,value:this.props.scrollspy,onChange:function onChange(val){return _this2.scrollTo(menu[val].id);}},menu.map(function(item,i){return _react2.default.createElement(_Tabs.Tab,{label:item.label,key:i,value:i});})))),_react2.default.createElement('div',{className:'container'},_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{className:"hide-sm-down col-sm-3"},_react2.default.createElement(_Paper2.default,{zDepth:2,className:_User2.default.sidemenu+' '+_User2.default.fixedMenu},_react2.default.createElement(_List.List,{className:_User2.default.menuItems},menu.map(function(item,i){return _react2.default.createElement(_List.ListItem,{primaryText:item.label,className:_this2.props.scrollspy===i?_User2.default.activeMenuItem:'',onTouchTap:function onTouchTap(){return _this2.scrollTo(item.id);},key:i});})))),_react2.default.createElement('div',{className:'col-xs-12 col-sm-9'},_react2.default.createElement('div',{ref:this.setScrollspyRef,id:'user-intro'},_react2.default.createElement(_userIntro2.default,null)),_react2.default.createElement('div',{ref:this.setScrollspyRef,id:'user-stats'},_react2.default.createElement(_userStats2.default,null)),_react2.default.createElement('div',{ref:this.setScrollspyRef,id:'user-contact'},_react2.default.createElement(_userContact2.default,null)),_react2.default.createElement('div',{ref:this.setScrollspyRef,id:'user-password'},_react2.default.createElement(_userPassword2.default,null))))));}}]);return User;}(_react2.default.Component);User.propTypes={scrollspy:_react2.default.PropTypes.number.isRequired};exports.default=(0,_withStyles2.default)(_User2.default)((0,_scrollspy2.default)(User));module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "User.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 118 */
/*!***************************************************!*\
  !*** ./shared/components/userIntro/UserIntro.jsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _List=__webpack_require__(/*! material-ui/List */ 102);var _Subheader=__webpack_require__(/*! material-ui/Subheader */ 119);var _Subheader2=_interopRequireDefault(_Subheader);var _Paper=__webpack_require__(/*! material-ui/Paper */ 39);var _Paper2=_interopRequireDefault(_Paper);var _IconButton=__webpack_require__(/*! material-ui/IconButton */ 30);var _IconButton2=_interopRequireDefault(_IconButton);var _Avatar=__webpack_require__(/*! material-ui/Avatar */ 120);var _Avatar2=_interopRequireDefault(_Avatar);var _edit=__webpack_require__(/*! material-ui/svg-icons/image/edit */ 121);var _edit2=_interopRequireDefault(_edit);var _person=__webpack_require__(/*! material-ui/svg-icons/social/person */ 122);var _person2=_interopRequireDefault(_person);var _UserIntro=__webpack_require__(/*! ./UserIntro.css */ 123);var _UserIntro2=_interopRequireDefault(_UserIntro);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var UserIntro=function(_React$Component){(0,_inherits3.default)(UserIntro,_React$Component);function UserIntro(){(0,_classCallCheck3.default)(this,UserIntro);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(UserIntro).apply(this,arguments));}(0,_createClass3.default)(UserIntro,[{key:'render',value:function render(){return _react2.default.createElement('div',null,_react2.default.createElement('h2',{className:'categoryHeader'},'Intro'),_react2.default.createElement(_Paper2.default,{zDepth:2,className:_UserIntro2.default.introRow+' category'},_react2.default.createElement('div',{className:_UserIntro2.default.avatarContainer},_react2.default.createElement(_Avatar2.default,{icon:_react2.default.createElement(_person2.default,null),size:70,backgroundColor:'black',className:_UserIntro2.default.avatar}),_react2.default.createElement(_IconButton2.default,{className:_UserIntro2.default.editAvatar},_react2.default.createElement(_edit2.default,null))),_react2.default.createElement('div',{className:_UserIntro2.default.username},_react2.default.createElement(_List.ListItem,{className:'item',disabled:true},_react2.default.createElement('h2',null,'Username'))),_react2.default.createElement('div',{className:_UserIntro2.default.fullRow},_react2.default.createElement(_Subheader2.default,{className:'subheader'},'Name:'),_react2.default.createElement(_List.ListItem,{className:'item',disabled:true},'Gershon Papi',_react2.default.createElement(_IconButton2.default,{className:_UserIntro2.default.editIcon},_react2.default.createElement(_edit2.default,null)))),_react2.default.createElement('div',{className:_UserIntro2.default.fullRow},_react2.default.createElement(_Subheader2.default,{className:'subheader'},'Age:'),_react2.default.createElement(_List.ListItem,{className:'item',disabled:true},'23',_react2.default.createElement(_IconButton2.default,{className:_UserIntro2.default.editIcon},_react2.default.createElement(_edit2.default,null)))),_react2.default.createElement('div',{className:_UserIntro2.default.fullRow},_react2.default.createElement(_Subheader2.default,{className:'subheader'},'Bio:'),_react2.default.createElement(_List.ListItem,{className:'item',disabled:true},'Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio. Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio Bio.',_react2.default.createElement(_IconButton2.default,{className:_UserIntro2.default.editBio},_react2.default.createElement(_edit2.default,null))))));}}]);return UserIntro;}(_react2.default.Component);exports.default=(0,_withStyles2.default)(_UserIntro2.default)(UserIntro);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "UserIntro.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 119 */
/*!****************************************!*\
  !*** external "material-ui/Subheader" ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/Subheader");

/***/ },
/* 120 */
/*!*************************************!*\
  !*** external "material-ui/Avatar" ***!
  \*************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/Avatar");

/***/ },
/* 121 */
/*!***************************************************!*\
  !*** external "material-ui/svg-icons/image/edit" ***!
  \***************************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/svg-icons/image/edit");

/***/ },
/* 122 */
/*!******************************************************!*\
  !*** external "material-ui/svg-icons/social/person" ***!
  \******************************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/svg-icons/social/person");

/***/ },
/* 123 */
/*!***************************************************!*\
  !*** ./shared/components/userIntro/UserIntro.css ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./UserIntro.css */ 124);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./UserIntro.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./UserIntro.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 124 */
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/components/userIntro/UserIntro.css ***!
  \******************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".UserIntro_editIcon_335{\r\n  position: absolute !important;\r\n  top: -3px;\r\n}\r\n\r\n.UserIntro_editBio_2Fb{\r\n  position: absolute !important;\r\n  right: -2px;\r\n  bottom: 5px;\r\n}\r\n\r\n.UserIntro_avatarContainer_2ox{\r\n  position: relative;\r\n}\r\n\r\n.UserIntro_avatar_2GM{\r\n  margin: 20px;\r\n  -webkit-flex-shrink: 0;\r\n      -ms-flex-negative: 0;\r\n          flex-shrink: 0;\r\n  position: relative;\r\n  background-color: #ffa000 !important;\r\n}\r\n\r\n.UserIntro_editAvatar_1q9{\r\n  position: absolute !important;\r\n  left: 70px;\r\n  top: 60px;\r\n}\r\n\r\n.UserIntro_introRow_2-H{\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-flex-wrap: wrap;\r\n      -ms-flex-wrap: wrap;\r\n          flex-wrap: wrap;\r\n}\r\n\r\n.UserIntro_username_2uz{\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex-grow: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  position: relative;\r\n  top: 70px;\r\n  -webkit-transform: translate(0,-50%);\r\n      -ms-transform: translate(0,-50%);\r\n       -o-transform: translate(0,-50%);\r\n          transform: translate(0,-50%);\r\n}\r\n\r\n.UserIntro_fullRow_V1P{\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0  100%;\r\n      -ms-flex: 0 0  100%;\r\n          flex: 0 0  100%;\r\n}", "", {"version":3,"sources":["/./shared/components/userIntro/UserIntro.css"],"names":[],"mappings":"AAAA;EACE,8BAA8B;EAC9B,UAAU;CACX;;AAED;EACE,8BAA8B;EAC9B,YAAY;EACZ,YAAY;CACb;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,aAAa;EACb,uBAAe;MAAf,qBAAe;UAAf,eAAe;EACf,mBAAmB;EACnB,qCAA2C;CAC5C;;AAED;EACE,8BAA8B;EAC9B,WAAW;EACX,UAAU;CACX;;AAED;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,wBAAgB;MAAhB,oBAAgB;UAAhB,gBAAgB;CACjB;;AAED;EACE,oBAAa;EAAb,qBAAa;MAAb,qBAAa;UAAb,aAAa;EACb,mBAAmB;EACnB,UAAU;EACV,qCAA6B;MAA7B,iCAA6B;OAA7B,gCAA6B;UAA7B,6BAA6B;CAC9B;;AAED;EACE,oBAAgB;EAAhB,wBAAgB;MAAhB,oBAAgB;UAAhB,gBAAgB;CACjB","file":"UserIntro.css","sourcesContent":[".editIcon{\r\n  position: absolute !important;\r\n  top: -3px;\r\n}\r\n\r\n.editBio{\r\n  position: absolute !important;\r\n  right: -2px;\r\n  bottom: 5px;\r\n}\r\n\r\n.avatarContainer{\r\n  position: relative;\r\n}\r\n\r\n.avatar{\r\n  margin: 20px;\r\n  flex-shrink: 0;\r\n  position: relative;\r\n  background-color: $accent1Color !important;\r\n}\r\n\r\n.editAvatar{\r\n  position: absolute !important;\r\n  left: 70px;\r\n  top: 60px;\r\n}\r\n\r\n.introRow{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.username{\r\n  flex-grow: 1;\r\n  position: relative;\r\n  top: 70px;\r\n  transform: translate(0,-50%);\r\n}\r\n\r\n.fullRow{\r\n  flex: 0 0  100%;\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"editIcon": "UserIntro_editIcon_335",
		"editBio": "UserIntro_editBio_2Fb",
		"avatarContainer": "UserIntro_avatarContainer_2ox",
		"avatar": "UserIntro_avatar_2GM",
		"editAvatar": "UserIntro_editAvatar_1q9",
		"introRow": "UserIntro_introRow_2-H",
		"username": "UserIntro_username_2uz",
		"fullRow": "UserIntro_fullRow_V1P"
	};

/***/ },
/* 125 */
/*!***************************************************!*\
  !*** ./shared/components/userStats/UserStats.jsx ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _Link=__webpack_require__(/*! react-router/lib/Link */ 71);var _Link2=_interopRequireDefault(_Link);var _Paper=__webpack_require__(/*! material-ui/Paper */ 39);var _Paper2=_interopRequireDefault(_Paper);var _Subheader=__webpack_require__(/*! material-ui/Subheader */ 119);var _Subheader2=_interopRequireDefault(_Subheader);var _List=__webpack_require__(/*! material-ui/List */ 102);var _UserStats=__webpack_require__(/*! ./UserStats.css */ 126);var _UserStats2=_interopRequireDefault(_UserStats);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var UserStats=function(_React$Component){(0,_inherits3.default)(UserStats,_React$Component);function UserStats(){(0,_classCallCheck3.default)(this,UserStats);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(UserStats).apply(this,arguments));}(0,_createClass3.default)(UserStats,[{key:'render',value:function render(){return _react2.default.createElement('div',null,_react2.default.createElement('h2',{className:'categoryHeader'},'Stats'),_react2.default.createElement(_Paper2.default,{zDepth:2,className:'category'},_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{className:'col-xs-6 col-md-3'},_react2.default.createElement(_Subheader2.default,{className:'subheader'},'Polls:'),_react2.default.createElement(_List.ListItem,{className:'item',disabled:true},_react2.default.createElement('span',{className:_UserStats2.default.stat},'5'))),_react2.default.createElement('div',{className:'col-xs-6 col-md-3'},_react2.default.createElement(_Subheader2.default,{className:'subheader'},'Votes:'),_react2.default.createElement(_List.ListItem,{className:_UserStats2.default.item,disabled:true},_react2.default.createElement('span',{className:_UserStats2.default.stat},'23'))),_react2.default.createElement('div',{className:'col-xs-6 col-md-3'},_react2.default.createElement(_Subheader2.default,{className:'subheader'},'Votes Recieved:'),_react2.default.createElement(_List.ListItem,{className:'item',disabled:true},_react2.default.createElement('span',{className:_UserStats2.default.stat},'23'))),_react2.default.createElement('div',{className:'col-xs-6 col-md-3'},_react2.default.createElement(_Subheader2.default,{className:'subheader'},'Most Voted Poll:'),_react2.default.createElement(_List.ListItem,{className:'item',disabled:true},_react2.default.createElement(_Link2.default,{className:_UserStats2.default.stat,to:'/polls/poll/1'},'Example Poll Title'))))));}}]);return UserStats;}(_react2.default.Component);exports.default=(0,_withStyles2.default)(_UserStats2.default)(UserStats);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "UserStats.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 126 */
/*!***************************************************!*\
  !*** ./shared/components/userStats/UserStats.css ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./UserStats.css */ 127);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./UserStats.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./UserStats.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 127 */
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/components/userStats/UserStats.css ***!
  \******************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".UserStats_stat_2Q0{\r\n  margin-left: 10px;\r\n  font-weight: 600;\r\n}", "", {"version":3,"sources":["/./shared/components/userStats/UserStats.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,iBAAiB;CAClB","file":"UserStats.css","sourcesContent":[".stat{\r\n  margin-left: 10px;\r\n  font-weight: 600;\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"stat": "UserStats_stat_2Q0"
	};

/***/ },
/* 128 */
/*!*******************************************************!*\
  !*** ./shared/components/userContact/UserContact.jsx ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _Paper=__webpack_require__(/*! material-ui/Paper */ 39);var _Paper2=_interopRequireDefault(_Paper);var _List=__webpack_require__(/*! material-ui/List */ 102);var _Subheader=__webpack_require__(/*! material-ui/Subheader */ 119);var _Subheader2=_interopRequireDefault(_Subheader);var _Checkbox=__webpack_require__(/*! material-ui/Checkbox */ 99);var _Checkbox2=_interopRequireDefault(_Checkbox);var _socialButton=__webpack_require__(/*! ../../components/socialButton */ 84);var _socialButton2=_interopRequireDefault(_socialButton);var _UserContact=__webpack_require__(/*! ./UserContact.css */ 129);var _UserContact2=_interopRequireDefault(_UserContact);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var UserContact=function(_React$Component){(0,_inherits3.default)(UserContact,_React$Component);function UserContact(){(0,_classCallCheck3.default)(this,UserContact);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(UserContact).apply(this,arguments));}(0,_createClass3.default)(UserContact,[{key:'render',value:function render(){return _react2.default.createElement('div',null,_react2.default.createElement('h2',{className:'categoryHeader'},'Contact Info'),_react2.default.createElement(_Paper2.default,{zDepth:2,className:'category'},_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{className:'col-xs-4'},_react2.default.createElement(_Subheader2.default,{className:'subheader'},'Email:'),_react2.default.createElement(_List.ListItem,{className:'item',disabled:true},_react2.default.createElement(_socialButton2.default,{className:_UserContact2.default.social,type:'envelope'})),_react2.default.createElement(_Checkbox2.default,{defaultChecked:true,label:'private',className:_UserContact2.default.privateCheckbox})),_react2.default.createElement('div',{className:'col-xs-4'},_react2.default.createElement(_Subheader2.default,{className:'subheader'},'Facebook:'),_react2.default.createElement(_List.ListItem,{className:'item',disabled:true},_react2.default.createElement(_socialButton2.default,{className:_UserContact2.default.social,type:'facebook'})),_react2.default.createElement(_Checkbox2.default,{defaultChecked:true,label:'private',className:_UserContact2.default.privateCheckbox})),_react2.default.createElement('div',{className:'col-xs-4'},_react2.default.createElement(_Subheader2.default,{className:'subheader'},'Twitter:'),_react2.default.createElement(_List.ListItem,{className:'item',disabled:true},_react2.default.createElement(_socialButton2.default,{className:_UserContact2.default.social,type:'add'})),_react2.default.createElement(_Checkbox2.default,{defaultChecked:true,label:'private',className:_UserContact2.default.privateCheckbox})))));}}]);return UserContact;}(_react2.default.Component);exports.default=(0,_withStyles2.default)(_UserContact2.default)(UserContact);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "UserContact.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 129 */
/*!*******************************************************!*\
  !*** ./shared/components/userContact/UserContact.css ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./UserContact.css */ 130);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./UserContact.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./UserContact.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 130 */
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/components/userContact/UserContact.css ***!
  \**********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, "\r\n.UserContact_privateCheckbox_3ff{\r\n  margin-left: 10px;\r\n}\r\n\r\n.UserContact_social_wAO{\r\n  width: 100% !important;\r\n  margin-left: 10px;\r\n}", "", {"version":3,"sources":["/./shared/components/userContact/UserContact.css"],"names":[],"mappings":";AACA;EACE,kBAAkB;CACnB;;AAED;EACE,uBAAuB;EACvB,kBAAkB;CACnB","file":"UserContact.css","sourcesContent":["\r\n.privateCheckbox{\r\n  margin-left: 10px;\r\n}\r\n\r\n.social{\r\n  width: 100% !important;\r\n  margin-left: 10px;\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"privateCheckbox": "UserContact_privateCheckbox_3ff",
		"social": "UserContact_social_wAO"
	};

/***/ },
/* 131 */
/*!*********************************************************!*\
  !*** ./shared/components/userPassword/UserPassword.jsx ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _RaisedButton=__webpack_require__(/*! material-ui/RaisedButton */ 52);var _RaisedButton2=_interopRequireDefault(_RaisedButton);var _Paper=__webpack_require__(/*! material-ui/Paper */ 39);var _Paper2=_interopRequireDefault(_Paper);var _List=__webpack_require__(/*! material-ui/List */ 102);var _Subheader=__webpack_require__(/*! material-ui/Subheader */ 119);var _Subheader2=_interopRequireDefault(_Subheader);var _UserPassword=__webpack_require__(/*! ./UserPassword.css */ 132);var _UserPassword2=_interopRequireDefault(_UserPassword);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var UserPassword=function(_React$Component){(0,_inherits3.default)(UserPassword,_React$Component);function UserPassword(){(0,_classCallCheck3.default)(this,UserPassword);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(UserPassword).apply(this,arguments));}(0,_createClass3.default)(UserPassword,[{key:'render',value:function render(){return _react2.default.createElement('div',null,_react2.default.createElement('h2',{className:'categoryHeader'},'Change Password'),_react2.default.createElement(_Paper2.default,{zDepth:2,className:'category'},_react2.default.createElement('div',{className:'row'},_react2.default.createElement('div',{className:'col-xs-12 col-md-6'},_react2.default.createElement(_List.ListItem,{className:'item center-text',disabled:true},'Change password'),_react2.default.createElement(_RaisedButton2.default,{label:'change',secondary:true,className:_UserPassword2.default.pwdButton}),_react2.default.createElement(_Subheader2.default,{className:'subheader center-text'},'If you remember your old one')),_react2.default.createElement('div',{className:'col-xs-12 col-md-6'},_react2.default.createElement(_List.ListItem,{className:'item center-text',disabled:true},'Reset password'),_react2.default.createElement(_RaisedButton2.default,{label:'reset',secondary:true,className:_UserPassword2.default.pwdButton}),_react2.default.createElement(_Subheader2.default,{className:'subheader center-text'},'We will send you a new one to your email')))));}}]);return UserPassword;}(_react2.default.Component);exports.default=(0,_withStyles2.default)(_UserPassword2.default)(UserPassword);module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "UserPassword.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 132 */
/*!*********************************************************!*\
  !*** ./shared/components/userPassword/UserPassword.css ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./UserPassword.css */ 133);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./UserPassword.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./UserPassword.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 133 */
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/components/userPassword/UserPassword.css ***!
  \************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, ".UserPassword_pwdButton_2EO{\r\n  width: 200px;\r\n  display: block !important;\r\n  margin: 0 auto;\r\n  margin-bottom: 10px;\r\n}", "", {"version":3,"sources":["/./shared/components/userPassword/UserPassword.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,0BAA0B;EAC1B,eAAe;EACf,oBAAoB;CACrB","file":"UserPassword.css","sourcesContent":[".pwdButton{\r\n  width: 200px;\r\n  display: block !important;\r\n  margin: 0 auto;\r\n  margin-bottom: 10px;\r\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"pwdButton": "UserPassword_pwdButton_2EO"
	};

/***/ },
/* 134 */
/*!*************************************!*\
  !*** ./shared/routes/user/User.css ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../../~/postcss-loader!./User.css */ 135);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./User.css", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../../node_modules/postcss-loader/index.js!./User.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 135 */
/*!****************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/routes/user/User.css ***!
  \****************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, "{\n}\n\nh2{\n  margin: 10px 0px;\n}\n\n.category{\n  padding: 20px 20px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n\n.subheader{\n  line-height: normal !important;\n}\n\n.categoryHeader{\n  margin: 20px 20px;\n}\n\n.categoryHeader:first-of-type{\n}\n\n@media (max-width: 991px){\n\n  .categoryHeader:first-of-type{\n    margin-top: 50px;\n  }\n}\n\n.item > div > div{\n  padding: 8px 16px !important;\n}\n\n.User_sidemenu_25r{\n  background-color: rgb(213, 0, 0) !important;\n}\n\n.User_fixedMenu_1Xe{\n  position: fixed;\n  margin-top: 10px;\n  width: 18%;\n}\n\n.User_tabs_mCI{\n  margin-bottom: 20px;\n}\n\n.User_fixedTabs_34m{\n  position: fixed;\n  z-index: 1100;\n  width: 100%;\n  margin-top: -30px\n}\n\n.User_fixedTabs_34m > div{\n  -webkit-box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23) !important;\n          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23) !important;\n}\n\n.User_menuItems_-hJ span {\n  color: white !important\n}\n\n.User_menuItems_-hJ span:hover{\n  background: rgba(255, 255, 255, 0.09) !important;\n}\n\n.User_activeMenuItem_1WQ{\n  background: #b71c1c !important;\n}\n", "", {"version":3,"sources":["/./shared/routes/user/User.css"],"names":[],"mappings":"AAAA;CA4BC;;AA3BC;EACE,iBAAiB;CAClB;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;CACrB;;AAED;EACE,+BAA+B;CAChC;;AAED;EACE,kBAAkB;CAOnB;;AALC;CAIC;;AAHC;;EAAA;IACE,iBAAiB;GAClB;CAAA;;AAIL;EACE,6BAA6B;CAC9B;;AAGH;EACE,4CAAmD;CACpD;;AAED;EACE,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;CACZ;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,gBAAgB;EAChB,cAAc;EACd,YAAY;EACZ,iBAAkB;CAKnB;;AAHC;EACE,8DAAsD;UAAtD,sDAAsD;CACvD;;AAGH;EACE,uBAAwB;CAKzB;;AAHC;EACE,iDAAiD;CAClD;;AAGH;EACE,+BAAsC;CACvC","file":"User.css","sourcesContent":[":global{\n  & h2{\n    margin: 10px 0px;\n  }\n  \n  & .category{\n    padding: 20px 20px;\n    margin-top: 50px;\n    margin-bottom: 50px;\n  }\n\n  & .subheader{\n    line-height: normal !important;\n  }\n\n  & .categoryHeader{\n    margin: 20px 20px;\n\n    &:first-of-type{\n      @media (max-width: $screen-md-max){\n        margin-top: 50px;\n      }\n    }\n  }\n  \n  & .item > div > div{\n    padding: 8px 16px !important;\n  }\n}\n\n.sidemenu{\n  background-color: color($primary1Color) !important;\n}\n\n.fixedMenu{\n  position: fixed;\n  margin-top: 10px;\n  width: 18%;\n}\n\n.tabs{\n  margin-bottom: 20px;\n}\n\n.fixedTabs{\n  position: fixed;\n  z-index: 1100;\n  width: 100%;\n  margin-top: -30px;\n\n  & > div{\n    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.23) !important;\n  }\n}\n\n.menuItems span {\n  color: white !important;\n\n  &:hover{\n    background: rgba(255, 255, 255, 0.09) !important;\n  }\n}\n\n.activeMenuItem{\n  background: $primary2Color !important;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"sidemenu": "User_sidemenu_25r",
		"fixedMenu": "User_fixedMenu_1Xe",
		"tabs": "User_tabs_mCI",
		"fixedTabs": "User_fixedTabs_34m",
		"menuItems": "User_menuItems_-hJ",
		"activeMenuItem": "User_activeMenuItem_1WQ"
	};

/***/ },
/* 136 */
/*!******************************************!*\
  !*** ./shared/utils/scrollspy/index.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends2=__webpack_require__(/*! babel-runtime/helpers/extends */ 9);var _extends3=_interopRequireDefault(_extends2);var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function getDisplayName(ComposedComponent){return ComposedComponent.displayName||ComposedComponent.name||'Component';}function debounce(method,delay){var _this=this;var timeout=void 0;return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var context=_this;var later=function later(){timeout=null;method.apply(context,args);};clearTimeout(timeout);timeout=setTimeout(later,delay);};}function scrollSpy(ComposedComponent){var _class,_temp;return _temp=_class=function(_React$Component){(0,_inherits3.default)(ScrollSpy,_React$Component);function ScrollSpy(props){(0,_classCallCheck3.default)(this,ScrollSpy);var _this2=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(ScrollSpy).call(this,props));_this2.handleScroll=function(){if(_this2.enabled){var scrollPosition=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop;var onScreen=0;for(var i=_this2.toSpy.length-1;i>=0;i--){if(_this2.toSpy[i].offsetTop<=scrollPosition){onScreen=i;break;}}if(onScreen!==_this2.state.onScreen){_this2.setState({onScreen:onScreen});}}};_this2.enableScrollSpy=function(enable){_this2.enabled=enable;if(_this2.enabled){_this2.handleScroll();}};_this2.state={onScreen:0};return _this2;}(0,_createClass3.default)(ScrollSpy,[{key:'componentDidMount',value:function componentDidMount(){this.toSpy=this.refs.composed.scrollSpy;this.enabled=true;this.handleScroll();this.listener=debounce(this.handleScroll,75);window.addEventListener('scroll',this.listener);}},{key:'componentWillUnmount',value:function componentWillUnmount(){window.removeEventListener('scroll',this.listener);}},{key:'render',value:function render(){return _react2.default.createElement(ComposedComponent,(0,_extends3.default)({ref:'composed',enableScrollSpy:this.enableScrollSpy},this.props,{scrollspy:this.state.onScreen}));}}]);return ScrollSpy;}(_react2.default.Component),_class.displayName='ScrollSpy('+getDisplayName(ComposedComponent)+')',_class.ComposedComponent=ComposedComponent,_temp;}exports.default=scrollSpy;module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 137 */
/*!*******************************!*\
  !*** external "sweet-scroll" ***!
  \*******************************/
/***/ function(module, exports) {

	module.exports = require("sweet-scroll");

/***/ },
/* 138 */
/*!******************************!*\
  !*** ./shared/root/Root.jsx ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _getPrototypeOf=__webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 24);var _getPrototypeOf2=_interopRequireDefault(_getPrototypeOf);var _classCallCheck2=__webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);var _classCallCheck3=_interopRequireDefault(_classCallCheck2);var _createClass2=__webpack_require__(/*! babel-runtime/helpers/createClass */ 25);var _createClass3=_interopRequireDefault(_createClass2);var _possibleConstructorReturn2=__webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 26);var _possibleConstructorReturn3=_interopRequireDefault(_possibleConstructorReturn2);var _inherits2=__webpack_require__(/*! babel-runtime/helpers/inherits */ 27);var _inherits3=_interopRequireDefault(_inherits2);var _react=__webpack_require__(/*! react */ 16);var _react2=_interopRequireDefault(_react);var _withStyles=__webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ 29);var _withStyles2=_interopRequireDefault(_withStyles);var _theme=__webpack_require__(/*! ../theme */ 139);var _theme2=_interopRequireDefault(_theme);var _getMuiTheme=__webpack_require__(/*! material-ui/styles/getMuiTheme */ 42);var _getMuiTheme2=_interopRequireDefault(_getMuiTheme);var _MuiThemeProvider=__webpack_require__(/*! material-ui/styles/MuiThemeProvider */ 41);var _MuiThemeProvider2=_interopRequireDefault(_MuiThemeProvider);var _Root=__webpack_require__(/*! ./Root.css */ 143);var _Root2=_interopRequireDefault(_Root);var _gridCss=__webpack_require__(/*! ./bootstrap-grid/grid.css.less */ 145);var _gridCss2=_interopRequireDefault(_gridCss);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};} /* eslint-disable react/no-multi-comp */var Root=function(_React$Component){(0,_inherits3.default)(Root,_React$Component);function Root(props){(0,_classCallCheck3.default)(this,Root);var _this=(0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(Root).call(this));_this.muiTheme=(0,_getMuiTheme2.default)(_theme2.default,{userAgent:props.userAgent});return _this;}(0,_createClass3.default)(Root,[{key:'render',value:function render(){return _react2.default.createElement(_MuiThemeProvider2.default,{muiTheme:this.muiTheme},this.props.children);}}]);return Root;}(_react2.default.Component);Root.propTypes={children:_react2.default.PropTypes.element.isRequired,userAgent:_react2.default.PropTypes.string};var SRoot=(0,_withStyles2.default)(_Root2.default)((0,_withStyles2.default)(_gridCss2.default)(Root));var StylesRoot=function(_React$Component2){(0,_inherits3.default)(StylesRoot,_React$Component2);function StylesRoot(){(0,_classCallCheck3.default)(this,StylesRoot);return (0,_possibleConstructorReturn3.default)(this,(0,_getPrototypeOf2.default)(StylesRoot).apply(this,arguments));}(0,_createClass3.default)(StylesRoot,[{key:'getChildContext',value:function getChildContext(){return {insertCss:this.props.onInsertCss};}},{key:'render',value:function render(){return _react2.default.createElement(SRoot,{userAgent:this.props.userAgent},this.props.children);}}]);return StylesRoot;}(_react2.default.Component); /* eslint-enable react/no-multi-comp */StylesRoot.propTypes={children:_react.PropTypes.element.isRequired,onInsertCss:_react.PropTypes.func.isRequired,userAgent:_react2.default.PropTypes.string};StylesRoot.childContextTypes={insertCss:_react.PropTypes.func.isRequired};exports.default=StylesRoot;module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Root.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 139 */
/*!*************************!*\
  !*** ./shared/theme.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _colors=__webpack_require__(/*! material-ui/styles/colors */ 140);var _colorManipulator=__webpack_require__(/*! material-ui/utils/colorManipulator */ 141);var _spacing=__webpack_require__(/*! material-ui/styles/spacing */ 142);var _spacing2=_interopRequireDefault(_spacing);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};} /**
	 *  Light Theme is the default theme used in material-ui. It is guaranteed to
	 *  have all theme variables needed for every component. Variables not defined
	 *  in a custom theme will default to these values.
	 */exports.default={spacing:_spacing2.default,fontFamily:'Roboto, sans-serif',palette:{primary1Color:_colors.redA700,primary2Color:_colors.red900,primary3Color:_colors.grey400,accent1Color:_colors.amber700,accent2Color:_colors.amber400,accent3Color:_colors.grey500,textColor:_colors.darkBlack,alternateTextColor:_colors.white,canvasColor:_colors.white,borderColor:_colors.grey300,disabledColor:(0,_colorManipulator.fade)(_colors.darkBlack,0.3),pickerHeaderColor:_colors.redA700,clockCircleColor:(0,_colorManipulator.fade)(_colors.darkBlack,0.07),shadowColor:_colors.fullBlack}};module.exports=exports['default'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("C:\\Users\\gersh_000\\Desktop\\Web\\FCC Proj\\Applications\\voting-app\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "theme.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 140 */
/*!********************************************!*\
  !*** external "material-ui/styles/colors" ***!
  \********************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/colors");

/***/ },
/* 141 */
/*!*****************************************************!*\
  !*** external "material-ui/utils/colorManipulator" ***!
  \*****************************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/utils/colorManipulator");

/***/ },
/* 142 */
/*!*********************************************!*\
  !*** external "material-ui/styles/spacing" ***!
  \*********************************************/
/***/ function(module, exports) {

	module.exports = require("material-ui/styles/spacing");

/***/ },
/* 143 */
/*!******************************!*\
  !*** ./shared/root/Root.css ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./../../~/postcss-loader!./Root.css */ 144);
	    var insertCss = __webpack_require__(/*! ./../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Root.css", function() {
	        content = require("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"modules\":true,\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Root.css");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 144 */
/*!*********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","modules":true,"minimize":false}!./~/postcss-loader!./shared/root/Root.css ***!
  \*********************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, "body {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  overflow-y: scroll;\n  position: relative;\n}\n\r\na {\n  color: black\r\n}\n\r\na:hover {\n  text-decoration: none;\n}\r\n\nhtml {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n}\n\n\n\nmain {\n  -webkit-box-flex: 1;\n  -webkit-flex-grow: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0\n}\n\n\n\nmain > * {\n  padding: 30px 0;\n}\n\nfooter {\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n}\n\n {\n}\n\n#react-view {\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n}\n\n#app-view {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n}\n\n.center-text {\n  display: block;\n  text-align: center;\n}\n\n.no-space {\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.center-div {\n  display: inline-block;\n  left: 50%;\n  position: relative;\n  -webkit-transform: translate(-50%);\n      -ms-transform: translate(-50%);\n       -o-transform: translate(-50%);\n          transform: translate(-50%);\n}\n\n.padded {\n  padding: 0 30px;\n}\n\n.center-y {\n  position: relative !important;\n  top: 50%;\n  -webkit-transform: translate(0, -50%);\n      -ms-transform: translate(0, -50%);\n       -o-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n}\n\n.hide-md-down {\n}\n\n@media(max-width: 991px) {\n\r\n  .hide-md-down {\n    display: none;\n  }\n}\n\n.hide-md-up {\n}\n\n@media(min-width: 992px) {\n\r\n  .hide-md-up {\n    display: none;\n  }\n}\n\n.hide-sm-down {\n}\n\n@media(max-width: 767px) {\n\r\n  .hide-sm-down {\n    display: none;\n  }\n}\n\n.hide-sm-up {\n}\n\n@media(min-width: 768px) {\n\r\n  .hide-sm-up {\n    display: none;\n  }\n}\n", "", {"version":3,"sources":["/./shared/root/Root.css"],"names":[],"mappings":"AAKA;EACE,UAAU;EACV,kCAAkC;EAClC,mBAAmB;EACnB,mBAAmB;CACpB;;AAED;EACE,YAAa;CAKd;;AAHC;EACE,sBAAsB;CACvB;;AAGH;EACE,YAAY;EACZ,aAAa;CACd;;AAED;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;CACd;;;;AAID;EACE,oBAAa;EAAb,qBAAa;MAAb,qBAAa;UAAb,aAAa;EACb,uBAAe;MAAf,qBAAe;UAAf,cAAe;CAKhB;;;;AAHC;EACE,gBAAgB;CACjB;;AAGH;EACE,uBAAe;MAAf,qBAAe;UAAf,eAAe;CAChB;;AAED;CAgEC;;AA9DC;EACE,YAAY;EACZ,iBAAiB;EACjB,aAAa;CACd;;AAED;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;EAAvB,+BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,mBAAmB;CACpB;;AAED;EACE,iBAAiB;EACjB,kBAAkB;CACnB;;AAED;EACE,sBAAsB;EACtB,UAAU;EACV,mBAAmB;EACnB,mCAA2B;MAA3B,+BAA2B;OAA3B,8BAA2B;UAA3B,2BAA2B;CAC5B;;AACD;EACE,gBAAgB;CACjB;;AAED;EACE,8BAA8B;EAC9B,SAAS;EACT,sCAA8B;MAA9B,kCAA8B;OAA9B,iCAA8B;UAA9B,8BAA8B;CAC/B;;AAED;CAIC;;AAHC;;EAAA;IACE,cAAc;GACf;CAAA;;AAGH;CAIC;;AAHC;;EAAA;IACE,cAAc;GACf;CAAA;;AAGH;CAIC;;AAHC;;EAAA;IACE,cAAc;GACf;CAAA;;AAGH;CAIC;;AAHC;;EAAA;IACE,cAAc;GACf;CAAA","file":"Root.css","sourcesContent":["@custom-media --max-md (max-width: $screen-md-max);\r\n@custom-media --min-md (min-width: $screen-md);\n@custom-media --max-sm (max-width: $screen-sm-max);\r\n@custom-media --min-sm (min-width: $screen-sm);\r\n\r\nbody {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  overflow-y: scroll;\n  position: relative;\n}\n\r\na {\n  color: black;\n\n  &:hover {\n    text-decoration: none;\n  }\r\n}\r\n\nhtml {\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n}\n\n\n\nmain {\n  flex-grow: 1;\n  flex-shrink: 0;\n\n  & > * {\n    padding: 30px 0;\n  }\n}\n\nfooter {\n  flex-shrink: 0;\n}\n\n:global {\n\n  & #react-view {\n    width: 100%;\n    min-height: 100%;\n    height: 100%;\n  }\n\n  & #app-view {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    min-height: 100%;\n  }\n\n  & .center-text {\n    display: block;\n    text-align: center;\n  }\n\n  & .no-space {\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n\n  & .center-div {\n    display: inline-block;\n    left: 50%;\n    position: relative;\n    transform: translate(-50%);\n  }\n  & .padded {\n    padding: 0 30px;\n  }\n\n  & .center-y {\n    position: relative !important;\n    top: 50%;\n    transform: translate(0, -50%);\n  }\n\n  & .hide-md-down {\n    @media(--max-md) {\n      display: none;\n    }\n  }\n\n  & .hide-md-up {\n    @media(--min-md) {\n      display: none;\n    }\n  }\n\n  & .hide-sm-down {\n    @media(--max-sm) {\n      display: none;\n    }\n  }\n\n  & .hide-sm-up {\n    @media(--min-sm) {\n      display: none;\n    }\n  }\n}\n"],"sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 145 */
/*!**************************************************!*\
  !*** ./shared/root/bootstrap-grid/grid.css.less ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {


	    var content = __webpack_require__(/*! !./../../../~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","minimize":false}!./../../../~/less-loader!./grid.css.less */ 146);
	    var insertCss = __webpack_require__(/*! ./../../../~/isomorphic-style-loader/lib/insertCss.js */ 34);

	    if (typeof content === 'string') {
	      content = [[module.id, content, '']];
	    }

	    module.exports = content.locals || {};
	    module.exports._getCss = function() { return content.toString(); };
	    module.exports._insertCss = function(options) { return insertCss(content, options) };

	    // Hot Module Replacement
	    // https://webpack.github.io/docs/hot-module-replacement
	    // Only activated in browser context
	    if (false) {
	      var removeCss = function() {};
	      module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/less-loader/index.js!./grid.css.less", function() {
	        content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/less-loader/index.js!./grid.css.less");

	        if (typeof content === 'string') {
	          content = [[module.id, content, '']];
	        }

	        removeCss = insertCss(content, { replace: true });
	      });
	      module.hot.dispose(function() { removeCss(); });
	    }


/***/ },
/* 146 */
/*!***********************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?{"sourceMap":true,"localIdentName":"[name]_[local]_[hash:base64:3]","minimize":false}!./~/less-loader!./shared/root/bootstrap-grid/grid.css.less ***!
  \***********************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../~/css-loader/lib/css-base.js */ 33)();
	// imports


	// module
	exports.push([module.id, "@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n@media (min-width: 1600px) {\n  .container {\n    width: 1570px;\n  }\n}\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.col, .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xlg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xlg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xlg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xlg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xlg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xlg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xlg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xlg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xlg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xlg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xlg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12, .col-xlg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.col, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n@media (min-width: 768px) {\n  .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 992px) {\n  .col, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 1200px) {\n  .col, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 1600px) {\n  .col, .col-xlg-1, .col-xlg-2, .col-xlg-3, .col-xlg-4, .col-xlg-5, .col-xlg-6, .col-xlg-7, .col-xlg-8, .col-xlg-9, .col-xlg-10, .col-xlg-11, .col-xlg-12 {\n    float: left;\n  }\n  .col-xlg-12 {\n    width: 100%;\n  }\n  .col-xlg-11 {\n    width: 91.66666667%;\n  }\n  .col-xlg-10 {\n    width: 83.33333333%;\n  }\n  .col-xlg-9 {\n    width: 75%;\n  }\n  .col-xlg-8 {\n    width: 66.66666667%;\n  }\n  .col-xlg-7 {\n    width: 58.33333333%;\n  }\n  .col-xlg-6 {\n    width: 50%;\n  }\n  .col-xlg-5 {\n    width: 41.66666667%;\n  }\n  .col-xlg-4 {\n    width: 33.33333333%;\n  }\n  .col-xlg-3 {\n    width: 25%;\n  }\n  .col-xlg-2 {\n    width: 16.66666667%;\n  }\n  .col-xlg-1 {\n    width: 8.33333333%;\n  }\n  .col-xlg-pull-12 {\n    right: 100%;\n  }\n  .col-xlg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-xlg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-xlg-pull-9 {\n    right: 75%;\n  }\n  .col-xlg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-xlg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-xlg-pull-6 {\n    right: 50%;\n  }\n  .col-xlg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-xlg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-xlg-pull-3 {\n    right: 25%;\n  }\n  .col-xlg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-xlg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-xlg-pull-0 {\n    right: auto;\n  }\n  .col-xlg-push-12 {\n    left: 100%;\n  }\n  .col-xlg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-xlg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-xlg-push-9 {\n    left: 75%;\n  }\n  .col-xlg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-xlg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-xlg-push-6 {\n    left: 50%;\n  }\n  .col-xlg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-xlg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-xlg-push-3 {\n    left: 25%;\n  }\n  .col-xlg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-xlg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-xlg-push-0 {\n    left: auto;\n  }\n  .col-xlg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-xlg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-xlg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-xlg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-xlg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-xlg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-xlg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-xlg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-xlg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-xlg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-xlg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-xlg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-xlg-offset-0 {\n    margin-left: 0%;\n  }\n}\n.clearfix,\n.clearfix:before,\n.clearfix:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after,\n.container:after,\n.container-fluid:after,\n.row:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n", "", {"version":3,"sources":["/./shared/root/bootstrap-grid/grid.css.less"],"names":[],"mappings":"AAAA;EACE,oBAAoB;CACrB;AACD;;;;EAIE,yBAAyB;CAC1B;AACD;;;;;;;;;;;;EAYE,yBAAyB;CAC1B;AACD;EACE;IACE,0BAA0B;GAC3B;EACD;IACE,eAAe;GAChB;EACD;IACE,8BAA8B;GAC/B;EACD;;IAEE,+BAA+B;GAChC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;CACF;AACD;EACE;IACE,2BAA2B;GAC5B;CACF;AACD;EACE;IACE,iCAAiC;GAClC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;EACD;IACE,eAAe;GAChB;EACD;IACE,8BAA8B;GAC/B;EACD;;IAEE,+BAA+B;GAChC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;CACF;AACD;EACE;IACE,2BAA2B;GAC5B;CACF;AACD;EACE;IACE,iCAAiC;GAClC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;EACD;IACE,eAAe;GAChB;EACD;IACE,8BAA8B;GAC/B;EACD;;IAEE,+BAA+B;GAChC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;CACF;AACD;EACE;IACE,2BAA2B;GAC5B;CACF;AACD;EACE;IACE,iCAAiC;GAClC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;EACD;IACE,eAAe;GAChB;EACD;IACE,8BAA8B;GAC/B;EACD;;IAEE,+BAA+B;GAChC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;CACF;AACD;EACE;IACE,2BAA2B;GAC5B;CACF;AACD;EACE;IACE,iCAAiC;GAClC;CACF;AACD;EACE;IACE,yBAAyB;GAC1B;CACF;AACD;EACE;IACE,yBAAyB;GAC1B;CACF;AACD;EACE;IACE,yBAAyB;GAC1B;CACF;AACD;EACE;IACE,yBAAyB;GAC1B;CACF;AACD;EACE,yBAAyB;CAC1B;AACD;EACE;IACE,0BAA0B;GAC3B;EACD;IACE,eAAe;GAChB;EACD;IACE,8BAA8B;GAC/B;EACD;;IAEE,+BAA+B;GAChC;CACF;AACD;EACE,yBAAyB;CAC1B;AACD;EACE;IACE,0BAA0B;GAC3B;CACF;AACD;EACE,yBAAyB;CAC1B;AACD;EACE;IACE,2BAA2B;GAC5B;CACF;AACD;EACE,yBAAyB;CAC1B;AACD;EACE;IACE,iCAAiC;GAClC;CACF;AACD;EACE;IACE,yBAAyB;GAC1B;CACF;AACD;EACE,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE;IACE,aAAa;GACd;CACF;AACD;EACE;IACE,aAAa;GACd;CACF;AACD;EACE;IACE,cAAc;GACf;CACF;AACD;EACE;IACE,cAAc;GACf;CACF;AACD;EACE,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;CACb;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;CACb;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,UAAU;CACX;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,UAAU;CACX;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,UAAU;CACX;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,WAAW;CACZ;AACD;EACE,kBAAkB;CACnB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,gBAAgB;CACjB;AACD;EACE;IACE,YAAY;GACb;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,WAAW;GACZ;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,kBAAkB;GACnB;EACD;IACE,WAAW;GACZ;EACD;IACE,kBAAkB;GACnB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,yBAAyB;GAC1B;EACD;IACE,gBAAgB;GACjB;CACF;AACD;EACE;IACE,YAAY;GACb;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,WAAW;GACZ;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,kBAAkB;GACnB;EACD;IACE,WAAW;GACZ;EACD;IACE,kBAAkB;GACnB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,yBAAyB;GAC1B;EACD;IACE,gBAAgB;GACjB;CACF;AACD;EACE;IACE,YAAY;GACb;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,WAAW;GACZ;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,kBAAkB;GACnB;EACD;IACE,WAAW;GACZ;EACD;IACE,kBAAkB;GACnB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,yBAAyB;GAC1B;EACD;IACE,gBAAgB;GACjB;CACF;AACD;EACE;IACE,YAAY;GACb;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,WAAW;GACZ;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,kBAAkB;GACnB;EACD;IACE,WAAW;GACZ;EACD;IACE,kBAAkB;GACnB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,yBAAyB;GAC1B;EACD;IACE,gBAAgB;GACjB;CACF;AACD;;;;;;;;;EASE,aAAa;EACb,eAAe;CAChB;AACD;;;;EAIE,YAAY;CACb;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,uBAAuB;CACxB;AACD;;;EAGE,+BAA+B;EAC/B,4BAA4B;EAC5B,uBAAuB;CACxB","file":"grid.css.less","sourcesContent":["@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n@media (min-width: 1600px) {\n  .container {\n    width: 1570px;\n  }\n}\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.row {\n  margin-left: -15px;\n  margin-right: -15px;\n}\n.col, .col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xlg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xlg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xlg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xlg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xlg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xlg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xlg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xlg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xlg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xlg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xlg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12, .col-xlg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.col, .col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n@media (min-width: 768px) {\n  .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 992px) {\n  .col, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 1200px) {\n  .col, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n}\n@media (min-width: 1600px) {\n  .col, .col-xlg-1, .col-xlg-2, .col-xlg-3, .col-xlg-4, .col-xlg-5, .col-xlg-6, .col-xlg-7, .col-xlg-8, .col-xlg-9, .col-xlg-10, .col-xlg-11, .col-xlg-12 {\n    float: left;\n  }\n  .col-xlg-12 {\n    width: 100%;\n  }\n  .col-xlg-11 {\n    width: 91.66666667%;\n  }\n  .col-xlg-10 {\n    width: 83.33333333%;\n  }\n  .col-xlg-9 {\n    width: 75%;\n  }\n  .col-xlg-8 {\n    width: 66.66666667%;\n  }\n  .col-xlg-7 {\n    width: 58.33333333%;\n  }\n  .col-xlg-6 {\n    width: 50%;\n  }\n  .col-xlg-5 {\n    width: 41.66666667%;\n  }\n  .col-xlg-4 {\n    width: 33.33333333%;\n  }\n  .col-xlg-3 {\n    width: 25%;\n  }\n  .col-xlg-2 {\n    width: 16.66666667%;\n  }\n  .col-xlg-1 {\n    width: 8.33333333%;\n  }\n  .col-xlg-pull-12 {\n    right: 100%;\n  }\n  .col-xlg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-xlg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-xlg-pull-9 {\n    right: 75%;\n  }\n  .col-xlg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-xlg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-xlg-pull-6 {\n    right: 50%;\n  }\n  .col-xlg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-xlg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-xlg-pull-3 {\n    right: 25%;\n  }\n  .col-xlg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-xlg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-xlg-pull-0 {\n    right: auto;\n  }\n  .col-xlg-push-12 {\n    left: 100%;\n  }\n  .col-xlg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-xlg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-xlg-push-9 {\n    left: 75%;\n  }\n  .col-xlg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-xlg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-xlg-push-6 {\n    left: 50%;\n  }\n  .col-xlg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-xlg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-xlg-push-3 {\n    left: 25%;\n  }\n  .col-xlg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-xlg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-xlg-push-0 {\n    left: auto;\n  }\n  .col-xlg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-xlg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-xlg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-xlg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-xlg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-xlg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-xlg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-xlg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-xlg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-xlg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-xlg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-xlg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-xlg-offset-0 {\n    margin-left: 0%;\n  }\n}\n.clearfix,\n.clearfix:before,\n.clearfix:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after,\n.container:after,\n.container-fluid:after,\n.row:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n*,\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map
