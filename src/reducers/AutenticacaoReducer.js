import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    LOGIN_USUARIO_ERRO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_USUARIO_EM_ANDAMENTO
} from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    loading_login: false,
    loading_cadastro: false
};

export default (state = INITIAL_STATE, action) => {
    if (action.type === MODIFICA_EMAIL) {
        return { ...state, email: action.payload };
    }

    if (action.type === MODIFICA_SENHA) {
        return { ...state, senha: action.payload };
    }

    if (action.type === MODIFICA_NOME) {
        return { ...state, nome: action.payload };
    }

    if (action.type === CADASTRO_USUARIO_ERRO) {
        return { ...state, erroCadastro: action.payload };
    }

    if (action.type === LOGIN_USUARIO_ERRO) {
        return { ...state, erroLogin: action.payload, loading_login: false };
    }

    if (action.type === LOGIN_EM_ANDAMENTO) {
        return { ...state, loading_login: true };
    }

    if (action.type === CADASTRO_USUARIO_EM_ANDAMENTO) {
        return { ...state, loading_cadastro: true };
    }

    return state;
};

