import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Clases from './screens/clases';
import Notificaciones from './screens/notificaciones';
import User from './screens/user';
import Login from './screens/login';
import Register from './screens/register';
import Recuperar from './screens/recuperar';
import { NavigationContainer } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Tabs.Screen name='Myclases' component={Clases} options={{ headerShown: false }} />
      <Tabs.Screen name='Notificaciones' component={Notificaciones} options={{ headerShown: false }} />
      <Tabs.Screen name='User' component={User} options={{ headerShown: false }} />
    </Tabs.Navigator>
  );
}

function Mavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
      <Stack.Screen name='Recuperar' component={Recuperar} options={{ headerShown: false }} />
      <Stack.Screen name='MyTabs' component={MyTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Mavigation />
    </NavigationContainer>
  );
}
