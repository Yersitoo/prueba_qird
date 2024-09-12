import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(appFirebase);

export default function Register({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');

  const registro = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Registro exitoso', 'Tu cuenta ha sido creada');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground source={require('../assets/fondo_registro.jpg')} style={styles.imagen}>
      <View style={styles.padre}>
        <Text style={styles.title}>Registro</Text>

        <View style={styles.tarjeta}>
          <View style={styles.cajatexto}>
            <TextInput
              placeholder='Nombre Completo'
              style={{ paddingHorizontal: 15, color: 'white' }}
              onChangeText={(text) => setNombreCompleto(text)}
              placeholderTextColor={'#00B2FF'}
            />
          </View>
          <View style={styles.cajatexto}>
            <TextInput
              placeholder='Correo Electrónico'
              style={{ paddingHorizontal: 15, color: 'white' }}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor={'#00B2FF'}
            />
          </View>
          <View style={styles.cajatexto}>
            <TextInput
              placeholder='Contraseña'
              style={{ paddingHorizontal: 15, color: 'white' }}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor={'#00B2FF'}
            />
          </View>

          <View style={styles.padreboton}>
            <TouchableOpacity style={styles.cajaboton} onPress={registro}>
              <Text style={styles.textoboton}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.registrarse}>
              Ya tienes cuenta? <Text style={{ color: '#00B2FF', textDecorationLine: 'underline' }}>Iniciar Sesión</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    padre:{
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    imagen:{
        width:'100%',
        height:'100%',
        opacity:0.80,
    },
    title:{
        fontSize: 60,
        fontWeight: 'Bold',
        color: '#ffffff',
    },
    tarjeta:{
        margin:20,
        marginBottom:100,
        backgroundColor:'transparent',
        borderRadius:20,
        width:'90%',
        padding:20,
    },
    cajatexto:{
        paddingVertical:20,
        backgroundColor:'#4D4D4D',
        borderRadius:15,
        marginVertical:10,
        height:52,
        opacity: 0.5,
    },
    recuperar:{
        marginTop:20,
        color: '#ffffff',
        textAlign: 'center',
    },
    padreboton:{
        alignItems:'center'
    },
    cajaboton:{
        backgroundColor:'#00B2FF',
        borderRadius:15,
        paddingVertical:20,
        width:'100%',
        marginTop:85,
        height: 60,
    },
    textoboton:{
        textAlign:'center',
        color:'black',
        fontWeight: 'semibold',
        fontSize: 18,
    },
    registrarse:{
        color: '#ffffff',

    },
});