import React from 'react';
import { useState } from 'react';
import {auth} from "../Firebase/config"
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';

function Perfil({Navigation}) {
    function logOut(){
        auth.signOut()
        navigation.navigate('Register')
    }
    return( 
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <Pressable style={styles.button} onPress={()=>logOut()}>
                <Text style={styles.buttonText}>Desloguearse</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 16 },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 12 },
    button: { backgroundColor: '#007bff', padding: 12, borderRadius: 8, marginTop: 8 },
    buttonText: { color: '#fff', textAlign: 'center' },
    error: { color: 'red', marginBottom: 8 },
});

export default Perfil
