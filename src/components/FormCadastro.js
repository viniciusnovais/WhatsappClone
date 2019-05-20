
import React, { Component } from 'react';
import { View, 
    TextInput, 
    Button, 
    StyleSheet, 
    ImageBackground,
    Text,
    ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { modificaEmail,
         modificaSenha,
         modificaNome,
         cadastraUsuario } from '../actions/AutenticacaoActions';


const bg = require('../imgs/bg.png');


class formCadastro extends Component {

    cadastraUsuario() {
        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastro() {
        if (this.props.loading_cadastro) {
            return (
                <ActivityIndicator size="large" />
            );
        }
        return (
            <Button 
            title='Cadastrar'
            onPress={() => this.cadastraUsuario()}

            />
        );
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={bg}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput
                            value={this.props.nome}
                            style={styles.input}
                            placeholder='Nome'
                            onChangeText={text => this.props.modificaNome(text)}
                            placeholderTextColor='#fff'
                        />
                        <TextInput
                            value={this.props.email}
                            style={styles.input}
                            placeholder='E-mail'
                            onChangeText={text => this.props.modificaEmail(text)}
                            placeholderTextColor='#fff'
                        />
                        <TextInput
                            value={this.props.senha}
                            style={styles.input}
                            placeholder='Senha'
                            onChangeText={text => this.props.modificaSenha(text)}
                            secureTextEntry
                            placeholderTextColor='#fff'
                        />
                        <Text style={{ color: 'red', fontSize: 18 }}>
                                    {this.props.erroCadastro}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderBtnCadastro()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({

    input: {
        fontSize: 20,
        height: 45,
        borderBottomWidth: 1,
        borderBottomColor: '#03DAC6',
    }
    
});

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loadingCadastro: state.AutenticacaoReducer.loadingCadastro
    }
);

export default connect(
    mapStateToProps,
    { 
      modificaNome,
      modificaEmail, 
      modificaSenha,
      cadastraUsuario 
    }
    )(formCadastro);
