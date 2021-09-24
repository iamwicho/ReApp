import React, {useState} from "react";
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
  Pressable,
  Input,
  Icon
} from "native-base";
import {Alert} from "react-native"
import {MaterialIcons} from "@expo/vector-icons"



export default function App() {
  const [message, setMessage] = useState("button")
  const [isHidden, setIsHidden] = useState("password")

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
    return <Button onPress={() => setMessage(message === "button" ? "pressable" : "button")}>PRIMARY</Button> 
  }


  const ExamplePressable = () => {
    return (
      <Pressable p={2} borderWidth={1} onPress={()=>{
        console.log('hello')
      }}
      
      >
        <Text> Hello World!</Text>
      </Pressable>
    )

  }

  const Example_input = () => {
    return(
      <Input 
      placeholder="Default Input"
      type={isHidden}
      InputRightElement={
        <Pressable onPress={() => setIsHidden(isHidden === "Text")} > 
        <Icon 
          as= {<MaterialIcons name="visibility-off"></MaterialIcons>}
          size={5}
          mr="2"
          color="muted.400"
          >
          </Icon>
        </Pressable>
      }
      />
    )
  }

  const Example_input_2 = () => {
    return(
      <Input 
      placeholder="Default Input"
      type="password"
      secureTextEntry={true}
      
      

      InputRightElement={
       <Pressable p={2} borderWidth={1} onPress={() =>{console.log('helllo input 2')}}>

       <Icon 
        as= {<MaterialIcons name="visibility-off"/>}
        size={5}
        >

        </Icon>
        </Pressable>
      }
      />
    )
  }


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
      <Center flex={8}>
        <Container>
          <Heading>A component library for the <Heading color="emerald.400"> React Ecosystem</Heading>
          </Heading>
          <Heading p={4} fontSize="md" fontWeight="100"> NativeBase is a simple, modular and accessible component library
            that gives you building blocks to build you React applications.
          </Heading>

          <Box alignItems="center">

          <Stack space={5} w="100" >
          <Example/>
          <ExamplePressable/>
          <Example_input/>
          <Example_input_2/>
          
          </Stack>
          <Text> {message} </Text>
          </Box>
          


        </Container>
      </Center>
    </NativeBaseProvider>
  );
}