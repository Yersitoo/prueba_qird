// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import {ReactNativeAsyncStorage} from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM1wHJFYEFFA0CEpql4uqm-1j-PsD4jSg",
  authDomain: "prueba-b6a45.firebaseapp.com",
  projectId: "prueba-b6a45",
  storageBucket: "prueba-b6a45.appspot.com",
  messagingSenderId: "90636413791",
  appId: "1:90636413791:web:298752f30099e609ce24ea"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase
//usuario
//contraseña