import React, { useState } from "react";
import {
  Pressable,
  Input,
  Icon,
  Container,
  Stack,
  Heading,
  Text,
  Button,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import axios, { Axios } from 'axios';

export const InputPassword = () => {
  const [isHidden, setIsHidden] = useState(false)
  const [value, setValue] = useState({
    nickname: '',
    password: ''
  })

  const handleClick = () => setIsHidden(!isHidden)

  const handleSubmit = async () => 
  {
    const formData = new FormData();
    formData.append('option','loginQuery')
    formData.append('nickname', value.nickname)
    formData.append('password', value.password)

    const response = await axios.post
    {
      'http://localhost/MovileApp/GitHub/ReApp/index.php',
      formData,
      {headers: {'Content-type': 'multipart/form-data'}}
    }
    console.log(response)
  }
  
  const Submit = () => {
    return <Button width="150px" onPress={handleSubmit}>Login</Button>;
  };

  return (
    <Container>
      <Stack space={2} width="300px" alignItems="center">
        <Heading pt={4} fontweight="100" size="sm">
          Login for application
        </Heading>
        <Input 
          placeholder="Nickname" 
          width="250px"
          onChangeText={(text) => setValue({...value, nickname:text})} />
        <Input
          placeholder="Password"
          width="250px"
          type={isHidden ? "text" : "password"}
          onChangeText={(text) => setValue({...value, password:text})}

          InputRightElement={
            <Pressable p={2} borderWidth={0} onPress={handleClick}>
              <Icon
                as={
                  <MaterialIcons
                    name={isHidden ? "visibility-off" : "visibility"}
                  />
                }
                size={5}
                m={2}
                name="home"
              />
            </Pressable>
          }
        />
        <Submit />
      </Stack>
      
    </Container>
    
  )
}
