import React, { useState } from 'react';
import { View, Text, StyleSheet , TextInput, TouchableOpacity, Alert } from 'react-native';
import getAuth from '@react-native-firebase/auth';
import firebase from '../credenciales';

const auth = getAuth(firebase);

export default function Recuperar (props) {
    const [email, setEmail] = useState('');

    const handleRecoverPassword = async () => {
      try {
        await getAuth(firebase).sendPasswordResetEmail(email);
        Alert.alert('Correo electrónico enviado', 'Se ha enviado un correo electrónico para recuperar tu contraseña');
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recuperar contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleRecoverPassword}>
          <Text style={styles.buttonText}>Enviar correo electrónico</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    button: {
      backgroundColor: '#007bff',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });
