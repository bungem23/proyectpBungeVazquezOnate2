import {Text, View, Pressable} from "react-native";

function Home(props){
    return(
        <View>
            <Text>Home</Text>
            <Pressable onPress={()=> props.navigation.navigate("Login")}>
                <Text>Login</Text>
            </Pressable>

        </View>
    )
}

export default Home;