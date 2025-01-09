import React, { useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
} from 'react-native';
import { colors } from '../styles/colors';
import Button from '../components/Button';
import DividerWithText from '../components/DividerwithText';
import SocialButtons from '../components/SocialButtons'; // Import the SocialButtons component

export default function LoginScreen({ navigation }) {
  const logoSize = useRef(new Animated.Value(1)).current; // Logo size animation
  const logoPosition = useRef(new Animated.Value(0)).current; // Logo position animation

  useEffect(() => {
    // Start animations on mount
    Animated.parallel([
      Animated.timing(logoSize, {
        toValue: 0.75,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(logoPosition, {
        toValue: -230, // Move logo up
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Animated Logo */}
      <Animated.Image
        source={require('../assets/images/Logo.png')}
        style={[
          styles.logo,
          {
            transform: [
              { scale: logoSize }, // Scale animation
              { translateY: logoPosition }, // Position animation
            ],
          },
        ]}
      />

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="rgba(49, 55, 55, 1)"
          style={styles.input}
        />
        <View style={styles.animatedLine} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="rgba(49, 55, 55, 1)"
          style={styles.input}
          secureTextEntry
        />
        <View style={styles.animatedLine} />
      </View>

      {/* Forgot Password Button */}
      <Button
        text="Forgot Password?"
        onPress={() => console.log('Forgot Password Pressed')} // Replace with actual navigation
        style={styles.forgotPasswordButton}
        textStyle={styles.forgotPasswordText}
      />

      {/* Login Button */}
      <Button
        text="Login"
        onPress={() => console.log('Login Pressed')} // Replace with actual navigation
        style={styles.loginButton}
        textStyle={styles.loginButtonText}
      />

      {/* Divider with Text */}
      <DividerWithText text="Or continue with" />

      {/* Social Buttons */}
      <SocialButtons />

      {/* New User Text and Sign Up Button */}
      <View style={styles.signUpContainer}>
        <Text style={styles.newUserText}>New user?</Text>
        <Button
          text="Sign Up"
          onPress={() => navigation.navigate('SignUpScreen')} // Navigate to SignUpPage
          style={styles.signUpButton}
          textStyle={styles.signUpButtonText}
        />
      </View>

      {/* Bottom Illustration */}
      <Image source={require('../assets/images/Bottom2.png')} style={styles.bottomImage} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  logo: {
    width: 450,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 0,
  },
  inputContainer: {
    width: '80%',
    marginTop: -170,
  },
  input: {
    fontSize: 16,
    color: colors.text, // 313737
    paddingVertical: 5,
    borderBottomWidth: 0.45,
    paddingBottom: 20,
  },
  animatedLine: {
    height: 5,
    backgroundColor: colors.text,
    marginBottom: 10,
    width: '100%',
  },
  forgotPasswordButton: {
    backgroundColor: 'transparent', // No background
    marginTop: -10, // Space below the input fields
    paddingBottom: 0,
    marginLeft: 240,
  },
  forgotPasswordText: {
    color: colors.general,
    textDecorationLine: 'none', 
    fontSize: 14,
    fontWeight: 'normal',
  },
  loginButton: {
    backgroundColor: colors.primary,
    marginTop: 25,
  },
  loginButtonText: {
    color: colors.lightText,
  },
  signUpContainer: {
    flexDirection: 'row', // Align "New user?" and "Sign Up" horizontally
    alignItems: 'center', // Vertically align items
    justifyContent: 'flex-start', // Align items to the left
    marginTop: 10,
    width: '80%', // Ensure it aligns with the input fields
  },
  newUserText: {
    fontSize: 14,
    color: colors.general1, // 313737
    marginRight: 5,
  },
  signUpButton: {
    width: 50,
    backgroundColor: 'transparent', // No background or border
  },
  signUpButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
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