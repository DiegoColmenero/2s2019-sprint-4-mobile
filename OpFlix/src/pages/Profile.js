import React, { Component } from 'react';
import logo from '../assets/img/opflix-logo-verde.png'

import {
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
        source={require('../assets/img/icons8-user-30.png')}
        style={styles.tabBarNavigatorIcon}
      />
    ),
  };
  componentDidMount() {
    this._buscarDadosDoStorage();
  };
  _redirect = async () => {
    this.props.navigation.navigate('Sign')
  };

  _buscarDadosDoStorage = async () => {
    try {
      const tokenDoStorage = await AsyncStorage.getItem('@opflix:token');
      if (tokenDoStorage != null) {
        this.setState({ token: tokenDoStorage });
      }
    } catch (error) {}
  };
  _logout = async () => {
    await AsyncStorage.removeItem('@opflix:token');
    this._redirect();
  }


  render() {

    return (
      <View>
        <ScrollView>

          <View style={styles.banner}>
            <Image style={styles.logo} source={logo}></Image>
          </View>
          <Text>{this.state.token}</Text>
          <TouchableOpacity onPress={() => this._logout()}
          ><Text>Logout</Text></TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  logo: {
    marginTop: 10,
    marginLeft: 110,
  },
  banner: {
    backgroundColor: '#006b66'
  },
  tabBarNavigatorIcon: {
    width: 30,
    height: 30,
    tintColor: 'white'
  }
});



export default Profile;


