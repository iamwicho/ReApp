import React, { useState } from "react";
import {
  Box,
  Text,
  NativeBaseProvider,
  extendTheme,
  Center,
  Heading,
  Container,
  Button,
  Row,
} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Component1 } from "./components/component1";
import { InputPassword } from "./components/inputPassword";

const Stack = createNativeStackNavigator();

export default function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        50: "#c70aff",
        100: "#FF5733",
        200: "#45FF33",
        300: "#33FFE3",
        400: "#333CFF",
        500: "#B333FF",
        600: "#FF33E5",
        700: "#F052DC",
        800: "#F05275",
        900: "#5282F0",
      },
    },
  });

  return (
    <NavigationContainer>

      <NativeBaseProvider theme={theme}>

              <Stack.Navigator>
                <Stack.Screen name="Home" component={InputPassword}/>
                <Stack.Screen name="Details" component={Component1}/>
              </Stack.Navigator>

      </NativeBaseProvider>

    </NavigationContainer>
    
  )
}
