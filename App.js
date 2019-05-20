import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Routes from './src/Routes';
import reducers from './src/reducers';

export default class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCibxNQ-GCPiiJXG7mHPm7XLro62OQqLkM',
            authDomain: 'whatsappclone-4f2ac.firebaseapp.com',
            databaseURL: 'https://whatsappclone-4f2ac.firebaseio.com',
            projectId: 'whatsappclone-4f2ac',
            storageBucket: 'whatsappclone-4f2ac.appspot.com',
            messagingSenderId: '6688551423'
          };
          firebase.initializeApp(config);

          console.log(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}
