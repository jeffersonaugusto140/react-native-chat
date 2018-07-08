import React from 'react';
import { View, TextInput, Button } from 'react-native';

import { UserContext } from './../../contexts/UserContext';

export default ({ theme }) => (
    <View style={{ flex: 1, padding: 10 }}>
        <UserContext.Consumer>
            {user =>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <TextInput
                        style={theme.input} value={user.name} placeholder='Nome'
                        onChangeText={(text) => user.setName(text)}
                    />
                    <TextInput
                        style={theme.input} value={user.email} placeholder='E-mail'
                        onChangeText={(text) => user.setEmail(text)}
                    />
                    <TextInput
                        style={theme.input} value={user.password} placeholder='Senha'
                        onChangeText={(text) => user.setPassword(text)}
                    />
                </View>}
        </UserContext.Consumer>
        <View style={{ flex: 1 }}>
            <Button title="Cadastrar" color="#115E54" onPress={() => false} />
        </View>
    </View>
);
