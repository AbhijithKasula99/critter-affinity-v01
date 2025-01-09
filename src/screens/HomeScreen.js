import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../styles/colors';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Top Illustration */}
      <Image source={require('../assets/images/Logo.png')} style={styles.topImage} />

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.button, styles.loginButton]}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={[styles.buttonText, styles.loginButtonText]}>Login</Text>
      </TouchableOpacity>

      {/* New.png Illustration */}
      <Image source={require('../assets/images/New.png')} style={styles.middleImage} />

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

  middleImage: {
    width: 290,
    height: 50,
    resizeMode: 'contain',
  },

  bottomImage: {
    position: 'absolute',
    bottom: 0, // Stick to the bottom of the screen
    width: '100%', // Full width of the screen
    height: undefined, // Maintain aspect ratio
    aspectRatio: 4, // Replace with your Bottom.png aspect ratio (width/height)
    resizeMode: 'absolute', // Ensure it fills the width without stretching
  },
});
