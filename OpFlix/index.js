/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import Login from './src/pages/Login'
import Main from './src/pages/Main'
import Titulos from './src/pages/Titulos'
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Titulos);
