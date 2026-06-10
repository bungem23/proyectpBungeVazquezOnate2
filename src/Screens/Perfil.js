import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput, FlatList } from 'react-native';
import Post from '../Component/Post';
import { db, auth } from '../Firebase/config';


function Perfil({ navigation }) {
    const [posteos, setPosteos] = useState([]);
    const [loading, setLoading] = useState('');
    const [usuario, setUsuario]= useState('');
    let EmailActual = auth.currentUser.email
   


    useEffect(() => {
        db.collection('posts').where('owner', '==', EmailActual).onSnapshot(
            docs => {
                let posts = [];
                docs.forEach(doc => {
                    posts.push({
                        id: doc.id,
                        data: doc.data()
                    }
                )
                    {/*abajo poner un if para que avise que estan cargando*/ }
                })
                setPosteos(posts)
                setLoading(false)
            }

        )
        db.collection('usuarios').where('email', '==', EmailActual).onSnapshot(
            docs=> {
                let usuarios=[]
                docs.forEach(doc=>{
                        usuarios.push({
                        id: doc.id,
                        data: doc.data()
                        })
                    
                    })
                setUsuario(usuarios[0].data)})
                console.log(usuario)

    }, [] )
    function logOut() {
        auth.signOut()
        navigation.navigate('Register')
    }
    console.log(usuario)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <Text> {EmailActual}</Text>
            <Text>{usuario.username }</Text>
            
            
        <FlatList
            data={posteos}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <Post
                    nombreUsuario={item.data.owner}
                    fecha={item.data.fecha}
                    texto={item.data.description}
                    listaLikes={item.data.listaLikes || []}
                    id={item.id}
                />
            )}
        />
        <Pressable style={styles.button} onPress={() => logOut()}>
                <Text style={styles.buttonText}>Desloguearse</Text>
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

export default Perfil;
