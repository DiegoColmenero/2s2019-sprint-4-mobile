/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navegacao from './src/index'
import {name as appName} from './app.json';

console.disableYellowBox = true;
// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Navegacao);

// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

// import MainScreen from './src/pages/Main';
// import TitulosScreen from './src/pages/Titulos';
// import LoginScreen from './src/pages/Login';

// const AuthStack = createStackNavigator({
//   Login: {screen: LoginScreen},
// });
// const MainNavigator = createBottomTabNavigator({
//     Main: {
//       screen: MainScreen,
//     },
//     Titulos: {
//       screen: TitulosScreen,
//     },
//   },{
//     initialRouteName: 'Titulos',
//     tabBarOptions: {
//       showIcon: true,
//       showLabel: false,
//       inactiveBackgroundColor: '#006b66',
//       activeBackgroundColor: '#006b52',
//       style: {
//         width: '100%',
//         height: 50,
//       },
//     },
//   },
//   );
  
//   export default createAppContainer(
    
//     createSwitchNavigator({MainNavigator,AuthStack,},{initialRouteName: 'AuthStack',},),
    
//     );
    