import {Text, View, Pressable} from "react-native";

function Comentar(props){
    return(
        <View>
            <Text>Comentar</Text>
            <Pressable onPress={()=> props.navigation.navigate("Login")}>
                <Text>Login</Text>
            </Pressable>

        </View>
    )
}

export default Comentar;