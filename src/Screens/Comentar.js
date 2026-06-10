import React from 'react';
import { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Comentar(props) {
    const navigation = useNavigation();
    const [texto, setTexto] = useState("");

    const guardarComentario = () => {
        // acá va la lógica de Firestore
    };

    return (
        <View>
            <TextInput
                value={texto}
                onChangeText={setTexto}
            />
            <Pressable onPress={() => { guardarComentario(); navigation.navigate('NavigationTabs'); }}>
                <Text>Comentar</Text>
            </Pressable>
        </View>
    )
}

export default Comentar
