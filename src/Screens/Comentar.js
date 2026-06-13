import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, Pressable, TextInput, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db, auth } from '../Firebase/config'
import Post from '../Component/Post'
import ComentarComponent from '../Component/ComentarComponent';

function Comentar(props) {
    const navigation = useNavigation();
    const [texto, setTexto] = useState("");
    const [Info, setInfo] = useState([]);
    const [comentarios, setComentarios] = useState([])
    const id = props.route.params
    console.log(Info)

    useEffect(() => {
        db.collection('posts').doc(id).onSnapshot(doc => {
            setInfo(doc.data())
        })

        //lo hice mas sencillo porque otra forma no sabia. 
        //        db.collection('posts').onSnapshot(
        //            docs => {
        //                const Post = [];
        //                docs.forEach(doc => {
        //                    Post.push({
        //                        id: doc.id,
        //                        data: doc.data()
        //                    })
        //                })
        //                console.log(Post)
        //            }


        db.collection('comentarios').where('id', '==', id).onSnapshot(
            docs => {
                const comments = [];
                docs.forEach(doc => {
                    comments.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })
                setComentarios(comments)
            }
        )
    }, [])

    function Comentando() {
        db.collection('comentarios').add({
            owner: auth.currentUser.email,
            description: texto,
            createAt: Date.now(),
            id: id
        })
            .then()
            .catch(e => console.log(e));
    };

    return (
        <View style={styles.container}>
            <View style={styles.postContainer}>
                <ComentarComponent
                    nombreUsuario={Info.owner}
                    texto={Info.description}
                />
            </View>

            <Text style={styles.sectionTitle}>Comentarios</Text>

            <FlatList
                style={styles.commentsList}
                contentContainerStyle={styles.commentsContent}
                data={comentarios}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ComentarComponent
                        nombreUsuario={item.data.owner}
                        texto={item.data.description}
                    />
                )}
                ListEmptyComponent={<Text style={styles.emptyText}>Aún no hay comentarios</Text>}
            />

            <View style={styles.inputSection}>
                <TextInput
                    style={styles.input}
                    value={texto}
                    onChangeText={texto => setTexto(texto)}
                    placeholder="Escribe tu comentario"
                    placeholderTextColor="#999"
                    multiline
                />
                <Pressable style={styles.button} onPress={() => Comentando()}>
                    <Text style={styles.buttonText}>Comentar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    postContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 16,
        backgroundColor: '#fafafa',
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: '700',
        color: '#333',
    },
    commentsList: {
        flex: 1,
        marginBottom: 20,
    },
    commentsContent: {
        paddingBottom: 16,
    },
    emptyText: {
        textAlign: 'center',
        color: '#666',
        marginTop: 20,
    },
    inputSection: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        minHeight: 80,
        textAlignVertical: 'top',
        marginBottom: 12,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007bff',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
    },
});

export default Comentar;