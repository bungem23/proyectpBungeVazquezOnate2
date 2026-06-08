import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';


import Perfil from '../Screens/Perfil';
import Posteo from '../Screens/Posteo';
import NavigationStackAnidado from './NavigationStackAnidado';
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export default function HomeMenu() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen name="NavigationStackAnidado" component={NavigationStackAnidado} options={{ headerShown: false }, {tabBarIcon: ()=> <AntDesign name="home" size={24} color="black" />}} />
      <Tab.Screen name="Posteo" component={Posteo} options={{ headerShown: false }, {tabBarIcon: ()=> <AntDesign name="plus-circle" size={24} color="black" />}} />
      <Tab.Screen name="Perfil" component={Perfil} options={{ headerShown: false }, {tabBarIcon: ()=> <Feather name="user" size={24} color="black" />}} />
    </Tab.Navigator>
  );
}
