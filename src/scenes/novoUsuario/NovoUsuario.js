import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { UserContext } from './../../contexts/UserContext';
import NovoUsuarioComponent from './NovoUsuarioComponent';

export default class NovoUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: props.theme,
            add: (user) => {
                if (user.name === '' || user.email === '' || user.passwork === '') {
                    Alert.alert('New user', 'The information has invalid.');
                } else {
                    props.firebase.auth()
                        .createUserWithEmailAndPassword(user.email, user.password)
                        .then(() => {
                            Alert.alert('New user', 'A new user has been added');
                            Actions.sceneHome();
                        })
                        .catch(err => {
                            Alert.alert('New user', err.message);
                        });
                }
            }
        };
    }

    render() {
        return (
            <UserContext.Consumer>
                {user => <NovoUsuarioComponent {...this.state} user={user} />}
            </UserContext.Consumer>
        );
    }
}
