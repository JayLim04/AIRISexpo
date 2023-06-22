import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
// import Login from './login';
import { initializeApp } from 'firebase/app';
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyChSNI3537bzlVKxl29lBjutnZZ8IO2EIM",
	authDomain: "airis-e6909.firebaseapp.com",
	databaseURL: "https://airis-e6909-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "airis-e6909",
	storageBucket: "airis-e6909.appspot.com",
	messagingSenderId: "6559941711",
	appId: "1:6559941711:web:ebe2be615868db062b963a",
	measurementId: "G-QQ5H2D5E5W"
  };
  
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default function App() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  return (
    
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput
              style={styles.input}
              onChangeText={text => setName(text)}
              value={name}
              placeholder="Name"
              autoCapitalize="words"
            />
          <View style={styles.lineInput}>
            <TextInput
              style={styles.input}
              onChangeText={text => setPassword(text)}
              value={password}
              placeholder="Password"
              secureTextEntry
            />
            </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: '45',
  }
});
