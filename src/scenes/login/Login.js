import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { UserContext } from './../../contexts/UserContext';
import LoginComponent from './LoginComponent';
import { AppConfig } from './../../common/AppConfig';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: props.theme,
            login: (user) => {
                alert(JSON.stringify(AppConfig));
                Actions.sceneHome();
            }
        };
    }

    render() {
        return (
            <UserContext.Consumer>
                {user => <LoginComponent {...this.state} user={user} />}
            </UserContext.Consumer>
        );
    }
}
