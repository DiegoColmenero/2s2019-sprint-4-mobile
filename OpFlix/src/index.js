import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './pages/Main'
import TitulosScreen from './pages/Titulos'
import LoginScreen from './pages/Login'
import ProfileScreen from './pages/Profile'

const AuthStack = createStackNavigator({Sign: { screen: LoginScreen }})

const MainNavigator = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
    },
    Titulos: {
        screen: TitulosScreen,
    },
    Profile: {
        screen: ProfileScreen,
    },
    
},{
    initialRouteName: 'Main',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      inactiveBackgroundColor: '#006b66',
      activeBackgroundColor: '#3EB35F',
      style: {
        width: '100%',
        height: 50,
      },
    },
  },);


export default createAppContainer(
    createSwitchNavigator(
        {
            MainNavigator,
            AuthStack
        },
        {
            initialRouteName: 'AuthStack'
        }
    )

)
