import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';
import {useState} from 'react';
import {auth} from "../Firebase/config"


function Register (props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View>
            <Text>Register</Text>
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
            <Pressable style={styles.container} onPress={()=> props.navigation.navigate("NavegacionTab")}>
                <Text>Register</Text>
            </Pressable>

            <Pressable onPress={()=> props.navigation.navigate('Login')}>
                <Text>Ir a login</Text>
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

export default Register;