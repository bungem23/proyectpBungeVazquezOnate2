import React from 'react';
import { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {db, auth} from '../Firebase/config'
import Post from '../Component/Post'

function Comentar(props) {
    const navigation = useNavigation();
    const [texto, setTexto] = useState("");
    const [Posteo, setPosteo] =useState([])
    const id= props.params
    console.log(id)

    const guardarComentario = () => {
        // acá va la lógica de Firestore
    };

    db.collection('post').where('id', '==', id ).onSnapshot(
        docs=>{
            let Post =[];
            docs.forEach(doc=>{
                Post.push({
                    id: doc.id,
                    data: doc.data()
                })
            this.setState({
                Posteo: Post,
            })
            })
        }
    )
db.collection('comentarios').where('id', '==', id).add({
        owner: auth.currentUser.email,
        texto: texto,
       


    })
    
    return (
        <View>
            <Post
                    nombreUsuario={Posteo.owner}
                    fecha={Posteo.fecha}
                    texto={Posteo.description}
                    listaLikes={Posteo.listaLikes || []}
                    id={id}

            />

            <TextInput
                value={texto}
                onChangeText={texto=> setTexto(texto)}
            />
            <Pressable onPress={() => { guardarComentario(); navigation.navigate('NavigationTabs'); }}>
                <Text>Comentar</Text>
            </Pressable>
        </View>
    )
}

export default Comentar

