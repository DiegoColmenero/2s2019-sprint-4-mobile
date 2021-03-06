import logo from '../assets/img/opflix-logo-verde.png'
import React, { Component } from 'react';
import { showMessage, hideMessage } from "react-native-flash-message";
import background from '../assets/img/fundoBuscarTitulos.jpg'
import fundoCategorias from '../assets/img/escolhendoFilmes.jpg'
import lupa from '../assets/img/magnifyingglass_102622.png'
import fundoPlataformas from '../assets/img/escolhendoFilme2.jpg'
import {
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    FlatList,
    TextInput,
    ImageBackground,
} from 'react-native';


class Titulos extends Component {
    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/img/icons8-clapperboard-64.png')}
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
            plataforma: '',
            lista2: [],
            plataformas: [],
            temValor: null,
            itemValor2: null
        };
    }


    _converterData(data) {
        data = String(data).split('T');
        var dias = String(data[0]).split('-');
        return [parseInt(dias[2]), "/", parseInt(dias[1]), "/", parseInt(dias[0])]
    };

    _trazerListaPoCategoria = () => {
        fetch('http://192.168.3.201:5000/api/titulos/' + this.state.categoria + '/b')
            .then(resposta => resposta.json())
            .then(data => {
                this.setState({ lista: data })
                if (this.state.lista.length != 0) {
                    this.setState({ temValor: '' })
                    console.warn('jskajkdjk', data)
                } else {
                    this.setState({ temValor: 'Nenhuma categoria com esse nome encotrada' })
                    console.warn('Nenhuma categoria com esse nome encontrada', data)
                }
            })
            .catch(erro => console.warn(erro))



    };

    _trazerListaPoPlataforma = () => {
        fetch('http://192.168.3.201:5000/api/titulos/' + this.state.plataforma + '/x')
            .then(resposta => resposta.json())
            .then(data => {
                this.setState({ lista2: data })
                if (this.state.lista2.length != 0) {
                    this.setState({ temValor2: '' })
                    console.warn('jskajkdjk', data)
                } else {
                    this.setState({ temValor2: 'Nenhuma plataforma com esse nome encotrada' })
                    console.warn('Nenhuma plataforma com esse nome encontrada', data)
                }
            })
            .catch(erro => console.warn(erro))

    };
    _carregarPlataformas = async () => {
        await fetch('http://192.168.3.201:5000/api/plataformas')
            .then(resposta => resposta.json())
            .then(data => this.setState({ plataformas: data }))
    }

    _carregarTitulos = async () => {
        await fetch('http://192.168.3.201:5000/api/titulos')
            .then(resposta => resposta.json())
            .then(data => this.setState({ titulos: data }))
        //   .catch(erro => console.warn(erro));
    };

    _carregarCategorias = async () => {
        await fetch('http://192.168.3.201:5000/api/categorias')
            .then(resposta => resposta.json())
            .then(data => this.setState({ categorias: data }))
        // .catch(erro => console.warn(erro));
    }
    render() {
        return (
            <View style={{backgroundColor: '#fff'}}>
                <ScrollView>
                    <View style={styles.banner}>
                        <Image style={styles.logo} source={logo}></Image>
                    </View>


                    <TouchableOpacity
                        style={styles.botaoFundo}
                        color="#006b66"
                        onPress={this._carregarTitulos}
                    >
                        <Text style={styles.tituloBotao}>Listar{"\n"}Títulos</Text>
                    </TouchableOpacity>

                    <FlatList
                        data={this.state.titulos}
                        keyExtractor={item => item.idTitulo}
                        renderItem={({ item }) => (
                            <View style={{display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(0, 107, 102,0.2)'}}>
                               
                                    
                                    <Text style={styles.dadoNomee}>   {item.nome}</Text>
                                
                                
                                    
                                    <Text style={styles.dadoSinopse}>{item.sinopse}</Text>
                                
                                
                                    
                                    <Text style={styles.dadoNome}>{item.duracao} horas</Text>
                                
                                
                                    
                                    <Text style={styles.dadoNome}>{this._converterData(item.dataLancamento)}</Text>
                                
                                
                                    
                                    <Text style={styles.dadoNome}>{item.classificacao}</Text>
                                
                                    
                                    <Text style={styles.dadoNome}>{item.nomeCategoria}</Text>
                                
                                    
                                    <Text style={styles.dadoNome}>{item.nomePlataforma}</Text>
                                
                                    
                                    <Text style={styles.dadoNome}>{item.nomeProdutora}</Text>
                                
                                    
                                    <Text style={styles.dadoNome}>{item.nomeTipoTitulo}</Text>
                                
                                
                            </View>
                        )}
                    />


                    <TouchableOpacity
                        style={styles.botaoFundo}
                        color="#006b66"
                        onPress={this._carregarCategorias}
                    >
                        <Text style={styles.tituloBotao}>Listar{"\n"}Categorias</Text>
                    </TouchableOpacity>

                    <FlatList
                        data={this.state.categorias}
                        keyExtractor={item => item.idCategoria}
                        renderItem={({ item }) => (
                            <View>
                                <Text style={styles.categorias}>{item.categoria}</Text>
                            </View>
                        )}
                    />


                    <TouchableOpacity
                        style={styles.botaoFundo}
                        color="#006b66"
                        onPress={this._carregarPlataformas}
                    >
                        <Text style={styles.tituloBotao}>Listar{"\n"}Plataformas</Text>
                    </TouchableOpacity>

                    <FlatList
                        data={this.state.plataformas}
                        keyExtractor={item => item.idPlataforma}
                        renderItem={({ item }) => (
                            <View>
                                <Text style={styles.categorias}>{item.plataforma}</Text>
                            </View>
                        )}
                    />

                    <Text style={styles.tituloDaAreaDeBusca}>Busque o título que deseja filtrando por catrgoria</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 50, marginTop: 20 }}>

                        <TextInput
                            placeholder="Categoria"
                            onChangeText={categoria => this.setState({ categoria })}
                            value={this.state.categoria}
                            style={{
                                fontSize: 25,
                                backgroundColor: 'rgba(207, 206, 206,0.8)',
                                textAlign: 'center',
                                borderBottomLeftRadius: 10,
                                borderTopLeftRadius: 10,
                                width: 250
                            }}

                        />
                        <TouchableOpacity
                            onPress={this._trazerListaPoCategoria}
                            style={{
                                backgroundColor: '#3EB35F',
                                borderBottomRightRadius: 10,
                                borderTopRightRadius: 10,
                                height: 60,
                                width: 70
                            }}

                        >

                            <Image style={{ width: 40, height: 40, marginLeft: 15, marginTop: 10, }} source={lupa}></Image>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.cor}>{this.state.temValor}</Text>

                    <View style={styles.fundoCategorias}>


                        <FlatList
                            data={this.state.lista}
                            keyExtractor={item => item.idTitulo}
                            renderItem={({ item }) => (
                                <View>


                                    <Text style={styles.tituloNome2}> {item.nome}</Text>

                                </View>
                            )

                            }>

                        </FlatList>


                        <Text style={styles.tituloDaAreaDeBusca}>Busque o título que deseja filtrando por plataforma</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 50, marginTop: 20 }}>

                            <TextInput
                                placeholder="Plataforma"
                                onChangeText={plataforma => this.setState({ plataforma })}
                                value={this.state.plataforma}
                                style={{
                                    fontSize: 25,
                                    backgroundColor: 'rgba(207, 206, 206,0.8)',
                                    textAlign: 'center',
                                    borderBottomLeftRadius: 10,
                                    borderTopLeftRadius: 10,
                                    width: 250
                                }}

                            />
                            <TouchableOpacity
                                onPress={this._trazerListaPoPlataforma}
                                style={{
                                    backgroundColor: '#3EB35F',
                                    borderBottomRightRadius: 10,
                                    borderTopRightRadius: 10,
                                    height: 60,
                                    width: 70
                                }}

                            >

                                <Image style={{ width: 40, height: 40, marginLeft: 15, marginTop: 10, }} source={lupa}></Image>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.cor}>{this.state.temValor2}</Text>



                        <View style={styles.fundoCategorias}>


                            <FlatList
                                data={this.state.lista2}
                                keyExtractor={item => item.idTitulo}
                                renderItem={({ item }) => (
                                    <View>


                                        <Text style={styles.tituloNome2}> {item.nome}</Text>

                                    </View>
                                )

                                }>

                            </FlatList>



                        </View>

                    </View>




                </ScrollView>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    tituloDaAreaDeBusca: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
        color: '#000',
        backgroundColor: '#3EB35F',

    },
    ajeitar: {
        marginTop: 60,
    },
    cor: {

        color: '#ff0000',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
    },
    categorias: {
        marginTop: 25,
        color: '#006b66',
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 107, 102,0.2)'
    },
    titulo: {
        color: '#006b66',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 30,
        fontWeight: 'bold',

    },
    logo: {
        marginTop: 10,
        alignSelf: 'center'
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
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 107, 102,0.2)'
    },
    dadoNomee: {
        fontSize: 25,
        color: '#3EB35F',
        backgroundColor: '#006b66',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        textAlign: 'center',
    },
    dadoNome: {
        fontSize: 20,
        color: '#006b66',
        marginLeft: 10,
        marginTop: 5
    },
    dadoSinopse: {
        color: '#006b66',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 5,
    },
    botaoFundo: {
        marginTop: 30,
        backgroundColor: "#3EB35F",
        marginLeft: 80,
        width: '60%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 20,

    },
    botaoFundoCategoria: {
        marginTop: 70,
        backgroundColor: "rgba(62, 179, 95,0.65)",
        marginLeft: 80,
        width: '60%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    botaoFundoPlataforma: {
        marginTop: 40,
        backgroundColor: "rgba(62, 179, 95,0.65)",
        marginLeft: 80,
        width: '60%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
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
        color: '#000',
        textAlign: 'center',
        paddingLeft: 5,
        paddingRight: 5,

    },
    tabBarNavigatorIcon: {
        width: 30,
        height: 30,
        tintColor: 'white'
    },
});
export default Titulos;