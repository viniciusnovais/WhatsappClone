import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

export default () => (
    <Router navigationBarStyle={{ backgroundColor: '#115354' }} titleStyle={{ color: 'white' }}>
        <Stack key='root'>
            <Scene key='formLogin' component={FormLogin} title='Login' initial hideNavBar />
            <Scene key='formCadastro' component={FormCadastro} title='Cadastro' />
            <Scene key='boasVindas' component={BoasVindas} title='Boas Vindas' hideNavBar />
            <Scene key='principal' component={Principal} title='Principal' hideNavBar />
        </Stack>
    </Router>
);

