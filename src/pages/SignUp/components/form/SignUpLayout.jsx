import {
    Flex,
    Stack,
    useColorModeValue,
    Heading,
    Center
  } from '@chakra-ui/react'

import SignUpForm from "./SignUpForm"

const SignUpLayout = () => {
    return (
    <Flex
        w={'full'}
        h={'full'}
      align={'center'}
      justify={'center'}
      flexDir={"column"}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          <Center> 
              Sign Up
          </Center>
      </Heading>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
        transition={"all 1s"}>
        <SignUpForm />
      </Stack>
    </Flex>
  )
}

export default SignUpLayout;