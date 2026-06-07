import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';

function Login(props) {
    return (
        <View>
            <Text>Login</Text>
            <Pressable onPress={() => props.navigation.navigate('NavigationTabs')}>
                <Text>Entrar a la app</Text>
            </Pressable>
            {/*Hacer que solo se pueda acceder a Home si se completa correctamente el Log in*/}
        </View>
    )
}
export default Login