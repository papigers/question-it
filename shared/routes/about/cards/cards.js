
const reactLogo = require('./react.png');
const graphQLLogo = require('./graphql.png');
const relayLogo = require('./relay.png');
const muiLogo = require('./mui.png');
const routerLogo = require('./react-router.png');
const webpackLogo = require('./webpack.png');
const babelLogo = require('./babel.png');
const nodeLogo = require('./nodejs.png');
const expressLogo = require('./express.png');
const passportLogo = require('./passport.png');
const mongooseLogo = require('./mongoose.png');

/* eslint-disable max-len */
const main = {
  react: {
    logo: reactLogo,
    logoAlt: 'React Logo',
    title: 'React',
    text: 'React.js is Facebook\'s Open Source UI Library which offere smart, reuseable components, which can be rendered isomorphically.',
    link2: 'https://github.com/facebook/react',
    label2: 'Github',
    link1: 'https://facebook.github.io/react/',
    label1: 'Site',
  },
  graphql: {
    logo: graphQLLogo,
    logoAlt: 'GraphQL Logo',
    title: 'GraphQL',
    text: 'GraphQL is Facebook\'s Open Source Query Language which can be used for APIs. GraphQL has a type system and solves many REST problems, like overfetching.',
    link1: 'http://graphql.org/',
    label1: 'Site',
  },
  relay: {
    logo: relayLogo,
    logoAlt: 'Relay Logo',
    title: 'Relay',
    text: 'Relay is Facebook\'s Open Source Data framework which connects React components with GraphQL endpoints, and caches the data in the application\'s data store.',
    link2: 'https://github.com/facebook/relay',
    label2: 'Github',
    link1: 'https://facebook.github.io/relay/',
    label1: 'Site',
  },
  mui: {
    logo: muiLogo,
    logoAlt: 'Material-UI Logo',
    title: 'Material-UI',
    text: 'Material-UI is a UI library, offering a variety of React components, conforming to Google\'s Material Design principles',
    link2: 'https://github.com/callemall/material-ui',
    label2: 'Github',
    link1: 'http://www.material-ui.com/',
    label1: 'Site',
  },
  router: {
    logo: routerLogo,
    logoAlt: 'React-Router Logo',
    title: 'React Router',
    text: 'React Router is a routing library for React, syncing the view with the URL, and allowing to switch routes without reloading the page.',
    link1: 'https://github.com/ReactTraining/react-router',
    label1: 'Github',
  },
  webpack: {
    logo: webpackLogo,
    logoAlt: 'Webpack Logo',
    title: 'Webpack',
    text: 'Webpack is a module bundler, allowing you to bundle all your files into one bundle, and saving you the worry about dependencies.',
    link1: 'https://webpack.github.io/',
    label1: 'Site',
    link2: 'https://github.com/webpack/webpack',
    label2: 'Github',
  },
  babel: {
    logo: babelLogo,
    logoAlt: 'Babel Logo',
    title: 'Babel',
    text: 'Babel is a javascript compiler, allowing you to use next-gen javascript features, JSX, and more...',
    link1: 'http://babeljs.io/',
    label1: 'Site',
    link2: 'https://github.com/babel/babel',
    label2: 'Github',
  },
  node: {
    logo: nodeLogo,
    logoAlt: 'Node.js Logo',
    title: 'Node.js',
    text: 'Node.js is a javascript runtime built on Chrome\'s V8 JavaScript engine.',
    link1: 'https://nodejs.org/en/',
    label1: 'Site',
  },
  express: {
    logo: expressLogo,
    logoAlt: 'Express Logo',
    title: 'Express',
    text: 'Express is a web applications framework for Node.js',
    link1: 'https://expressjs.com/',
    label1: 'Site',
    link2: 'https://github.com/expressjs/express',
    label2: 'Github',
  },
  passport: {
    logo: passportLogo,
    logoAlt: 'Passport Logo',
    title: 'Passport',
    text: 'Passport is a library of authentication middlewares for express, allowing you to integrate many forms of authentication out-of-the-box.',
    link1: 'http://passportjs.org/',
    label1: 'Site',
    link2: 'https://github.com/jaredhanson/passport',
    label2: 'Github',
  },
  mongoose: {
    logo: mongooseLogo,
    logoAlt: 'Mongoose Logo',
    title: 'Mongoose',
    text: 'Mongoose is a mongodb ODM for Node.js, allowing you to define schemas for your MongoDB collections.',
    link1: 'http://mongoosejs.com/',
    label1: 'Site',
    link2: 'https://github.com/Automattic/mongoose',
    label2: 'Github',
  },
};

const more = {
  universalWebpack: {
    title: 'universal-webpack',
    author: 'halt-hammerzeit',
    text: 'universal-webpack is used to create webpack build configurations both for the server and for the client, perfect for isomorphic applications.',
    link1: 'https://www.npmjs.com/package/universal-webpack',
    label1: 'npm',
    link2: 'https://github.com/halt-hammerzeit/universal-webpack',
    label2: 'Github',
  },
  isomorphicRelay: {
    title: 'Isomorphic Relay',
    author: 'denvned',
    text: 'Isomorphic Relay adds server-side support for React Relay',
    link1: 'https://www.npmjs.com/package/isomorphic-relay',
    label1: 'npm',
    link2: 'https://github.com/denvned/isomorphic-relay',
    label2: 'Github',
  },
  relayRouter: {
    title: 'react-router-relay',
    author: 'relay-tools',
    text: 'Integerates React Router with Relay.',
    link1: 'https://www.npmjs.com/package/react-router-relay',
    label1: 'npm',
    link2: 'https://github.com/relay-tools/react-router-relay',
    label2: 'Github',
  },
  relayMongo: {
    title: 'relay-mongodb-connection',
    author: 'mikberg',
    text: 'Creates a Relay connection from MongoDB cursors or Mongoose Querys.',
    link1: 'https://www.npmjs.com/package/relay-mongodb-connection',
    label1: 'npm',
    link2: 'https://github.com/mikberg/relay-mongodb-connection',
    label2: 'Github',
  },
  isomorphicStyle: {
    title: 'isomorphic-style-loader',
    author: 'kriasoft',
    text: 'CSS style loader optimized for server-side rendering, that allows critical path CSS rendering.',
    link1: 'https://www.npmjs.com/package/isomorphic-style-loader',
    label1: 'npm',
    link2: 'https://github.com/kriasoft/isomorphic-style-loader',
    label2: 'Github',
  },
  reactHelmet: {
    title: 'React Helmet',
    author: 'nfl',
    text: 'React Helmet lets you dynamically manage and render your head tags from React components.',
    link1: 'https://www.npmjs.org/package/react-helmet',
    label1: 'npm',
    link2: 'https://github.com/nfl/react-helmet',
    label2: 'Github',
  },
};

export default { main, more };
/* eslint-enable max-len */
