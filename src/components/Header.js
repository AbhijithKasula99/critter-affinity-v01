import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Divider() {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.dividerLine} />
      <Image source={require('../assets/images/New.png')} style={styles.image} />
      <View style={styles.dividerLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  dividerLine: {
    flex: 1,
    height: 2,
    backgroundColor: 'rgba(49, 55, 55, 0.75)',
  },
  image: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
});
