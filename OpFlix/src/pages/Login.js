// import logo from '../assets/img/opflix-logo-verde.png'
// import React, {Component} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   Image,
//   StatusBar,
//   FlatList,
// } from 'react-native';

// class Login extends Component{
//     render(){
//         return(
//             <View>
//                 <View style={styles.banner}>
//                     <Image style={styles.logo}source={logo}></Image>
//                 </View>
//             </View>
//         );
//     }
    
// }

// export default Login;
import React, {Component} from 'react';
import logo from '../assets/img/opflix-logo-verde.png'
import background from '../assets/img/fundo-login.jpg'
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
  ImageBackground,
} from 'react-native';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  // constructor
  // state
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
    };
  }

  // enviar para a api
  _realizarLogin = async () => {
    console.warn(this.state.email + ' - ' + this.state.senha);
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
      } catch (error) {}
    }
  };

  render() {
    return (
      <View>
       
               <View style={styles.banner}>
                    <Image style={styles.logo}source={logo}></Image>
               </View>

               <ImageBackground source={background} style={{width: '100%', height: '100%'}}>
    <View style={styles.loginArea}>
        <Text style={styles.titulos}>Efetuar{"\n"}Login</Text>
        <TextInput
          style={styles.label}
          placeholder="Email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
          />
        <TextInput
        style={styles.label}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={senha => this.setState({senha})}
          value={this.state.senha}
          />
        <TouchableOpacity onPress={this._realizarLogin} style={styles.botao}>
          <Text style={styles.botaoNome}>Login</Text>
        </TouchableOpacity>
          </View>
          </ImageBackground>
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
      loginArea: {
        backgroundColor : 'rgba(0, 107, 102,0.8)',
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
        backgroundColor: 'rgba(0, 107, 102, 2.5)',
        marginTop: 15,
        width: '70%',
        marginLeft: '15%',
        borderBottomLeftRadius: 10,
		    borderBottomRightRadius: 10,
		    borderTopLeftRadius: 10,
		    borderTopRightRadius: 10,
      },
      botaoNome: {
        color: '#3EB35F',
        fontSize: 25,
        textAlign: 'center',
        
      }

    });

export default Login;
