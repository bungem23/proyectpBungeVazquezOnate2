import { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { auth } from '../Firebase/config';

function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);
  const [registerError, setRegisterError] = useState('');

  useEffect(() => {
    if (registered) {
      navigation.navigate('Login');
    }
  }, [registered, navigation]);

  function onSubmit() {


    if (!email.includes("@") || password.length < 6) {
            setRegisterError("Mail inválido o contraseña menor a 6 caracteres.");
            return; 
        }

    console.log('Email:', email);
    console.log('Password:', password);

    auth.createUserWithEmailAndPassword(email, password)
      .then((response) => setRegistered(true))
      .catch((error) => setRegisterError('Error al registrar el usuario'));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Registro</Text>

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
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />

      {registerError ? <Text style={styles.error}>{registerError}</Text> : null}

      <Pressable style={styles.button} onPress={() => onSubmit()}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Ya tengo cuenta</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});

export default Register;