import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import { auth } from '../Firebase/config';
import Comentar from '../Component/Comentar';

function Comentar(props) {
    const [texto, setTexto] = useState("");

    const Comentar = () => {
        // Lógica para agregar el comentario a la base de datos
    };
    return (
        <View>
            <Comentar/>
            
        </View>
    )
}
export default Comentar
