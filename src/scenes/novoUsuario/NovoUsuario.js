import React from 'react';
import { View, TextInput, Button } from 'react-native';

import { UserContext } from './../../contexts/UserContext';

export default props => (
    <UserContext.Consumer>
        {
            user =>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput
                            style={props.theme.input} value={user.name} placeholder='Nome'
                        />
                        <TextInput
                            style={props.theme.input} value={user.email} placeholder='E-mail'
                        />
                        <TextInput
                            style={props.theme.input} value={user.password} placeholder='Senha'
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Button title="Cadastrar" color="#115E54" onPress={() => false} />
                    </View>
                </View>
        }
    </UserContext.Consumer>

);
