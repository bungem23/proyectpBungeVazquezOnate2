import {View ,Text, Pressable, TextInput} from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import {StyleSheet} from 'react-native';
import {db} from '../Firebase/config'
import { useState } from 'react';

function Post(props){
    const [likes, setLikes] = useState(props.likes)
    const [likeado, setLikeado] = useState(false)

    const Likear = () => {
        const nuevoLike = likes + 1;
        setLikes(nuevoLike);
        setLikeado(true);
        db.collection('posts')
        .doc(props.id)
        .update({
            likes: nuevoLike
        })
        .then(()=>{
            console.log("Nuevo Like");          
        })
    }

    const Deslikear = () => {
        const nuevoLike = likes - 1;
        setLikes(nuevoLike);
        setLikeado(false); 
        db.collection('posts')
        .doc(props.id)
        .update({ 
            likes: nuevoLike 
        })
        .then(()=> {
            console.log("Like removido");
        })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.nombreUsuario}>{props.nombreUsuario}</Text>
            <Text style={styles.texto}>{props.texto}</Text>
            <Pressable onPress={()=> likeado ? Deslikear() : Likear()}><Entypo name="heart" size={24} color={likeado ? "red" : "black" } />{likes}</Pressable>
            
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