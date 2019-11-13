import logo from '../assets/img/opflix-logo-verde.png'
import menu from '../assets/img/menu.png'
import login from '../assets/img/login.png'
import filminho from '../assets/img/filminho.png'
import banner from '../assets/img/banner-opflix.png'
import viuva from '../assets/img/banner-viuvanegra.png'
import vikings from '../assets/img/banner-vikings.png'
import opflix from '../assets/img/banner-opflix.png'
import joker from '../assets/img/banner-joker.png'
import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel'
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
const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10
const images = [
  '../assets/img/banner-opflix.png',
  '../assets/img/banner-viuvanegra.png',
  '../assets/img/banner-vikings.png',
  '../assets/img/banner-joker.png',
]

class Main extends Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../assets/img/icons8-home-30.png')}
        style={styles.tabBarNavigatorIcon}
      />
    ),
  };
  numItems = images.length
  itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
  animVal = new Animated.Value(0)

  

  constructor() {
    super();
    this.state = {
      titulos: [],
      pagina_atual: 0
    };
  }

  _renderItem ({item, index}) {
    return (
        <View style={styles.slide}>
            <Text style={styles.title}>{ item.title }</Text>
        </View>
    );
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
  let imageArray = []
    let barArray = []
    images.forEach((image, i) => {
      console.log(image, i)
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{uri: image}}
          style={{ width: deviceWidth }}
        />
      )
      imageArray.push(thisImage)

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: 'clamp',
      })

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: this.itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
          ]}
        >
          <Animated.View

            style={[
              styles.bar,
              {
                width: this.itemWidth,
                transform: [
                  { translateX: scrollBarVal },
                ],
              },
            ]}
          />
        </View>
      )
      barArray.push(thisBar)
    })


  return (
    <View>
      <View
        style={styles.container}
        flex={1}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
            )
          }
        >

          {imageArray}

        </ScrollView>
        <View
          style={styles.barContainer}
        >
          {barArray}
        </View>
      </View>
        <ScrollView style={styles.corFundo}>

      <View style={styles.banner}>
      <Image style={styles.logo}source={logo}></Image>
      </View>
      {/* <Image style={styles.anuncio}source={banner}></Image>
      <Text style={styles.slogan} >Com Opflix, {"\n"}o impossível vira possível</Text> */}
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
  },
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
},
barContainer: {
  position: 'absolute',
  zIndex: 2,
  top: 40,
  flexDirection: 'row',
},
track: {
  backgroundColor: '#ccc',
  overflow: 'hidden',
  height: 2,
},
bar: {
  backgroundColor: '#5294d6',
  height: 2,
  position: 'absolute',
  left: 0,
  top: 0,
},


});

export default Main;
