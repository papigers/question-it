import { client_configuration } from 'universal-webpack'; // eslint-disable-line camelcase
import { universalWebpack as settings } from '../config';
import configuration from './webpack.config';

const config = client_configuration(configuration({ client: true }), settings, {
  development: process.env.NODE_ENV !== 'production',
  css_bundle: 'bundle.css',
});

export default config;
