import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../Screen/Login'
import Register from '../Screen/Register'
import NavigationTabs from './NavigationTabs'




import { FA6Style } from "@expo/vector-icons/build/FontAwesome6";


const Stack=createNativeStackNavigator();


function Navegacionstack(props){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="NavigationTabs" component={NavigationTabs} options={{headerShown: false}}/>
           
               
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navegacionstack
