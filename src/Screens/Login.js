import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { auth } from '../Firebase/config';

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user){
                setLoggedIn(true);
            }
        });

        if (loggedIn) {
            navigation.navigate('NavigationTabs');
        }
    }, [loggedIn, navigation]);

    /* por que funciona como componentdidupdate sin didmount? por qu eescucha a navigation?/ Lo que hace ahora es cambiar el bool o cuando haces login o cuando entras y ya estas log  */ 

    const controlarLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
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
                onChangeText={text =>setEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={text =>setPassword(text)}
            />

            {loginError ? <Text style={styles.error}>{loginError}</Text> : null}

            <Pressable style={styles.button} onPress={controlarLogin}>
                <Text style={styles.buttonText}>Entrar en la App</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonText}>Ir al Registro</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 16 },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 12 },
    button: { backgroundColor: '#007bff', padding: 12, borderRadius: 8, marginTop: 8 },
    buttonText: { color: '#fff', textAlign: 'center' },
    error: { color: 'red', marginBottom: 8 },
});

export default Login;