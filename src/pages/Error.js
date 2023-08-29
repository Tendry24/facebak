import React from 'react'
import {Flex, Heading, Text} from "@chakra-ui/react";
import SignUpLayout from "./SignUp/components/form/SignUpLayout";
import {TbMoodEmpty} from "react-icons/tb";

const Error = () => {
    return (
        /* Please do not touch this Flex,
          it acts as an overlay to make the impression of being on another page
          */
        <Flex
            w={"100vw"}
            h={"100vh"}
            position={"fixed"}
            direction={"column"}
            bg={"white"}
            top={0}
            left={0}
            alignItems={"center"}
            justifyContent={"center"}
        >
            <TbMoodEmpty size={"250px"}/>
            <Heading>
                Page not found
            </Heading>
            <Text>
                This page you are trying to access is not found
            </Text>
        </Flex>
    )
}
export default Error
