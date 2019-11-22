import React, {Component} from 'react';
import deadpool from '../assets/img/deadpool_PNG81.png'
import fundo from '../assets/img/cadastroFundo.png'
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

class Cadastro extends Component {


render() {

  return (
    <View>
        {/* <ImageBackground source={fundo}  style={{width: '100%', height: '100%'}}> */}

        <Image source={deadpool} style={{width: '70%', height: '17%'}}></Image>
        <View style={{backgroundColor: 'rgba(0, 107, 102,0.8)'}}>
            <TextInput placeholder='Nome'></TextInput>
            <TextInput placeholder='Email'></TextInput>
            <TextInput placeholder='Senha'></TextInput>
            <TextInput placeholder='Data Nascimento'></TextInput>
            <TouchableOpacity><Text>Cadastrar</Text></TouchableOpacity>
        </View>
        {/* </ImageBackground> */}
    </View>
  );
}

}



export default Cadastro;


