import React, { Component } from 'react';

const userDefault = {
    name: 'Teste',
    email: '',
    password: '',
    setName: (newName) => {
        console.log(newName);
        console.log(this.name);
        this.name = newName;
        console.log(this.name);
    }
};

export const UserContext = React.createContext(userDefault);

export default class UserContextManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: userDefault
        };
    }

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                <UserContext.Consumer>

                    {this.props.child}

                </UserContext.Consumer>
            </UserContext.Provider>
        );
    }
}
