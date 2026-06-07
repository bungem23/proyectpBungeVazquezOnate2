import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Comentar from '../Screen/Comentar'
import HomePage from '../Screen/HomePage'
import { FA6Style } from "@expo/vector-icons/build/FontAwesome6";


const Stack=createNativeStackNavigator();


function NavegacionStackAnidado(props){
    return(
        
            <Stack.Navigator>
                <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/>
                <Stack.Screen name="Comentar" component={Comentar} options={{headerShown: false}}/>
            </Stack.Navigator>
      
    )
}


export default NavegacionStackAnidado