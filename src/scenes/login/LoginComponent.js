import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    msgCadastro: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ({ theme, user }) => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={styles.title}>
            <Text style={{ fontSize: 25 }}>RN Messanger</Text>
        </View>
        <View style={{ flex: 2 }}>
        <View>
                    <TextInput
                        style={theme.input} value={user.name} placeholder='E-mail'
                        onChange={(text) => false} /*user.setName(text)*/
                    />
                    <TextInput style={theme.input} value={user.password} placeholder='Senha' />
                </View>
            <TouchableOpacity
                onPress={() => Actions.sceneCadastro()}
                style={styles.msgCadastro}
                underlayColor='white'
            >
                <Text style={{ fontSize: 16 }}>
                    Ainda não tem cadastro? Cadastre-se.
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }}>
            <Button title="Acessar" color={theme.buttonColor} onPress={() => false} />
        </View>
    </View>
);
