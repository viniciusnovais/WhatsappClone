import React from 'react';
import { View, Image, Button, Text, ImageBackground } from 'react-native';

const logo = require('../imgs/logo.png');
const fundo = require('../imgs/bg.png');

export default () => (
    <ImageBackground style={{ flex: 1 }} source={fundo}>
        <View style={{ flex: 1, padding: 15 }}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'white' }}>Seja Bem-Vindo</Text>
                <Image source={logo} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title='Fazer Login' onPress={() => false} />
            </View>
        </View>
    </ImageBackground>
);

