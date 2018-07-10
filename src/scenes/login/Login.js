import React, { Component } from 'react';
import { UserContext } from './../../contexts/UserContext';
import LoginComponent from './LoginComponent';

const config = require('./../../../global.config.json').development;

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: props.theme
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
