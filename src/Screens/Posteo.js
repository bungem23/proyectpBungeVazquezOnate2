import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { db, auth } from '../Firebase/config';

function Posteo(props) {
    const [texto, setTexto] = useState("");

    const Postear = () => {
        const fecha = Date.now();
        db.collection('posts').add({
            owner: auth.currentUser.email,
            description: texto,
            likes: 0,
            listaLikes: [],
        })
            .then()
            .catch(e => console.log(e));
    };

    const usuario = auth.currentUser;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{usuario.username}</Text>
            <TextInput
                style={styles.input}
                value={texto}
                onChangeText={texto => setTexto(texto)}
            />
            <Pressable style={styles.button} onPress={() => { Postear(); props.navigation.navigate('NavigationTabs'); }}>
                <Text style={styles.buttonText}> Postear</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, marginBottom: 16 },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 12, height: 120, textAlignVertical: 'top' },
    button: { backgroundColor: '#007bff', padding: 12, borderRadius: 8, marginTop: 8 },
    buttonText: { color: '#fff', textAlign: 'center' },
})

export default Posteo;