import React from 'react';
// import * as firebase from "firebase"
// const firebaseConfig = {
//   apiKey: "AIzaSyAHS3KEKpgaUphhctFRSncqOI_-4Dgkdk0",
//   authDomain: "instagram-react-native-dev.firebaseapp.com",
//   projectId: "instagram-react-native-dev",
//   storageBucket: "instagram-react-native-dev.appspot.com",
//   messagingSenderId: "139272592764",
//   appId: "1:139272592764:web:388aa6e702f334825b58f9",
//   measurementId: "G-J68VN7M8XJ"
// };


import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from "./component/auth/Landing";
import Register from "./component/auth/Register";

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Landing">
       <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown:false}}/>
       <Stack.Screen name="Register" component={Register} />
     </Stack.Navigator>
    

   </NavigationContainer>
  );
}



