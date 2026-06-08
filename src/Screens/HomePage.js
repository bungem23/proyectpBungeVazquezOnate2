import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';

function HomePage(props) {
    return (
        <View>
            <Text>Home</Text>
            <Pressable onPress={() => props.navigation.navigate('NavigationStackAnidado', {screen: "Comentar"})}>
                <Text>Comentar</Text>
            </Pressable>
        </View>
    )
}
export default HomePage