import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput, FlatList } from 'react-native';
import Post from '../Component/Post';
import { db, auth } from '../Firebase/config';


function Perfil({ navigation }) {
    const [posteos, setPosteos] = useState('');
    const [loading, setLoading] = useState('');

    useEffect(() => {
        db.collection('posts').onSnapshot(
            docs => {
                let posts = [];
                docs.forEach(doc => {
                    posts.push({
                        id: doc.id,
                        data: doc.data()
                    })

                    {/*abajo poner un if para que avise que estan cargando*/ }

                })
                setPosteos(posts)
                setLoading(false)
            }

        )

    }, [])
    function logOut() {
        auth.signOut()
        navigation.navigate('Register')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <Pressable style={styles.button} onPress={() => logOut()}>
                <Text style={styles.buttonText}>Desloguearse</Text>
            </Pressable>
        <FlatList
            data={posteos}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <Post
                    nombreUsuario={item.data.owner}
                    fecha={item.data.fecha}
                    texto={item.data.description}
                    listaLikes={item.doc.listaLikes || []}
                    id={item.id}
                />
            )}
        />
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

export default Perfil;
