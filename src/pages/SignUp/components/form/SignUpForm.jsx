import {
    Button,
    FormControl,
    Stack,
    Avatar,
    Center,
    CircularProgress,
    useToast
} from '@chakra-ui/react'
import { useState } from 'react';

import SignUpInput from './SignUpInput';

import {postUser} from "../../../../services/fetcher";
import {useNavigate} from "react-router-dom";

const SignUpForm = () => {
    const [userName, setUserName, modifyUserName, clearUserName] = useInput("");
    const [email, setEmail, modifyEmail, clearEmail] = useInput("");
    const [password, setPassword, modifyPassword, clearPassword] = useInput("");
    const status = useToast();
    const navigate = useNavigate();

    const [send, setSend] = useState(false);

    const signUp = () => {
        postUser({
            username: userName,
            email: email,
            password: password,
            confirmPassword: password
        }).then(res => {
            status({
                status: "success",
                title: "Signed Up successfully",
                description: "Please now SignIn with your account",
                duration: 3000
            })
            navigate("/login")
        }).catch(e => {
            status(
                {
                    status: "error",
                    title: "An error occured while processing request",
                    description: e.response.data.message,
                    duration: 3000
                }
            )
        })
    }
  
    return (
        <>
            <FormControl id="userName">
                <Stack direction={['column', 'row']} spacing={6} justifyContent={"center"}>
                    <Center>
                        <Avatar size="xl" name={userName}></Avatar>
                    </Center>
                </Stack>
            </FormControl>
            { !send ?
                (
                    <Stack>
                        <SignUpInput
                            id="userName"
                            label="User name"
                            onChange={modifyUserName}
                            placeholder="UserName"
                            type="text"
                            value={userName}/>
                        <SignUpInput
                            id="email"
                            label="Email address"
                            onChange={modifyEmail}
                            placeholder="facebak@example.com"
                            type="email"
                            value={email}/>
                        <SignUpInput
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
                            alignItems={"center"}
                            justifyContent={"center"}
                            flexDir={"row"}>
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
                    onClick={()=>{
                        setSend(true)
                        signUp();
                        setSend(false);
                        }}>
                    {
                        send ?
                        (<CircularProgress isIndeterminate color='green.300' size={"25px"} rigth={0}/>) :
                        (<>Submit</>)
                    }
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

export default SignUpForm;