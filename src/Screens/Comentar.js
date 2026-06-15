import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, Pressable, TextInput, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { db, auth } from '../Firebase/config'
import Post from '../Component/Post'
import ComentarComponent from '../Component/ComentarComponent';
import { ActivityIndicator } from 'react-native-web';

function Comentar(props) {
    const navigation = useNavigation();
    const [texto, setTexto] = useState("");
    const [Info, setInfo] = useState([]);
    const [comentarios, setComentarios] = useState([])
    const [nocomentario, setNocomentario] = useState(false)
    const [loading, setLoading] = useState(true)
    const id = props.route.params


    useEffect(() => {
        setLoading(true)
        db.collection('posts').doc(id).onSnapshot(doc => {
            setInfo(doc.data())
        })


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
                if (comments.length == 0) { setNocomentario(true) }
                else if (comments.length != 0) { setNocomentario(false) }
                setLoading(false)
            }
        )
    }, [id])

    function Comentando() {
        db.collection('comentarios').add({
            owner: auth.currentUser.email,
            description: texto,
            createAt: Date.now(),
            id: id
        })
            .then(() => setTexto(""))
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

            {(loading) ? <ActivityIndicator size='large' color='green' /> : (nocomentario) ? <Text style={styles.emptyText}>No hay comentarios para este post</Text> : <FlatList
                data={comentarios}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ComentarComponent
                        nombreUsuario={item.data.owner}
                        texto={item.data.description}
                    />
                )}

            />}


            <View style={styles.inputSection}>
                <TextInput
                    style={styles.input}
                    value={texto}
                    onChangeText={texto => setTexto(texto)}
                    placeholder="Escribe tu comentario"

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
        borderRadius: 10,
        padding: 16,
        backgroundColor: '#ffffff',
          borderWidth: 1,
        borderColor: '#ccc',
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: '700',
        color: '#333',
    },

    emptyText: {
        textAlign: 'center',
        color: '#666',
        margin: 100
    },
    inputSection: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 16,
        topMargin: 50

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