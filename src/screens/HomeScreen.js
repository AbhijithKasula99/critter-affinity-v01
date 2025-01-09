import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../styles/colors';
import Button from '../components/Button';
import DividerWithText from '../components/DividerwithText'; // Importing the reusable divider component

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Illustration */}
      <Image source={require('../assets/images/Logo.png')} style={styles.topImage} />

      {/* Login Button */}
      <Button
        text="Login"
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.loginButton}
        textStyle={styles.loginButtonText}
      />

      {/* Divider with Text */}
      <DividerWithText text="New to PetConnect?" />

      {/* Create PetConnect Account Button */}
      <TouchableOpacity style={[styles.button, styles.signupButton]}>
        <Text style={[styles.buttonText, styles.signupButtonText]}>Create PetConnect Account</Text>
      </TouchableOpacity>

      {/* Bottom Illustration */}
      <Image source={require('../assets/images/Bottom.png')} style={styles.bottomImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: colors.background,
  },

  topImage: {
    width: 450,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 160,
  },

  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButton: {
    backgroundColor: colors.primary,
    marginBottom: 5,
  },

  signupButton: {
    backgroundColor: colors.lightBackground,
    borderWidth: 2,
    borderColor: colors.primary,
    marginTop: 10,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  loginButtonText: {
    color: colors.lightText,
  },

  signupButtonText: {
    color: colors.primary,
  },

  bottomImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: undefined,
    aspectRatio: 4,
    resizeMode: 'absolute',
  },
});
