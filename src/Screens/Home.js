import {Text, View, Pressable} from "react-native";
import Post from '../Component/Post';

function Home(props){
    return(
        <View>
            <Text>Home</Text>
            <Pressable onPress={()=> props.navigation.navigate("Login")}>
                <Text>Login</Text>
            </Pressable>
            <Post nombreUsuario="marcos" fecha="20202" texto="diusaudhsahnudias"/>
        </View>
    )
}

export default Home;