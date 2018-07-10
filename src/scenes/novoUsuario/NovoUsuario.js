import React, { Component } from 'react';
import { UserContext } from './../../contexts/UserContext';
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
            <UserContext.Consumer>
                {user => <NovoUsuarioComponent {...this.state} user={user} />}
            </UserContext.Consumer>
        );
    }
}
