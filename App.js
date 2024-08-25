import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/login';
import Home from './screens/home';
import Register from './screens/register';
import Recuperar from './screens/recuperar';



export default function App() {

  const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} 
      options={{
        title: "QIRD",
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: {backgroundColor: "#00B2FF"},
        headerTransparent: 'true',
      }}
      />
      <Stack.Screen name="Home" component={Home} 
      options={{
        title: "HOME",
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: {backgroundColor: "#00B2FF"},
      }}
      />
      <Stack.Screen name="Register" component={Register} 
      options={{
        title: "REGISTER",
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: {backgroundColor: "#00B2FF"},
      }}
      />
      <Stack.Screen name="Recuperar" component={Recuperar} 
      options={{
        title: "RECUPERAR",
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerStyle: {backgroundColor: "#00B2FF"},
      }}
      />
      </Stack.Navigator>
  );
}

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
