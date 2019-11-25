import React, { Component } from 'react';
import logo from '../assets/img/opflix-logo-verde.png'
import background from '../assets/img/fundo-login.jpg'
import { Text, View, Image, TextInput, TouchableOpacity, AsyncStorage, StyleSheet, ImageBackground, KeyboardAvoidingView, } from 'react-native';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };


  constructor() {
    super();
    this.state = {
      email: 'erik@gmail.com',
      senha: '123456',
    };
  }
  _redirect = async () => {
    this.props.navigation.navigate('Cadastro')
  };

  _realizarLogin = async () => {
    fetch('http://192.168.3.201:5000/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        senha: this.state.senha,
      }),
    })
      .then(resposta => resposta.json())
      .then(data => this._irParaHome(data.token))
      .catch(erro => console.warn('Vish irmao, tomou exposed...' + erro));
  };

  _irParaHome = async tokenRecebido => {
    if (tokenRecebido != null) {
      try {
        await AsyncStorage.setItem('@opflix:token', tokenRecebido);
        this.props.navigation.navigate('MainNavigator');
      } catch (error) { }
    }
  };

  render() {
    return (
      <View>

        <View style={styles.banner}>
          <Image style={styles.logo} source={logo}></Image>
        </View>

        <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>

          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <View style={styles.loginArea}>
              <Text style={styles.titulos}>Efetuar{"\n"}Login</Text>
              <TextInput
                style={styles.label}
                placeholder="Email"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
              <TextInput
                style={styles.label}
                placeholder="Senha"
                secureTextEntry={true}
                onChangeText={senha => this.setState({ senha })}
                value={this.state.senha}
              />
              <TouchableOpacity onPress={this._realizarLogin} style={styles.botao}>
                <Text style={styles.botaoNome}>Login</Text>
              </TouchableOpacity>
              {/* <Text style={styles.textosCadastrese}>Não possui conta?</Text> */}
              {/* <TouchableOpacity onPress={this._redirect}>

        <Text style={styles.textoCadastrese}>Cadastre-se agora!</Text>
        </TouchableOpacity> */}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textosCadastrese: {
    color: '#3EB35F',
    textAlign: 'center',
    marginTop: 5,
    fontSize: 15
  },
  textoCadastrese: {
    color: '#3EB35F',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  logo: {
    marginTop: 10,
    marginLeft: 110,
  },
  banner: {
    backgroundColor: '#006b66'
  },
  loginArea: {
    backgroundColor: 'rgba(0, 107, 102,0.8)',
    width: '70%',
    marginLeft: '15%',
    marginTop: 70,
    height: 400,
  },
  label: {
    backgroundColor: '#fff',
    marginTop: 15,
    width: '70%',
    marginLeft: '15%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titulos: {
    fontSize: 40,
    textAlign: 'center',
    color: '#3EB35F',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 25,
  },
  botao: {
    backgroundColor: '#3EB35F',
    marginTop: 15,
    width: '70%',
    marginLeft: '15%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  botaoNome: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',

  }

});

export default Login;
