import React, {Component} from 'react';
import logo from '../assets/img/opflix-logo-verde.png'

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class App extends Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../assets/img/icons8-user-30.png')}
        style={styles.tabBarNavigatorIcon}
      />
    ),
  };


render() {

  return (
    <View>
        <ScrollView>

        <View style={styles.banner}>
            <Image style={styles.logo}source={logo}></Image>
        </View>
        <Text>nao e mole nao manjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</Text>
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



export default App;


