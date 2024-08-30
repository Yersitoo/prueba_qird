import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import appFirebase from '../credenciales';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth(appFirebase);
const provider = new GoogleAuthProvider();

export default function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const logueo = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Iniciando sesión', 'Accediendo');
      props.navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      Alert.alert('Iniciando sesión', 'Accediendo');
      props.navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground source={require('../assets/fondo_login.jpg')} style={styles.imagen}>
      <View style={styles.padre}>
        <Text style={styles.title}>Bienvenido</Text>

        <View style={styles.tarjeta}>
          <View style={styles.cajatexto}>
            <TextInput
              placeholder="Usuario"
              style={{ paddingHorizontal: 15, color: 'white' }}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor={'#00B2FF'}
            />
          </View>
          <View style={styles.cajatexto}>
            <TextInput
              placeholder="Contraseña"
              style={{ paddingHorizontal: 15, color: 'white' }}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor={'#00B2FF'}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => props.navigation.navigate('Recuperar')}>
              <Text style={styles.recuperar}>
                ¿Olvidaste tu contraseña?{' '}
                <Text style={{ color: '#00B2FF', textDecorationLine: 'underline' }}>Recuperar</Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.padreboton}>
            <TouchableOpacity style={styles.cajaboton} onPress={logueo}>
              <Text style={styles.textoboton}>Ingresar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.padreboton}>
            <TouchableOpacity style={styles.googleLogin} onPress={handleGoogleLogin}>
              <Text style={styles.textogoogle}>Iniciar sesión con Google</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text></Text>
          <Text></Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
            <Text style={styles.registrarse}>
              No tenes cuenta?{' '}
              <Text style={{ color: '#00B2FF', textDecorationLine: 'underline' }}>Registrate</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imagen: {
    width: '100%',
    height: '100%',
    opacity: 0.85,
  },
  title: {
    fontSize: 60,
    fontWeight: 'Bold',
    color: '#ffffff',
  },
  tarjeta: {
    margin: 20,
    marginBottom: 100,
    backgroundColor: 'transparent',
    borderRadius: 20,
    width: '90%',
    padding: 20,
  },
  cajatexto: {
    paddingVertical: 20,
    backgroundColor: '#4D4D4D',
    borderRadius: 15,
    marginVertical: 10,
    height: 52,
    opacity: 0.5,
  },
  recuperar: {
    marginTop: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  padreboton: {
    alignItems: 'center',
  },
  cajaboton: {
    backgroundColor: '#00B2FF',
    borderRadius: 15,
    paddingVertical: 20,
    width: '100%',
    marginTop: 85,
    height: 60,
  },
  textoboton: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'semibold',
    fontSize: 18,
    },
    registrarse:{
        color: '#ffffff',
    },
    googleLogin: {
        color: '#ffffff',
        textAlign: 'center',
        paddingVertical: 20,
        backgroundColor: '#4285F4',
        borderRadius: 15,
        width: '100%',
        marginTop: 20,
      },
});