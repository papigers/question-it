import { server_configuration } from 'universal-webpack';
import settings from './universal-webpack-settings';
import configuration from './webpack.config';

let config = server_configuration(configuration, settings);

export default config;