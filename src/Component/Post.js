import {View ,Text, Pressable, TextInput} from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import {StyleSheet} from 'react-native';
import {db, auth} from '../Firebase/config'
import { useState } from 'react';

function Post(props){
    const emailUsuario = auth.currentUser.email;
    const [listaLikes, setListaLikes] = useState(props.listaLikes || []) // revisar ultima parte
    const cantLikes = listaLikes.length
    const likeado = listaLikes.includes(emailUsuario) // revisar

    const Likear = () => {
        const nuevaLista = [...listaLikes, emailUsuario] // revisar
        setListaLikes(nuevaLista)
        db.collection('posts')
        .doc(props.id)
        .update({
            listaLikes: nuevaLista,
        })
        .then(()=>{
            console.log("Nuevo Like");          
        })
    }

    const Deslikear = () => {
        const nuevaLista = listaLikes.filter(e => e !== emailUsuario);
        setListaLikes(nuevaLista);
        db.collection('posts')
        .doc(props.id)
        .update({ 
            listaLikes: nuevaLista
        })
        .then(()=> {
            console.log("Like removido");
        })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.nombreUsuario}>{props.nombreUsuario}</Text>
            <Text style={styles.texto}>{props.texto}</Text>
            <Pressable onPress={()=> likeado ? Deslikear() : Likear()}><Entypo name="heart" size={24} color={likeado ? "red" : "black" } /><Text>{cantLikes}</Text></Pressable>
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