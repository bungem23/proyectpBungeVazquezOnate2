import {Text, View, Pressable} from "react-native";

function Posteo(props){
    return(
        <View>
            <Text>Posteo</Text>
            <Pressable onPress={()=> props.navigation.navigate("Login")}>
                <Text>Login</Text>
            </Pressable>

        </View>
    )
}

export default Posteo;