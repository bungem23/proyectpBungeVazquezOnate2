import {View ,Text, Pressable, TextInput} from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import {StyleSheet} from 'react-native';
import {db, auth} from '../Firebase/config'
import { useState } from 'react';
import firebase from 'firebase';


function Post(props){
    const emailUsuario = auth.currentUser.email;
    const cantLikes = props.listaLikes.length
    const likeado = props.listaLikes.includes(emailUsuario) 
    const [comment, setComment] = useState('')


    const Likear = () => {
        db.collection('posts')
        .doc(props.id)
        .update({
            listaLikes: firebase.firestore.FieldValue.arrayUnion(emailUsuario)
        })
        .then(()=>{
            console.log("Nuevo Like");          
        })
    }

    const Deslikear = () => {
        db.collection('posts')
        .doc(props.id)
        .update({ 
            listaLikes: firebase.firestore.FieldValue.arrayRemove(emailUsuario)
        })
        .then(()=> {
            console.log("Like removido");
        })
    }
//en lugar de hacer listas distintas y despues agregarlas, podemos usar ese metodo para agregar o sacar cosas de un array directamente//
    return(
        <View style={styles.container}>
            <Text style={styles.nombreUsuario}>{props.nombreUsuario}</Text>
            <Text style={styles.texto}>{props.texto}</Text>
            <Pressable onPress={()=> likeado ? Deslikear() : Likear()}><Entypo name="heart" size={24} color={likeado ? "red" : "black" } /><Text>{cantLikes}</Text></Pressable>
            <TextInput
                value={comment}
                onChangeText={comment => setComment(comment)}
            />
            <Pressable style={styles.button} onPress={() => navigation.navigate('NavigationStackAnidado', {screen: "Comentar"})}>
             <Text style={styles.buttonText}> comentar</Text></Pressable>
             
            
        </View>
        
    )
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        backgroundColor: '#fff',
    },
    nombreUsuario: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',
    },
    fecha: {
        fontSize: 12,
        color: '#999',
        marginBottom: 8,
    },
    texto: {
        fontSize: 16,
        color: '#333',
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        marginTop: 8,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
});

export default Post;