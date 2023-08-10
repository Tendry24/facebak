import React from 'react'
import {Avatar, Box, Flex, Heading, Text} from "@chakra-ui/react";
import {colors} from "../../common/colors";

const UserInfo = ({ username, isActive, src }) => {
    return (
        <Flex
            flexDir={"row"}
            alignItems={"center"}
            gap={2}
            justifyContent={"center"}
        >
            <Avatar name={username} src={src}/>
            <Box mt={2}>
                <Heading size={"sm"}>{username}</Heading>
                <Text size={"xs"} color={colors.hex.gray}>
                    {
                        isActive ? "Online" : "Offline"
                    }
                </Text>
            </Box>
        </Flex>
    )
}
export default UserInfo
