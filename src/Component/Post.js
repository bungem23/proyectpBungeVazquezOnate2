import {View ,Text, Pressable, TextInput} from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import {StyleSheet} from 'react-native';
import {db} from '../Firebase/config'
import { useEffect } from 'react';

function Post(props){
   
    return(
        <View style={styles.container}>
            <Text style={styles.nombreUsuario}>{props.nombreUsuario}</Text>
            <Text style={styles.texto}>{props.texto}</Text>
            <Pressable><Entypo name="heart-outlined" size={24} color="black" /></Pressable>
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