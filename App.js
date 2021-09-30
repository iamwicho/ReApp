import React, { useState } from "react";
import {
  Box,
  Text,
  NativeBaseProvider,
  extendTheme,
  Center,
  Heading,
  Container,
  Stack,
  Button,
  Row,
} from "native-base";
import { InputPassword } from "./components/inputPassword";

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
    <NativeBaseProvider theme={theme}>
      <Box
        flex={1}
        bg="primary.900"
        alignItems="center"
        justifyContent="center"
      >
        <Text>This is my App</Text>
      </Box>
      <Center flex={9}>
        <Container>
          <Heading>
            A component library for the
            <Heading color="emerald.400"> React Ecosystem</Heading>
          </Heading>
          <Heading p={2} fontSize="md" fontWeight="100">
            
            NativeBase is a simple, modular and accessible component library
            that gives you building blocks to build you React applications.
          </Heading>

          <Box alignItems="center">
            <Stack space={3}>
              <InputPassword />
            </Stack>
          </Box>
        </Container>
      </Center>
    </NativeBaseProvider>
  );
}
