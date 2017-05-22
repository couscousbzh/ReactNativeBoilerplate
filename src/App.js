import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        console.log('App start');

        const config = {
            apiKey: 'AIzaSyAiXpn24AEcFxCgDisPzey-sTEzLBR6Ems',
            authDomain: 'tutomanager-9d1b4.firebaseapp.com',
            databaseURL: 'https://tutomanager-9d1b4.firebaseio.com',
            projectId: 'tutomanager-9d1b4',
            storageBucket: 'tutomanager-9d1b4.appspot.com',
            messagingSenderId: '893662961333'
        };
        firebase.initializeApp(config);

        const { currentUser } = firebase.auth();
        console.log(currentUser);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
