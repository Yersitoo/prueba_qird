import React, {useState} from 'react'
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import img6 from '../assets/img6.png';
import img2 from '../assets/img2.png';
import img9 from '../assets/img9.png';
import img5 from '../assets/img5.png';

export default function Notificaciones ({navigation}) {
        return(
            <View style={styles.padre} >
                <View style={styles.container} >
                    <Text style={styles.title} > Notificaciones </Text>

                </View>

                    <View style={styles.barraInferior}>
                        <TouchableOpacity style={styles.botonBarra} onPress={() => navigation.navigate('Home') }>
                            <Image source={img6} style={styles.img6} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botonBarra} onPress={() => navigation.navigate('Clases') }>
                            <Image source={img2} style={styles.img7} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botonBarra} onPress={() => navigation.navigate('') }>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botonBarra} onPress={() => navigation.navigate('Notificaciones')}>
                            <Image source={img9} style={styles.img9} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botonBarra5} onPress={() => navigation.navigate('User') }>
                            <Image source={img5} style={styles.img5} />
                        </TouchableOpacity>
                    </View>
            </View>
        );
}

const styles = StyleSheet.create ({
    padre:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'top',
        backgroundColor: '#0E0E0E'
    },
    container:{
        height: '15%',
        backgroundColor: '#0E0E0E',
        width: '100%',
        marginTop: '20%'
    },
    title:{
        fontSize: 50,
        color: 'white',
        margin: '5%',
    },
    barraInferior: {
        position: 'absolute',
        width: '100%',
        height: 60,
        backgroundColor: '#1e1e1e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '8%',
        bottom: 0,
        alignItems: 'center',
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
      img6:{
        height:'65%',
        width:'50%',
        marginBottom: '20%',
      },
      img7:{
        height: '50%',
        width: '60%',
        marginBottom: '20%',
      },
      img9:{
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