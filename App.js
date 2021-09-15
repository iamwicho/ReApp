import React from "react";
import {
  Box,
  Text,
  NativeBaseProvider,
  extendTheme,
  Center,
  Heading,
  Container,
  Stack,
  VStack,
  Button
} from "native-base";

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

  const Example = () => {
    return <Button onPress={() => console.log("hola mundo")}>PRIMARY</Button> 
  }

  return (
    <NativeBaseProvider theme={theme}>
      <Box
        flex={1}
        bg="primary.900"
        alignItems="center"
        justifyContent="center"
      >
        <Text>App</Text>
      </Box>
      <Center flex={8}>
        <Container>
          <Heading> A component library for the <Heading color="emerald.400"> React Ecosystem</Heading>
          </Heading>
          <Heading p={4} fontSize="md" fontWeight="hairline"> NativeBase is a simple, modular and accessible component library
            that gives you building blocks to build you React applications.
          </Heading>
          <VStack alignItems="center" space={3}>
              <Center bg="primary.400" size={16} _text={{color:"white"}}> Text </Center>
              <Center bg="primary.200" size={16} > Text </Center>
              <Center bg="primary.500" size={16} > Text </Center>
          </VStack>
          <Example></Example>

        </Container>
      </Center>
    </NativeBaseProvider>
  );
}
