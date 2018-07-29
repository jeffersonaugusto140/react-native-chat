import React, { Component } from 'react';
import { Image, ImageBackground, View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { UserContext } from './../../contexts/UserContext';

const imageWelcome = require('./../../imgs/logo.png');
const imageBackground = require('./../../imgs/bg.png');

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    _login(user) {
        Actions.sceneHome();
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={imageBackground} >
                <UserContext.Consumer>
                    {user =>
                        <View style={{ flex: 1, padding: 15 }}>
                            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, color: '#ffffff' }}>
                                    Welcome {user.name}
                                </Text>
                                <Text style={{ fontSize: 14, paddingBottom: 10, color: '#ffffff' }}>
                                    Your account has been added successfull.
                                </Text>
                                <Image source={imageWelcome} />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Button
                                    title="Login"
                                    color={this.props.theme.buttonColor}
                                    onPress={() => this._login(user)}
                                />
                            </View>
                        </View>}
                </UserContext.Consumer>
            </ImageBackground>
        );
    }
}
