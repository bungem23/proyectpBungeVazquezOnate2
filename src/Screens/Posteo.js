import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { db, auth } from '../Firebase/config';

function Posteo(props) {
    const [texto, setTexto] = useState("");

    const Postear = () => {
        db.collection('posts').add({
            owner: auth.currentUser.email,
            description: texto,
            createAt: Date.now(),
            likes: 0,
            listaLikes: [],

        })
            .then(() => props.navigation.navigate('Home', { screen: "HomePage" }), setTexto(""))
            .catch(e => console.log(e));
    };



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear nuevo post</Text>
            <TextInput
                style={styles.input}
                value={texto}
                onChangeText={texto => setTexto(texto)}
                placeholder='Escribe aqui tu posteo...'
            />
            <Pressable style={styles.button} onPress={() => { Postear() }}>
                <Text style={styles.buttonText}> Postear</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 28,
        marginBottom: 16
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
        height: 120
    },
    button: {
        backgroundColor:
            '#007bff',
        padding: 12,
        borderRadius: 8,
        marginTop: 8
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
})

export default Posteo;