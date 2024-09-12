import {StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import Login from './screens/login'


function App(){
return(
  <Login/>
);
}
export default App



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
