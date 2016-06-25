import { server_configuration } from 'universal-webpack'; // eslint-disable-line camelcase
import settings from './universal-webpack-settings';
import configuration from './webpack.config';

const config = server_configuration(configuration, settings);

export default config;
