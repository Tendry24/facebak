import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Stack,
    Avatar,
    Center
  } from '@chakra-ui/react'
import { useState } from 'react';

import { BsFillSendCheckFill } from "react-icons/bs"
import SignInInput from './SignInInput';

const SignInForm = () => {
    const [userName, setUserName, modifyUserName, clearUserName] = useInput("");
    const [email, setEmail, modifyEmail, clearEmail] = useInput("");
    const [password, setPassword, modifyPassword, clearPassword] = useInput("");

    const [send, setSend] = useState(false);
  
    return (
        <>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Sign in
            </Heading>
            <FormControl id="userName">
                <FormLabel>User Icon</FormLabel>
                <Stack direction={['column', 'row']} spacing={6} justifyContent={"center"}>
                    <Center>
                    <Avatar size="xl" name={userName}></Avatar>
                    </Center>
                </Stack>
            </FormControl>
            { !send ?
                (
                    <Stack>
                        <SignInInput
                            id="userName"
                            label="User name"
                            onChange={modifyUserName}
                            placeholder="UserName"
                            type="text"
                            value={userName}/>
                        <SignInInput
                            id="email"
                            label="Email address"
                            onChange={modifyEmail}
                            placeholder="facebak@example.com"
                            type="email"
                            value={email}/>
                        <SignInInput
                            id="password"
                            label="Password"
                            onChange={modifyPassword}
                            placeholder="password"
                            type="password"
                            value={password}/>
                    </Stack>) : (
                        <Stack
                            w={"full"}
                            h={"full"}
                            alignItems={"center"}>
                            <BsFillSendCheckFill
                                fontSize={"2em"}
                                color='green'/>
                        </Stack>
                    )
            }
            <Stack spacing={6} direction={['column', 'row']}>
                <Button
                    bg={'red.400'}
                    color={'white'}
                    w="full"
                    _hover={{
                    bg: 'red.500',
                    }}
                    onClick={()=>{
                    if (!send){
                        clearEmail()
                        clearPassword()
                        clearUserName()
                    } else {
                        setSend(false)
                    }
                    }}>
                    Cancel
                </Button>
                <Button
                    bg={'blue.400'}
                    color={'white'}
                    w="full"
                    _hover={{
                    bg: 'blue.500',
                    }}
                    onClick={()=>setSend(true)}>
                    Submit
                </Button>
            </Stack>
        </>
    )
};

function useInput (init) {
    const [Input, setInput] = useState(init);

    const modifyInput = (e) => {
        setInput(e.target.value)
    };

    const clearInput = () => {
      setInput("")
    };
    
    return [Input, setInput, modifyInput, clearInput]
};

export default SignInForm;