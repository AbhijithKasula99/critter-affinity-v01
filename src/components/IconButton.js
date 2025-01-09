import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';

export default function IconButton({ text, icon, onPress, iconStyle, textStyle, buttonStyle }) {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Image source={icon} style={[styles.icon, iconStyle]} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // White background
    borderWidth: 1, // Border for the button
    borderColor: '#ccc', // Light gray border
    borderRadius: 30,
  },
  icon: {
    resizeMode: 'contain',
    marginRight: 5, // Space between icon and text
    marginLeft: 20, 
  },
  text: {
    fontSize: 8, // Text height fixed to 8 as per requirements
    fontWeight: 'bold',
    color: '#313737',
  },
});
