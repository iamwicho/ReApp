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

export const InputPassword = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [valuePass, setValue] = useState("");
  const handleClick = () => setIsHidden(!isHidden);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const Submit = () => {
    return <Button onPress={() => console.log(valuePass)}>Login</Button>;
  };
  return (
    <Container>
      <Stack space={5} w="100%" direction="column">
        <Heading pt={4} fontweight="100" size="sm">
          Login for application
        </Heading>
        <Input placeholder="Nickname" />
        <Input
          placeholder="Password"
          type={isHidden ? "text" : "password"}
          onChange={handleChange}
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
        <Text fontsize="xs">Hola {valuePass}</Text>
      </Stack>
    </Container>
  );
};
