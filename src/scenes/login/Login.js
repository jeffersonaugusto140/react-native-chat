import React, { Component } from 'react';
import LoginComponent from './LoginComponent';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userContext: props.userContext,
            theme: props.theme
        };
    }

    render() {
        return (
            <LoginComponent {...this.state} />
        );
    }
}
