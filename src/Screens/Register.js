import { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { auth, db } from '../Firebase/config';

function Register(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);
  const [registerError, setRegisterError] = useState('');

  useEffect(() => {
    if (registered) {
      props.navigation.navigate('Login');
    }
  }, [registered]);

  function onSubmit() {
    if (email == "" || password == "" || username == "") {
      setRegisterError("Debe completar todos los campos");
      return;
    }
    else if (!email.includes("@")) {
      setRegisterError("Mail inválido");
      return;
    } else if (password.length < 6) {
      setRegisterError("Contraseña menor a 6 caracteres");
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then((response) => {
        db.collection('usuarios').add({
          email: email,
          user: username,
          createdAt: Date.now()
        })
          .then(() => setRegistered(true))

      })
      .catch((error) => setRegisterError(error.message));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        keyboardType="default"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      <Text style={styles.error}>{registerError}</Text> 

      <Pressable style={styles.button} onPress={() => { onSubmit() }}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => props.navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Ya tengo cuenta</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    marginTop: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  error: {
    marginBottom: 8,
    color: 'red',
    
  },
});

export default Register;