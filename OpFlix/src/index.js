import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import MainScreen from './pages/Main'
import TitulosScreen from './pages/Titulos'
import LoginScreen from './pages/Login'
import ProfileScreen from './pages/Profile'
import CadastroScreen from './pages/Cadastro'
const AuthStack = createStackNavigator({Sign: { screen: LoginScreen }, Cadastro: {screen: CadastroScreen}})

const MainNavigator = createBottomTabNavigator({
    Main: {
        screen: MainScreen,
    },
    Titulos: {
        screen: TitulosScreen,
    },
    
    Sair: {
        screen: ProfileScreen,
    },
    
},{
    initialRouteName: 'Main',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      inactiveBackgroundColor: '#006b66',
      activeBackgroundColor: '#3EB35F',
      labelStyle: {
        color: '#fff'
      },
      
      style: {
        width: '100%',
        height: 60,
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
