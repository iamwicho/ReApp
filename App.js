import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Here we are adding the component.js so we can use it in this js
import Component1 from './components/component1';
//Then we just need to call it using "<Component1/>" in the js part that you what to.

export default function App() {
  return (
    <View style={styles.container}>
      <Component1/>
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
