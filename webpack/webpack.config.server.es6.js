import { server_configuration } from 'universal-webpack'; // eslint-disable-line camelcase
import { universalWebpack as settings } from '../config';
import configuration from './webpack.config';

const config = server_configuration(configuration(), settings);

export default config;
