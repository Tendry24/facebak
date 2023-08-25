import {
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'

const SignUpInput = ({id, label, placeholder, type, value ,onChange}) => {
    return (
        <FormControl id={id} isRequired>
            <FormLabel>{label}</FormLabel>
            <Input
                placeholder={placeholder}
                _placeholder={{ color: 'gray.500' }}
                type={type}
                value={value}
                onChange={onChange}
            />
        </FormControl>
    )
};

export default SignUpInput;