import {
    Flex,
    Stack,
    useColorModeValue
  } from '@chakra-ui/react'

import SignUpForm from "./SignUpForm"

const SignUp = () => {
    return (
    <Flex
        w={'full'}
        h={'full'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
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

export default SignUp;