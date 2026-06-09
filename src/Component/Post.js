import {View ,Text, Pressable, TextInput} from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import {StyleSheet} from 'react-native';
import {db} from '../Firebase/config'
import { useEffect } from 'react';

function Post(props){
    useEffect( ()=> {
        db.collection('posts')
            .doc()
            .update({
                likes: valor+1
            })
            .then (()=> {

            })

        
    }, []);


    return(
        <View style={styles.container}>
            <Text>{props.nombreUsuario}</Text>
            <Text>{props.fecha}</Text>
            <Text>{props.texto}</Text>
            <Pressable><Entypo name="heart-outlined" size={24} color="black" /></Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        alignItems: 'center',
        fontSize: 16,
        borderColor: 'black',
        borderWidth: 2,
    }
})

export default Post;