import React from 'react';
import { View, Center, NativeBaseProvider, Text } from 'native-base';


export  const Component1 = ({navigation}) => 
{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );

}

export default () =>
{
  return (
    <NativeBaseProvider>
        <Center flex={1} px="3">
            <Component1/>
        </Center>
    </NativeBaseProvider>
  )
}
 
