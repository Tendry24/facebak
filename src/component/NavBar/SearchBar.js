import React from 'react'
import {Box, Button, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";
import {colors} from "../../common/colors";
import {FiSearch} from "react-icons/fi";

const SearchBar = () => {
    return (
        <Box>
            <InputGroup
                w={"fit-content"}
                borderColor={colors.hex.base}
                _focus={{
                    border: "none"
                }}
            >
                <InputLeftElement>
                    <FiSearch/>
                </InputLeftElement>
                <Input
                    placeholder={"Search on Facebak"}
                    _hover={{
                        borderColor: colors.hex.base
                    }}
                />
                <InputRightElement
                    w={"fit-content"}
                    padding={"4px"}
                >
                    <Button
                        size={"sm"}
                    >
                        Search
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Box>
    )
}
export default SearchBar
