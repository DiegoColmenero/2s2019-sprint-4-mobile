import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './pages/Main'
import TitulosScreen from './pages/Titulos'
import LoginScreen from './pages/Login'

const AuthStack = createStackNavigator({Sign: { screen: LoginScreen }})

const MainNavigator = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
    },
    Titulos: {
        screen: TitulosScreen,
    },
    
},{
    initialRouteName: 'Main',
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      inactiveBackgroundColor: '#006b66',
      activeBackgroundColor: '#006b52',
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
