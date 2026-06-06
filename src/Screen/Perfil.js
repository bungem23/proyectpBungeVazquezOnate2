import {Text, View, Pressable} from "react-native";

function Perfil(props){
    return(
        <View>
            <Text>Profile</Text>
            <Pressable onPress={()=> props.navigation.navigate("Login")}>
                <Text>Login</Text>
            </Pressable>

        </View>
    )
}

export default Perfil;