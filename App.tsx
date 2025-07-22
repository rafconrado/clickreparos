import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import SelectionScreen from './src/screens/SelectionScreen';
import LoginClienteScreen from './src/screens/LoginClientScreen';
import LoginProviderScreen from './src/screens/LoginProviderScreen';
import RegisterClient from './src/screens/RegisterClient';
import RegisterProvider from './src/screens/RegisterProvider';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Selection" component={SelectionScreen} />
        <Stack.Screen name="LoginCliente" component={LoginClienteScreen} />
        <Stack.Screen name="LoginProvider" component={LoginProviderScreen} />
        <Stack.Screen name="RegisterClient" component={RegisterClient} />
        <Stack.Screen name="RegisterProvider" component={RegisterProvider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




