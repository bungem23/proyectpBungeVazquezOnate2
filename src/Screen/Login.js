import {View, Text, TextInput, Pressable} from 'react-native';
import {useState} from 'react';
import { StyleSheet } from 'react-native';
import {auth} from "../Firebase/config"

function Login (props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    return(
        <View>
            <Text>Login</Text>
            <TextInput
                style={styles.container}
                keyboardType='email-address'
                placeholder='email'
                onChangeText={text => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.container}
                keyboardType='default'
                placeholder='password'
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
                value={password}
            />
            {/* on press hay que cambiarlo, lo pongo asi para ir trabajando otras cosas */   }         
            <Pressable style={styles.container} onPress={()=> props.navigation.navigate("NavegacionTab")}>
                <Text>Login</Text>
            </Pressable>

            <Pressable onPress={()=> props.navigation.navigate('Register')}>
                <Text>Ir a register</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        padding: 5,
        margin: 10,
        fontSize: 16,
        alignSelf: 'center',
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 2,
    }
})

export default Login;