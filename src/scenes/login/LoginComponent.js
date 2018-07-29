import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableOpacity,
    StyleSheet,
    ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const bg = require('./../../imgs/bg.png');

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

export default ({ login, theme, user }) => (
    <ImageBackground style={{ flex: 1, width: null }} source={bg}>
        <View style={{ flex: 1, padding: 10 }}>
            <View style={styles.title}>
                <Text style={{ fontSize: 25, color: '#fff' }}>RN Messanger</Text>
            </View>
            <View style={{ flex: 2 }}>
                <TextInput
                    value={user.email} 
                    onChangeText={(text) => user.setEmail(text)}
                    style={{ ...theme.input, color: '#fff' }} 
                    placeholder='E-mail'
                    keyboardType="email-address"
                    placeholderTextColor="#fff"
                />
                <TextInput
                    placeholder='Senha'
                    onChangeText={(text) => user.setPassword(text)}
                    style={{ ...theme.input, color: '#fff' }} 
                    value={user.password} 
                    secureTextEntry
                    placeholderTextColor="#fff"
                />
                <TouchableOpacity
                    onPress={() => Actions.sceneCadastro()}
                    style={styles.msgCadastro}
                    underlayColor='white'
                >
                    <Text style={{ fontSize: 16, color: '#fff' }}>
                        Ainda não tem cadastro? Cadastre-se.
                </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 2 }}>
                <Button title="Acessar" color={theme.buttonColor} onPress={() => login(user)} />
            </View>
        </View>
    </ImageBackground>

);
