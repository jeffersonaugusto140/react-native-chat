import React, { Component } from 'react';

const userDefault = {
    name: '',
    email: '',
    password: '',
};

export const UserContext = React.createContext();

export class UserProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...userDefault,
            setName: (name) => {
                this.setState(state => {
                    state.name = name;
                    return state;
                });
            },
            setEmail: (email) => {
                this.setState(state => {
                    state.email = email;
                    return state;
                });
            },
            setPassword: (password) => {
                this.setState(state => {
                    state.password = password;
                    return state;
                });
            },
        };
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
