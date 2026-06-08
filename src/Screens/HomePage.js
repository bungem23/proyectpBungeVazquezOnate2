import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';
import Post from '../Component/Post'

function HomePage(props) {
    return (
        <View>
            <Text>Home</Text>
            <Pressable onPress={() => props.navigation.navigate('NavigationStackAnidado', {screen: "Comentar"})}>
                <Text>Comentar</Text>
            </Pressable>
            <Post nombreUsuario="marcos" fecha="20202" texto="diusaudhsahnudias"/>
        </View>
    )
}
export default HomePage