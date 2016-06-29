# Question-It (WIP)
### _Isomorphic_ Reactive Voting Application
* React
* Material-UI
* React-Router
* GraphQL
* Relay
* MongoDB/Mongoose

#### Voting Application
Simple application where everyone can view polls and their results, users can register and login to create and vote on polls.  
This application is one of the backend challenges at [FCC](https://www.freecodecamp.com/), and I've decided to take it to the next level.

#### Isomorphic/Universal
This application is being rendered both on the client and on the server.  
The state is kept consisted using [`isomorphic-relay`](https://www.npmjs.com/package/isomorphic-relay) & [`isomorphic-relay-router`](https://www.npmjs.com/package/isomorphic-relay-router).
[`isomorphic-style-loader`](https://www.npmjs.com/package/isomorphic-style-loader) is being used to render the [critical rendering path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=en).
[`universal-webpack`](https://www.npmjs.com/package/universal-webpack) is easily create "universal" webpack build configuration.

#### Reactive
I've created this simple application in order to learn react - front to back. Using most the involved technologies, and preferably, only them.

## TODO:
* Finish relay bindings to routes.
* Hooking up mongoose models and connect to GraphQl schema. 
* Solve pagination issues.
* Create React unit tests.
* Deploy to heroku.

## License
MIT.



