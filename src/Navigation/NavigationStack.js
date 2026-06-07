import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Home from '../Screens/Home';
import NavigationTabs from './NavigationTabs';

const Stack = createNativeStackNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="NavigationTabs" component={NavigationTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationStack;
