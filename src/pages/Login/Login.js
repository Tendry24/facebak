import React from 'react'
import {Flex} from "@chakra-ui/react";
import { LoginLayout } from '../../component/Login/login';

//import { colors } from '../../common/colors'
/*import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'
*/

/*const LinkItems = [
    { name: 'friends', icon: FaUserFriends },
    { name: 'Pages', icon: FaPager },
    { name: 'Groups', icon: BiSolidGroup },
    { name: 'Videos', icon: BiSolidVideos },
    { name: 'Messages', icon: FiMessageSquare },
  ]*/

const Login = () => {
    return (
    /* Please do not touch this Flex,
        it acts as an overlay to make the impression of being on another page
        */
    
        
        <Flex
            w={"100vw"}
            h={"100vh"}
            position={"fixed"}
            bg={"white"}
            top={0}
            left={0}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <LoginLayout/>
        </Flex>

    )
        
    }
    export default Login
