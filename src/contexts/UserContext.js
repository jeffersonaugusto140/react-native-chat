import React, { Component } from 'react';

const userDefault = {
    name: 'Teste',
    email: 'emailteste',
    password: '',
};

export const UserContext = React.createContext(userDefault);

export class UserContextManager extends Component {
    constructor(props) {
        super(props);

        this.setEmail = (email) => {
            this.setState(state => {
                state.user.email = email;
                return state;
            });
        };

        this.state = {
            user: userDefault,
            setEmail: this.setEmail
        };

        //this.setName('outro 2');
    }

    // setName(name) {
    //     this.setState(state => {
    //         state.user.name = name;
    //         return state;
    //     });
    //     // if (this.state) {
    //     //     this.state.currentUser.name = name;
    //     //     this.setState(this.state);
    //     // }
    // }

    render() {
        return (
            <UserContext.Provider value={this.state} setName={this.setEmail}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
