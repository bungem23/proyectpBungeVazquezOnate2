import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, FlatList } from 'react-native';
import { db } from '../Firebase/config';
import Post from '../Component/Post'

function HomePage(props) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        db.collection('posts').onSnapshot(
            docs => {
                const posts = [];
                docs.forEach(doc => {
                    posts.push({
                        id: doc.id,
                        doc: doc.data()
                    });
                });
                setPosts(posts);
                setLoading(false);
                console.log(posts);
            }
        )
    }, []);

    return (
        <View style={styles.flatList}>
            <FlatList
                data={posts}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Post
                        nombreUsuario={item.doc.owner}
                        fecha={item.doc.fecha}
                        texto={item.doc.description}
                        likes={item.doc.likes}
                        listaLikes={item.doc.listaLikes || []}
                        id={item.id}
                        navegacion={navigation}
                        
                        /*ver si esta bien esto, no se como hacer para que se pueda navegar desde un componente*/
                    />
                )}
            />
        </View>
    )
}
export default HomePage

const styles= StyleSheet.create({
    flatList:{
        width: '100%',
        flex:1
    }
})
//esto es para que se pueda scrollear//