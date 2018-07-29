import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
// TODO ocorre erro ao importar firebase import firebase from 'firebase';
import Routes from './src/components/Routes';
import { AppConfig } from './src/common/AppConfig';

const firebase = require('firebase');

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(AppConfig.firebase);
    }

    render() {
        return (<Routes firebase={firebase} />);
    }
}

AppRegistry.registerComponent('ReactNativeChat', () => App);
