import logo from '../assets/img/opflix-logo-verde.png'
import menu from '../assets/img/menu.png'
import login from '../assets/img/login.png'
import filminho from '../assets/img/filminho.png'
import banner from '../assets/img/banner-opflix.png'
import viuva from '../assets/img/banner-viuvanegra.png'
import vikings from '../assets/img/banner-vikings.png'
import opflix from '../assets/img/banner-opflix.png'
import joker from '../assets/img/banner-joker.png'
import React, { Component } from 'react';
import Carousel from 'simple-carousel-react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';

class Main extends Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../assets/img/icons8-home-30.png')}
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
      .then(data => this.setState({ titulos: data }))
      .catch(erro => console.warn(erro));
  };

  render() {



    return (
      <View>
        <ScrollView style={styles.corFundo}>

          <View style={styles.banner}>
            <Image style={styles.logo} source={logo}></Image>
          </View>
          <Carousel
            showScroll={false}
            showBubbles={false}
            height={280}
            width={420}>
            <View>
              <Image style={styles.imagensCarossel} source={banner}></Image>
              <Text style={styles.slogan1}>Só na OpFlix você fica dentro de tudo sobre os próximos lançamentos, suas respectivas produtoras, categorias, quando e onde estão disponíveis, e muito mais!</Text>
              <View style={styles.bolinhas}>
                <Text style={styles.bolaSelecionada}>❶</Text>
                <Text style={styles.bolaNaoSelecionada}> ❷ ❸ ❹</Text>
              </View>
            </View>


            <View>
              <Image style={styles.imagensCarossel} source={vikings}></Image>
              <Text style={styles.slogan}>A 6ª temporada de Vikings estará{"\n"}disponível dia 06/12 nos canais da History</Text>
              <View style={styles.bolinhasVikings}>
                <Text style={styles.bolaNaoSelecionada}>❶ </Text>
                <Text style={styles.bolaSelecionada}>❷ </Text>
                <Text style={styles.bolaNaoSelecionada}>❸ ❹</Text>
              </View>
            </View>


            <View>
              <Image style={styles.imagensCarossel} source={viuva}></Image>
              <Text style={styles.sloganviuva}>Viúva Negra{"\n"}vai aos cinemas em 2020</Text>
              <View style={styles.bolinhasViuva}>
                <Text style={styles.bolaNaoSelecionada}>❶ ❷ </Text>
                <Text style={styles.bolaSelecionada}>❸ </Text>
                <Text style={styles.bolaNaoSelecionada}>❹</Text>

              </View>
            </View>


            <View>
              <Image style={styles.imagensCarossel} source={joker}></Image>
              <Text style={styles.sloganjoker}>The Joker já está disponível nos cinemas</Text>
              <View style={styles.bolinhasJoker}>
                <Text style={styles.bolaNaoSelecionada}>❶ ❷ ❸ </Text>
                <Text style={styles.bolaSelecionada}>❹</Text>
              </View>
            </View>
          </Carousel>
          {/* <Image style={styles.anuncio}source={banner}></Image>
      <Text style={styles.slogan} >Com Opflix, {"\n"}o impossível vira possível</Text> */}
          <Image style={styles.filminho} source={filminho}></Image>
          <Text style={styles.informe}>Se informe acerca de{"\n"}dezenas de filmes</Text>

        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  // corFundo: {
  //   backgroundColor: '#006b66',
  // },
  bolinhas: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '36%'
  },
  bolinhasJoker: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '36%'
  },
  bolinhasViuva: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '36%'
  },
  bolinhasVikings: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '38%'
  },
  bolaSelecionada: {
    color: '#3EB35F',
    fontSize: 25,
  },
  bolaNaoSelecionada: {
    color: '#006b66',
    fontSize: 25,
  },
  tabBarNavigatorIcon: {
    width: 30,
    height: 30,
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
    marginTop: -60,
    color: '#3EB35F',
    fontSize: 20,
    fontWeight: 'bold',
  },
  slogan1: {
    textAlign: 'center',
    marginTop: -75,
    color: '#3EB35F',
    fontSize: 15,
    fontWeight: 'bold',
  },
  sloganjoker: {
    textAlign: 'center',
    marginTop: -50,
    color: '#3EB35F',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sloganviuva: {
    textAlign: 'center',
    marginTop: -60,
    color: '#3EB35F',
    fontSize: 20,
    fontWeight: 'bold',
  },
  filminho: {
    marginTop: 55,
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
  },
  imagensCarossel: {
    height: 250,
    width: 420,
  },


});

export default Main;
