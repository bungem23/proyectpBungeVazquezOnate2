import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../Screen/Login';
import Register from '../Screen/Register'
import TabNavigation from './NavigationTabs';

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="NavegacionTab" component={TabNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}