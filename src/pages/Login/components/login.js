import {
    Alert, AlertDescription, AlertIcon, AlertTitle,
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
    Stack,
    Text,
} from '@chakra-ui/react'
import {Logo} from './Logo'
import {OAuthButtonGroup} from './OAuthButtonGroup'
import {PasswordField} from './PasswordField'
import {Link, useNavigate} from 'react-router-dom';
import {useState} from "react";
import validator from "validator/es";
import {postLogin} from "../../../services/fetcher";
import {StorageProvider} from "../../../services/storage";

export const LoginLayout = () => {
    const navigate = useNavigate()
    const [loginFormData, setLoginFormData] = useState({
        username: "",
        email: "",
        password: "",
        useLocalStorage: true
    });

    const [invalidationState, setInvalidationState] = useState({
        username: false,
        password: false,
        email: false,
        message: ""
    })

    const login = () => {
        const  usernameIsInvalid = (loginFormData.username === "" || loginFormData.username.match(/[A-Za-z]/g) === null);
        const emailIsValid = loginFormData.email === "" || !validator.isEmail(loginFormData.email)
        const passwordIsValid = loginFormData.password === ""
        setInvalidationState({
            username: usernameIsInvalid,
            password: passwordIsValid,
            email: emailIsValid
        })

        if (usernameIsInvalid || emailIsValid || passwordIsValid) {
            setInvalidationState(prevState => ({
                ...prevState,
                    message: "Please Fill out filed correctly"
            }))
            return;
        }

        postLogin(loginFormData).then(res => {
            StorageProvider.setItem("self", res.data)
            navigate("/")
            window.location.reload();
        }).catch(e => {
            console.log(e)
            setInvalidationState(prevState => ({
                ...prevState,
                message: e.response.data.message
            }))
        })
    }

    const handleUsernameChange = (element) =>  {
        setLoginFormData(prevState => ({
            ...prevState,
            username: element.target.value
        }))
    }

    const handleEmailChange = (element) => {
        setLoginFormData(prevState => ({
            ...prevState,
            email: element.target.value
        }))
    }

    const toggleLocalStorage = () => {
        setLoginFormData(prevState => ({
            ...prevState,
            useLocalStorage: !prevState.useLocalStorage
        }))
    }

    return (
        <Container
            maxW="lg"
            py={{
                base: '12',
                md: '24',
            }}
            px={{
                base: '0',
                sm: '8',
            }}
        >
            <Stack spacing="8">
                <Stack spacing="6">
                    <Logo/>
                    <Stack
                        spacing={{
                            base: '2',
                            md: '3',
                        }}
                        textAlign="center"
                    >
                        <Heading
                            size={{
                                base: 'xs',
                                md: 'sm',
                            }}
                        >
                            Log in to your account
                        </Heading>
                        <Text color="fg.muted">
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </Text>
                    </Stack>
                </Stack>
                <Box
                    py={{
                        base: '0',
                        sm: '8',
                    }}
                    px={{
                        base: '4',
                        sm: '10',
                    }}
                    bg={{
                        base: 'transparent',
                        sm: 'bg.surface',
                    }}
                    boxShadow={{
                        base: 'none',
                        sm: 'md',
                    }}
                    borderRadius={{
                        base: 'none',
                        sm: 'xl',
                    }}
                >
                    <Stack spacing="6">
                        <Stack spacing="5">
                            <FormControl isInvalid={invalidationState.email}>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input id="email" type="email" value={loginFormData.email} onChange={handleEmailChange}/>
                            </FormControl>
                            <FormControl isInvalid={invalidationState.username}>
                                <FormLabel htmlFor="username" >Username</FormLabel>
                                <Input id="username" type="text" value={loginFormData.username} onChange={handleUsernameChange}/>
                            </FormControl>
                            <PasswordField loginDataState={[loginFormData, setLoginFormData]}/>
                        </Stack>
                        <HStack justify="space-between">
                            <Checkbox value={loginFormData.useLocalStorage} onChange={toggleLocalStorage}>Remember me</Checkbox>
                            <Button variant="text" size="sm">
                                Forgot password?
                            </Button>
                        </HStack>
                        <Stack spacing="6">
                            <Button onClick={login}>Sign in</Button>
                            <Alert status='error' display={invalidationState.message === "" ? 'none' : 'flex'} flexDirection={"row"}>
                                <AlertIcon />
                                <AlertTitle>{invalidationState.message}</AlertTitle>
                            </Alert>
                            <HStack>
                                <Divider/>
                                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                                    or continue with
                                </Text>
                                <Divider/>
                            </HStack>
                            <OAuthButtonGroup/>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    )
}
