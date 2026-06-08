import {View ,Text, Pressable, TextInput} from 'react-native'
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import {StyleSheet} from 'react-native';

function Post(props){
    return(
        <View>
            <Text>{props.nombreUsuario}</Text>
            <Text>{props.fecha}</Text>
            <Text>{props.texto}</Text>
            <Pressable><SimpleLineIcons name="like" size={24} color="black" /></Pressable>
        </View>
    )
}

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