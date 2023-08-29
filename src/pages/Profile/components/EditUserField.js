import React from 'react'
import {FormControl, FormLabel, Input} from "@chakra-ui/react";

const EditUserField = ({id, onChange, value, placeholder, isInvalid, type, label, required}) => {
    return (
        <FormControl id={id} isInvalid={isInvalid} isRequired={required}>
            <FormLabel>{label}</FormLabel>
            <Input type={type} onChange={onChange} placeholder={placeholder} value={value}/>
        </FormControl>
    )
}
export default EditUserField
