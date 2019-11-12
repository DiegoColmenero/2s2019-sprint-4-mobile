import logo from '../assets/img/opflix-logo-verde.png'
import React, {Component} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  Button,
  TextInput,
} from 'react-native';

class Titulos extends Component{
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
          categoria: '',
          lista: [],
          categorias: [],
        };
      }

    componentDidMount(){
        this._carregarCategorias()
    }

    _trazerListaPoCategoria = () =>{
        fetch('http://192.168.3.201:5000/api/titulos/'+ this.state.categoria +'/b')
        .then(resposta => resposta.json())
        .then(data => this.setState({ lista: data}));
      };
    
    _carregarTitulos = async () => {
        await fetch('http://192.168.3.201:5000/api/titulos')
          .then(resposta => resposta.json())
          .then(data => this.setState({titulos: data}))
          .catch(erro => console.warn(erro));
      };

    _carregarCategorias = async () => {
        await fetch ('http://192.168.3.201:5000/api/categorias')
        .then(resposta => resposta.json())
        .then(data => this.setState({categorias: data}))
        .catch(erro => console.warn(erro));
    }
    render(){
        return(
            <View>
                <ScrollView>

                <View style={styles.banner}>
                    <Image style={styles.logo}source={logo}></Image>
                </View>
                <Text style={styles.tituloNome2}>Categorias</Text>
                <FlatList 
                data={this.state.categorias}
                keyExtractor={item => item.idCategoria}
                renderItem={({item}) => 
                    <View>
                        <Text style={styles.categorias}>{item.categoria}</Text>
                        <Text style={styles.divisoria1}>___________________________________</Text>
                    </View>
                }></FlatList>
                <View>
                    <Text style={styles.titulo}>Buscar título por catrgoria</Text>
            <TextInput
            style={styles.inputCategoria}
                placeholder="Categoria"
                onChangeText={categoria => this.setState({categoria})}
                value={this.state.categoria}
            />
                <TouchableOpacity 
                style={styles.botao}
                onPress={this._trazerListaPoCategoria}>
                <Text style={styles.tituloBotao}>Buscar</Text>
                </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                    data={this.state.lista}
                    keyExtractor={item => item.idTitulo}
                    renderItem={({item}) => (
                        <View>

            
                    <Text style={styles.tituloNome2}> {item.nome}</Text>
                    <Text style={styles.divisoria}>__________________</Text>
        
                        </View>
                    )

                    }>

                    </FlatList>
                </View>
                
                <TouchableOpacity
                style={styles.botao}
                color="#006b66"
                onPress={this._carregarTitulos}
                >
                    <Text style={styles.tituloBotao}>Buscar títulos</Text>
                </TouchableOpacity>
                <FlatList
                data={this.state.titulos}
                keyExtractor={item => item.idTitulo}
                renderItem={({item}) => (
            <View>
                <View style={styles.nome}>
                    <Text style={styles.tituloNome}>Nome:</Text>
                    <Text style={styles.dadoNome}> {item.nome}</Text>
                </View>
            <View style={styles.sinopse}>
                    <Text style={styles.tituloNome}>Sinópse:</Text>
                    <Text style={styles.dadoSinopse}> {item.sinopse}</Text>
            </View>
            <View style={styles.nome}>
                    <Text style={styles.tituloNome}>Duração(horas):</Text>
                    <Text style={styles.dadoNome}> {item.duracao}</Text>
            </View>
            <View style={styles.nome}>
                    <Text style={styles.tituloNome}>Data de Lançamento:</Text>
                    <Text style={styles.dadoNome}> {item.dataLancamento}</Text>
            </View>
            <View style={styles.nome}>
                    <Text style={styles.tituloNome}>Classificação:</Text>
                    <Text style={styles.dadoNome}> {item.classificacao}</Text>
            </View>
            <View style={styles.nome}>
                    <Text style={styles.tituloNome}>Categoria:</Text>
                    <Text style={styles.dadoNome}> {item.nomeCategoria}</Text>
            </View>
            <View style={styles.nome}>
                    <Text style={styles.tituloNome}>Plataforma:</Text>
                    <Text style={styles.dadoNome}> {item.nomePlataforma}</Text>
            </View>
            <View style={styles.nome}>
                    <Text style={styles.tituloNome}>Produtora:</Text>
                    <Text style={styles.dadoNome}> {item.nomeProdutora}</Text>
            </View>
            <View style={styles.nome}>
                    <Text style={styles.tituloNome}>Tipo:</Text>
                    <Text style={styles.dadoNome}> {item.nomeTipoTitulo}</Text>
            </View>
            <Text style={styles.divisoria}>__________________</Text>
          </View>
        )}
        />
                </ScrollView>
            </View>
        );
    }
    
}
const styles = StyleSheet.create({
    categorias: {
        color: '#006b66',
        fontSize: 15,
        textAlign: 'center',
    },
    titulo: {
        color: '#006b66',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 30,

    },  
    inputCategoria:{
        fontSize: 25,
        backgroundColor: '#cfcece',
        textAlign: 'center',
        marginBottom: -70,
        width: '60%',
        marginLeft: 80,
        borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginTop: 20,

    },
    logo: {
        marginTop: 10,
        marginLeft: 110,
    },
    banner: {
        backgroundColor: '#006b66'
    },
    divisoria: {
        color: '#006b66',
        fontSize: 50,
    },
    divisoria1: {
        color: '#006b66',
        fontSize: 30,
    },
    informe: {
        textAlign: 'center',
        marginTop: 25,
        fontSize: 35,
        color: '#006b66',
    },
    nome: {
        display: 'flex',
        flexDirection: 'row',
        
    },
    tituloNome: {
        fontSize: 25,
        color: '#006b66'
    },
    tituloNome2: {
        fontSize: 25,
        color: '#006b66',
        textAlign: 'center',
        marginTop: 20,
    },
    dadoNome: {
        fontSize: 25,
        color: '#3EB35F',
    },
    dadoSinopse: {
        color: '#3EB35F',
        fontSize: 20,
    },
    botao: {
        marginTop: 70,
        backgroundColor: "#006b66",
        marginLeft: 80,
        width: '60%',
        borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 70,
    },
    tituloBotao: {
        fontSize: 40,
        color: '#3EB35F',
        textAlign: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        
    },
    tabBarNavigatorIcon: {
        width: 25, 
        height: 25, 
        tintColor: 'white'
    }
  });
export default Titulos;