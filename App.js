import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';


export default function App() {
  const screenWidth = Dimensions.get('window').width; // Get screen width

  return (
    <View style={styles.container}>
      {/* Centered Logo */}
      <Image 
        source={require('./assets/Logo.png')} 
        style={styles.logo}
      />

      {/* Bottom Image */}
      <Image 
        source={require('./assets/Bottom.png')} 
        style={[styles.bottomImage, { width: screenWidth }]} 
      />

      {/* Login Button */}
      <TouchableOpacity style={[styles.button, styles.loginButton]}>
        <Text style={[styles.buttonText, styles.loginButtonText]}>Login</Text>
      </TouchableOpacity>

      {/* New.png Image */}
      <Image source={require('./assets/New.png')} style={styles.image} />

      {/* Create PetConnect Account Button */}
      <TouchableOpacity style={[styles.button, styles.signupButton]}>
        <Text style={[styles.buttonText, styles.signupButtonText]}>Create PetConnect Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F7FFFF',
  },

  logo: {
    width: 150 * 1.5, 
    height: 150 * 1.5, 
    resizeMode: 'contain', 
    transform: [{ translateY: -70 }], 
  },

  bottomImage: {
    position: 'absolute',
    bottom: 0, // Stick to the very bottom
    height: 100, 
    resizeMode: 'contain', 
  },

  button: {
    width: '80%', // Button width relative to the screen width
    paddingVertical: 15, // Button height
    borderRadius: 30, // Rounded corners
    alignItems: 'center', 
    justifyContent: 'center', 
    marginVertical: 1, 
  },

  loginButton: {
    backgroundColor: '#00A4AA',
  },

  signupButton: {
    backgroundColor: '#F7FFFF',
    borderWidth: 2,
    borderColor: '#00A4AA',
  },

  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  loginButtonText: {
    color: '#F7FFFF', // Text color for Login button
  },

  signupButtonText: {
    color: '#00A4AA', // Text color for Sign Up button
  },

  image: {
    width: 350, // Adjust the width of the image
    height: 50, // Adjust the height of the image
    resizeMode: 'contain', // Ensures the image maintains aspect ratio
    marginVertical: 20, // Spacing above and below the image
  },
});
