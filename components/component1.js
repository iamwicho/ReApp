
import React, {useEffect} from "react";
import {useState} from "react";
import { View, Center, NativeBaseProvider, Text, Heading } from 'native-base';
import axios from 'axios';

export  const Component1 = ({navigation}) => 
{
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getData = async () => {
    const response = await axios.post('http://192.168.1.6/Proyects/GitHub/ReApp/index.php')
    setUsers(response.data)
    console.log("USER", users)
    }
    getData()
    
  }, []);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {users.map((user) => (<Heading>Hola 😄, Bienvenido {user.name} </Heading>))}
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
 
