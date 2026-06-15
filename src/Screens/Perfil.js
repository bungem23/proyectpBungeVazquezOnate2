import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput, FlatList, ActivityIndicator } from 'react-native';
import Post from '../Component/Post';
import { db, auth } from '../Firebase/config';


function Perfil(props) {
    const [posteos, setPosteos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usuario, setUsuario]= useState('');
    const [nopost, setNopost] = useState(false)
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
                })
                setPosteos(posts)
                if (posts.length==0){
                    setNopost(true)
                }else if(posts.length!=0){
                    setNopost(false)
                }
                
                
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
        setLoading(false)
                

    }, [] )

    
    function logOut() {
        auth.signOut()
        props.navigation.navigate('Register')
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido: {usuario.user}</Text>
            <Text style={styles.mail}>{usuario.email}</Text>
            
        {loading==true? 
        <ActivityIndicator size='large' color='green'/>: nopost==true? <Text style={styles.emptyText}> Aún no has hecho tu primera publicación</Text>:<FlatList
            data={posteos}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <Post
                    nombreUsuario={item.data.owner}
                    fecha={item.data.fecha}
                    texto={item.data.description}
                    listaLikes={item.data.listaLikes}
                    id={item.id}
                    navegacion={props.navigation}
                    
                />)
        }/>
    }
            
        
        <Pressable style={styles.button} onPress={() => logOut()}>
                <Text style={styles.buttonText}>Cerrar sesión</Text>
            </Pressable>
    </View>
);
}
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        padding: 20 },
    title: { 
        fontSize: 30, 
        marginBottom: 10 },
    mail: {
        marginBottom: 16,
        fontSize: 20, 
        color: 'rgb(93, 88, 88)', 
        },
    input: { 
        borderRadius: 8, 
        padding: 10, 
        borderWidth: 1, 
        borderColor: '#ccc', 
        marginBottom: 12 },
    button: { 
        backgroundColor: 
        '#007bff', 
        padding: 12, 
        borderRadius: 8, 
        marginTop: 8 },

    buttonText: { 
        color: '#fff', 
        textAlign: 'center' },
    error: { 
        color: 'red', 
        marginBottom: 8 },
    emptyText: {
        textAlign: 'center', 
        color: '#666', 
        margin:100
    },
});

export default Perfil;
