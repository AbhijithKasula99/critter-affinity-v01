import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from '../components/IconButton';

export default function SocialButtons() {
  return (
    <View style={styles.container}>
      {/* Apple Button */}
      <IconButton
        text="Apple"
        icon={require('../assets/images/Apple_Logo.png')} 
        onPress={() => console.log('Apple Button Pressed')}
        buttonStyle={{ ...styles.button, backgroundColor: '#1a1a1a' }}
        iconStyle={{ marginLeft: 10, width: 6, height: 8 }} // Logo size for Apple
        textStyle={{ color: '#F7FFFF', width: 33, height: 8 }} // Text size for Apple
      />

      {/* Facebook Button */}
      <IconButton
        text="Facebook"
        icon={require('../assets/images/Facebook.Logo.png')} 
        onPress={() => console.log('Facebook Button Pressed')}
        buttonStyle={{ ...styles.button, backgroundColor: '#1877f2' }}
        iconStyle={{ marginLeft: 16, width: 8, height: 10 }} // Logo size for Facebook
        textStyle={{ color: '#F7FFFF', width: 54, height: 8 }} // Text size for Facebook
      />

      {/* Google Button */}
      <IconButton
        text="Google"
        icon={require('../assets/images/Google_Logo.png')} 
        onPress={() => console.log('Google Button Pressed')}
        buttonStyle={{
          ...styles.button,
          backgroundColor: '#FFFFFF', // White background
          borderWidth: 1, // Add border
          borderColor: 'rgba(63, 71, 71, 0.25)', // 25% opacity border color
        }}
        iconStyle={{ marginLeft: 10, width: 8, height: 10 }} // Logo size for Google
        textStyle={{ color: '#1A1A1A', width: 40, height: 8 }} // Text size for Google
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10, // Adjust spacing above buttons
    paddingHorizontal: 12, // Ensure space between buttons and screen edges
  },
  button: {
    marginHorizontal: 6, // Ensures 12px total gap between buttons
    width: 90, // Button width
    height: 44, // Button height
    borderRadius: 30, // Rounded corners for buttons
    justifyContent: 'center',
    alignItems: 'center',
  },
});
