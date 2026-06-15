import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { auth } from '../Firebase/config';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user!= null) {
                setLoggedIn(true);
            }
        })}, []);

    useEffect(()=> {
        if (loggedIn) {
            props.navigation.navigate('NavigationTabs');
        }
    }, [loggedIn])

        ;

    
    const controlarLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then(() => setLoggedIn(true))
            .catch(() => setLoginError('Credenciales incorrectas'));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />

            <Text style={styles.error}>{loginError}</Text>
            <Pressable style={styles.button} onPress={controlarLogin}>
                <Text style={styles.buttonText}>Entrar en la App</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => props.navigation.navigate('Register')}>
                <Text style={styles.buttonText}>Ir al Registro</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:
            'center',
        padding: 20
    },

    title: {
        fontSize: 24,
        marginBottom: 16
    },

    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8, padding: 10,
        marginBottom: 12
    },

    button: {
        padding: 12,
        borderRadius: 8,
        backgroundColor:'#007bff', 
        marginTop: 8
    },

    buttonText: {
        color:
            '#fff', textAlign:
            'center'
    },

    error: {
        color: 'red',
        marginBottom: 8
    },
});

export default Login;