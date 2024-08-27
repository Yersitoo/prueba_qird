import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import myImage from '../assets/fondo_home.png';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';


export default function Home(props) {
  return (
    <View style={styles.padre}>
      <View style={styles.billetera}>
        <Text style={styles.creditos}>Tus Creditos:</Text>
      </View>
      <View style={styles.wod}>
        <Text style={styles.wodtext}>Trabajo del día:</Text>
      </View>
      <View style={styles.wod}>
        <Text style={styles.wodtext}>Próxima clase:</Text>
      </View>
      <View style={styles.imagen}>
        <Image source={myImage} />
      </View>
      <View style={styles.barraInferior}>
        <TouchableOpacity style={styles.botonBarra} onPress={() => props.navigation.navigate('Home') }>
          <Image source={img1} style={styles.img1} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonBarra} onPress={() => props.navigation.navigate('Clases')}>
          <Image source={img2} style={styles.img2} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonBarra} onPress={() => props.navigation.navigate('Clases')}>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonBarra} onPress={() => props.navigation.navigate('Notificaciones')}>
        <Image source={img4} style={styles.img4} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonBarra5} onPress={() => props.navigation.navigate('User')}>
        <Image source={img5} style={styles.img5} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    justifyContent: 'top',
    alignItems: 'center',
  },
  imagen: {
    width: '50%',
    height: '20%',
    marginTop: '15%',
    alignItems: 'center',
  },
  billetera: {
    width: '90%',
    height: '7.5%',
    backgroundColor: '#1e1d1d',
    marginTop: '25%',
    borderRadius: 15,
    textAlign: 'left',
  },
  creditos: {
    color: 'white',
    paddingTop: '5%',
    fontSize: 24,
    paddingLeft: '10%',
    fontWeight: 'semibold',
  },
  wod: {
    width: '90%',
    height: '10%',
    backgroundColor: '#333333',
    marginTop: '10%',
    borderRadius: 15,
  },
  wodtext: {
    color: '#cccccc',
    paddingTop: '4%',
    fontSize: 16,
    paddingLeft: '10%',
    fontWeight: 'semibold',
  },
  barraInferior: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    backgroundColor: '#1e1e1e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '8%',
  },
  botonBarra: {
    width: '20%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#847D7D',
    marginTop: '2%',
  },
  botonBarra5: {
    width: '20%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '1.5%',
  },
  img1:{
    height:'65%',
    width:'50%',
    marginBottom:'20%',
  },
  img2:{
    height: '50%',
    width: '60%',
    marginBottom: '20%',
  },
  img4:{
    height: '65%',
    width: '50%',
    marginBottom: '25%',
  },
  img5:{
    height: '65%',
    width: '50%',
    marginBottom: '23%',
  },
});