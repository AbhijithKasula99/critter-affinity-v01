import React, { useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Animated,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import { colors } from '../styles/colors';
import Button from '../components/Button';

export default function LoginScreen({ navigation }) {
  const logoSize = useRef(new Animated.Value(1)).current; // Logo size animation
  const logoPosition = useRef(new Animated.Value(0)).current; // Logo position animation
  const emailLineWidth = useRef(new Animated.Value(0)).current; // Email line animation
  const passwordLineWidth = useRef(new Animated.Value(0)).current; // Password line animation

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

      {/* Bottom Illustration */}
      <Image source={require('../assets/images/Bottom.png')} style={styles.bottomImage} />

      {/* Login Button */}
      <Button
        text="Login"
        onPress={() => console.log('Login Pressed')} // Replace with actual navigation
        style={styles.loginButton}
        textStyle={styles.loginButtonText}
      />
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
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: undefined,
    aspectRatio: 4,
    resizeMode: 'contain', // Correct resizeMode
  },
  loginButton: {
  backgroundColor: colors.primary,
  color: colors.lightText,
  marginTop: 55,
  },
});
