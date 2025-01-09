import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'; // Import HomeScreen
import LoginScreen from './src/screens/LoginScreen'; // Import LoginScreen
import SignUpScreen from './src/screens/SignUpScreen'; // Import SignUpScreen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen" // Set HomeScreen as the initial route
        screenOptions={{
          headerStyle: { backgroundColor: '#00A4AA' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false, title: 'Login' }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false, title: 'Sign Up' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
