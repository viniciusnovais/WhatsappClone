import React, { Component } from 'react';
import { View,
         Text,
         TextInput,
         Button,
         StyleSheet,
         TouchableHighlight,
         ImageBackground,
         ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

const bg = require('../imgs/bg.png');


class formLogin extends Component {

    constructor(props) {
        super(props);

        console.log(this.props);
    }

    autenticarUsuario() {
        const { email, senha } = this.props;

        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar() {
        if (this.props.loading_login) {
            return (
                <ActivityIndicator size="large" />
            );
        }

        return ( 
            <Button
                title='Acessar'
                accessibilityLabel='Acessar app'
                onPress={() => this.autenticarUsuario()} 
            />
        );
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={bg}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={styles.vtitulo} >
                        <Text style={{ fontSize: 25, color: '#fff' }}>WhatsApp Clone</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <TextInput
                            style={styles.input}
                            placeholder='E-mail'
                            value={this.props.email}
                            onChangeText={text => this.props.modificaEmail(text)}
                            placeholderTextColor='#fff'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Senha'
                            value={this.props.senha}
                            onChangeText={text => this.props.modificaSenha(text)}
                            secureTextEntry
                            placeholderTextColor='#fff'
                        />
                        <Text style={{ color: 'red', fontSize: 18 }}>
                            {this.props.erroLogin}
                        </Text>
                        <TouchableHighlight
                            onPress={() => Actions.formCadastro()}
                        >
                            <Text style={{ fontSize: 20, color: '#fff' }}>
                                Ainda não tem cadastro ? Cadastre-se</Text>  
                        </TouchableHighlight>   
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.renderBtnAcessar()}
                    </View>
                </View>
            </ImageBackground>
        );
    }  
}

const styles = StyleSheet.create({

    vtitulo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        fontSize: 20,
        height: 45,
        borderBottomWidth: 1,
        borderBottomColor: '#03DAC6',
    }
    
});

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
);

export default connect(
    mapStateToProps, 
    { modificaEmail,
     modificaSenha,
     autenticarUsuario 
    })(formLogin);
