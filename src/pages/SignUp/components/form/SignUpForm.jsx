import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Stack,
    Avatar,
    Center,
    CircularProgress,
    CircularProgressLabel,
    Text
  } from '@chakra-ui/react'
import { useState } from 'react';

import { BsFillSendCheckFill } from "react-icons/bs"
import SignUpInput from './SignUpInput';
import ImgProfile from '../imageProfile/ImgProfil';

import { signUpRequest } from "../../../../services/fetcher";
import { colors } from '../../../../common/colors';
import useInput from '../../../../hooks/useInput';
import { inputIsNull } from '../../../../services/utils';

const SignUpForm = () => {
    const [userName, setUserName, modifyUserName, clearUserName] = useInput("");
    const [email, setEmail, modifyEmail, clearEmail] = useInput("");
    const [password, setPassword, modifyPassword, clearPassword] = useInput("");
    const [imagePath, setImagePath] = useState("");

    const [send, setSend] = useState(false);
    const [correct, setCorrect] = useState(true);
  
    return (
        <>
            <FormControl id="userName">
                <Stack direction={['column', 'row']} spacing={6} justifyContent={"center"}>
                    <Center>
                        <ImgProfile
                            userName={userName}
                            imagePath={imagePath}
                            setImagePath={setImagePath}
                            />
                    </Center>
                </Stack>
            </FormControl>
            { !send ?
                (
                    <Stack
                        onKeyDown={(e)=>{
                            if (e.key == "Enter"){
                                submitAction(userName, password, email, setSend, setCorrect)
                            }
                        }}>
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
                    bg={colors.rgba.alert(1)}
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
                    bg={
                        !send ?
                        (colors.rgba.light(1)) :
                        (colors.rgba.gray(1))
                    }
                    color={'white'}
                    w="full"
                    _hover={{
                        bg: 'blue.500'
                    }}
                    onClick={()=>submitAction(userName, password, email, setSend, setCorrect)}
                        alignItems={"center"}>
                    
                    {
                        send ?
                        (<CircularProgress isIndeterminate
                            color='green.300'
                            size={"1.25em"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            />) : 
                        (<><Text>Submit</Text></>)
                    }
                </Button>
            </Stack>
            {
                !correct ? 
                (<Stack
                    bg={colors.rgba.alert(.7)}
                    w={"full"}
                    h={"full"}
                    justifyContent={"center"}
                    alignContent={"center"}
                    borderRadius={"2xl"}
                    >
                    <Text
                        textAlign={"center"}>
                        Il manque des elements dans vos entrées
                    </Text>
                </Stack>) : (
                    <></>
                )
            }
        </>
    )
};

const submitAction = (userName, password, email, setSend, setCorrect) => {
    if (!inputIsNull(userName) && !inputIsNull(password) && !inputIsNull(email))
        setSend(true)
    else {
        setCorrect(false);
        setTimeout(()=>{
            setCorrect(true);
        }, 5000)
    }
    setTimeout(()=>{
    }, 1000)
};

export default SignUpForm;