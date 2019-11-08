import logo from '../assets/img/opflix-logo-verde.png'
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';

class Login extends Component{
    render(){
        return(
            <View>
                <View style={styles.banner}>
                    <Image style={styles.logo}source={logo}></Image>
                </View>
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
  });
export default Login;