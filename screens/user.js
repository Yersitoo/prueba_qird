import React, {useState} from 'react'
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import img6 from '../assets/img6.png';
import img2 from '../assets/img2.png';
import img4 from '../assets/img4.png';
import img8 from '../assets/img8.png';

export default function Clases (props) {
        return(
            <View style={styles.padre} >
                <View style={styles.container} >
                    <Text style={styles.title} > Usuario </Text>

                </View>

                    <View style={styles.barraInferior}>
                        <TouchableOpacity style={styles.botonBarra} onPress={() => props.navigation.navigate('Home') }>
                            <Image source={img6} style={styles.img6} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botonBarra} onPress={() => props.navigation.navigate('Clases') }>
                            <Image source={img2} style={styles.img7} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botonBarra} onPress={() => props.navigation.navigate('') }>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botonBarra} onPress={() => props.navigation.navigate('Notificaciones')}>
                            <Image source={img4} style={styles.img4} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botonBarra5} onPress={() => props.navigation.navigate('User') }>
                            <Image source={img8} style={styles.img8} />
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
      img4:{
        height: '65%',
        width: '50%',
        marginBottom: '25%',
      },
      img8:{
        height: '73%',
        width: '50%',
        marginBottom: '23%',
      },

});