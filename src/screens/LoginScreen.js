import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Welcome to the Login Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  loginText: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
  },
});
