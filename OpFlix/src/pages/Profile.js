import React, { Component } from 'react';
import logo from '../assets/img/opflix-logo-verde.png'

import {
  ActivityIndicator,
  View,
  Text,
  Image,
  StyleSheet,
  AsyncStorage,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// const AuthStack = createStackNavigator({Sign: { screen: LoginScreen }})
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      token: null
    };
  }
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../assets/img/4115235-exit-logout-sign-out_114030.png')}
        style={styles.tabBarNavigatorIcon}
      />
    ),
  };


  _redirect = async () => {
    this.props.navigation.navigate('Sign')
  };

  _logout = async () => {
    await AsyncStorage.removeItem('@opflix:token');
    this._redirect();
  };
  componentDidMount() {
    this._logout()
  }


  render() {

    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#006b66" />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  tabBarNavigatorIcon: {
    width: 30,
    height: 30,
    tintColor: 'white'
  },
});



export default Profile;


