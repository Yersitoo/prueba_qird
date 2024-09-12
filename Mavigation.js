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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const homeName = 'Home';
const clasesName = 'Clases'
const qrName = 'qr'
const notifName = 'Notificaciones'
const userName = 'User'

function MyTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === clasesName) {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === notifName) {
            iconName = focused ? 'bell' : 'bell-outline';
          } else if (route.name === userName) {
            iconName = focused ? 'account' : 'account-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#009BDE',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: {
          backgroundColor: '#1e1e1e', // Fondo oscuro
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          borderWidth: 0.5,
          borderTopWidth: 0.5,
          borderColor: '#cccccc',
          paddingBottom: 5,
        },
        tabBarIndicatorStyle: {
          borderWidth: 1,
          borderColor: '#ccc', // Separaciones entre los iconos de un color gris claro
          height: 2,
        },
      })}
    >
      <Tabs.Screen name={homeName} component={Home} options={{ headerShown: false }} />
      <Tabs.Screen name={clasesName} component={Clases} options={{ headerShown: false }} />
      <Tabs.Screen name={notifName} component={Notificaciones} options={{ headerShown: false }} />
      <Tabs.Screen name={userName} component={User} options={{ headerShown: false }} />
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