import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';

function ComentarComponent(props) {
    const [texto, setTexto] = useState("");

    const Comentario = () => {
        // Lógica para agregar el comentario a la base de datos
    };
    return (
        <View>
            <Text style={styles.title}>{usuario.username}</Text>
            <TextInput
                style={styles.input}
                value={texto}
                onChangeText={texto => setTexto(texto)}
            />
            <Pressable style={styles.button} onPress={() => { Comentario(); props.navigation.navigate('NavigationTabs'); }}>
                <Text style={styles.buttonText}> Comentar</Text>
            </Pressable>
        </View>
    )
}
export default ComentarComponent
