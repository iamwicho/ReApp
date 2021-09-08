import React from "react"
import { Box, Text, NativeBaseProvider, extendTheme } from "native-base"

export default function App (){
  const theme = extendTheme({
    colors :{
      primary : {
        50:'#c70aff',
        100:'#FF5733',
        200:'#45FF33',
        300:'#33FFE3',
        400:'#333CFF',
        500:'#B333FF',
        600:'#FF33E5',
        700:'#F052DC',
        800:'#F05275',
        900:'#5282F0'
      }
    } 
  })

  return (
    <NativeBaseProvider theme={theme}>
      <Box flex = {1} bg="primary.900" alignItems="center" justifyContent="center" >
        <Text>se abre una app</Text>
      </Box>
      <Box flex = {2} bg="primary.500" p={4} >
        <Text>se abre una app</Text>
      </Box>
    </NativeBaseProvider>
  );
}