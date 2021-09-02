import React from "react"
import { Box, Center, NativeBaseProvider } from "native-base"

export const Example = () => {
  return (
    <Box
      bg="primary.400"
      p={4}
      _text={{
        fontSize: "md",
        fontWeight: "bold",
        color: "white",
      }}
    >
      Hola soy una caja 🙂
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
