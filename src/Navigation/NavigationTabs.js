import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Perfil from '../Screen/Perfil';
import Posteo from "../Screen/Posteo"


const Tab = createBottomTabNavigator();

function TabNavigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Perfil' component={Perfil}/>
            <Tab.Screen name="Posteo" component={Posteo}/>
        </Tab.Navigator>
    )
}

export default TabNavigation;