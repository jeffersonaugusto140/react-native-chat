import React, { Component } from 'react';
import { UserProvider } from './../../contexts/UserContext';
import NovoUsuarioComponent from './NovoUsuarioComponent';

export default class NovoUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: props.theme
        };
    }

    render() {
        return (
            <NovoUsuarioComponent {...this.state} />
        );
    }
}
