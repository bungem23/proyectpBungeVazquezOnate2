import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';

function Register(props) {
    return( 
        <View>
            <Text>Register</Text>
              <Pressable onPress={() => props.navigation.navigate('Login')}>
                <Text>Ir a Login</Text>
            </Pressable>
        </View>
    )
}
export default Register