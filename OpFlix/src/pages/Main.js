import logo from '../assets/img/opflix-logo-verde.png'
import menu from '../assets/img/menu.png'
import login from '../assets/img/login.png'
import filminho from '../assets/img/filminho.png'
import banner from '../assets/img/banner-opflix.png'
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

class Main extends Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../assets/img/filminho.png')}
        style={styles.tabBarNavigatorIcon}
      />
    ),
  };

  constructor() {
    super();
    this.state = {
      titulos: [],
    };
  }

  componentDidMount() {
    this._carregarTitulos();
  }

  _carregarTitulos = async () => {
    await fetch('http://192.168.3.201:5000/api/titulos')
      .then(resposta => resposta.json())
      .then(data => this.setState({titulos: data}))
      .catch(erro => console.warn(erro));
  };

render() {

  return (
    <View>
        <ScrollView style={styles.corFundo}>
      <View style={styles.banner}>
      <Image style={styles.logo}source={logo}></Image>
      </View>
      <Image style={styles.anuncio}source={banner}></Image>
      <Text style={styles.slogan} >Com Opflix, {"\n"}o impossível vira possível</Text>
      <Image style={styles.filminho}source={filminho}></Image>
      <Text style={styles.informe}>Se informe acerca de{"\n"}dezenas de filmes</Text>
      <Image style={styles.login}source={login}></Image>
      <Text style={styles.informe}>Faça login e explore{"\n"}o mundo do cinema!</Text>
      
      </ScrollView>
    </View>
  );
}

}

const styles = StyleSheet.create({
  // corFundo: {
  //   backgroundColor: '#006b66',
  // },
  tabBarNavigatorIcon: {
    width: 25, 
    height: 25, 
    tintColor: 'white'
  },
  logo: {
    marginTop: 10,
    marginLeft: 110,
  },
  anuncio: {
    height: 250,
    width: '100%',
  },
  banner: {
    backgroundColor: '#006b66'
  },
  slogan: {
    textAlign: 'center',
    marginTop: -75,
    color: '#3EB35F',
    fontSize: 20,
  },
  filminho: {
    marginTop: 75,
    height: 100,
    width: 100,
    marginLeft: 160,
  },
  informe: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
    color: '#006b66',
  },
  login: {
    width: 100,
    height: 100,
    marginTop: 35,
    marginLeft: 160,
  }
});

export default Main;
