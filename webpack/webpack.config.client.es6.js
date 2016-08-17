import { client_configuration } from 'universal-webpack'; // eslint-disable-line camelcase
import { universalWebpack as settings } from '../config';
import configuration from './webpack.config';

const development = process.env.NODE_ENV !== 'production';

const config = client_configuration(configuration({ client: true }), settings, {
  development,
  css_bundle: 'bundle.css',
});

export default config;
