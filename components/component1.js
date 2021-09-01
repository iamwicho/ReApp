import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function component1() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola, me llamo Luis Fernando 😄</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#094D92',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
});
