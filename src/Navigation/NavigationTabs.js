import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Perfil from '../Screens/Perfil';
import Posteo from '../Screens/Posteo';
import NavigationStackAnidado from './NavigationStackAnidado';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export default function HomeMenu() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen name="NavigationStackAnidado" component={NavigationStackAnidado} options={{ headerShown: false }} />
      <Tab.Screen name="Posteo" component={Posteo} options={{ headerShown: false }} />
      <Tab.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
