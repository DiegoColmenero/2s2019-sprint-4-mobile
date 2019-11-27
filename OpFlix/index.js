/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navegacao from './src/index'
import {name as appName} from './app.json';
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => Navegacao);

    