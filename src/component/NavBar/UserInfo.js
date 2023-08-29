import React from 'react'
import {Avatar, Box, Flex, Heading, Menu, MenuButton, MenuItem, MenuList, Portal, Text} from "@chakra-ui/react";
import {colors} from "../../common/colors";
import {useNavigate} from "react-router-dom";
import {SelfService} from "../../services/selfService";

const UserInfo = ({username, isActive, src}) => {
    return (
        <Flex
            flexDir={"row"}
            alignItems={"center"}
            gap={2}
            justifyContent={"center"}
        >
            <Flex flexDir={"row"}
                  alignItems={"center"}
                  gap={2}
                  justifyContent={"center"}
            >
                <Avatar name={username} src={src}/>
                <Menu>
                    <MenuButton>
                        <Box mt={2}>
                            <Heading size={"sm"}>{username}</Heading>
                            <Text size={"xs"} color={colors.hex.gray}>
                                {
                                    isActive ? "Online" : "Offline"
                                }
                            </Text>
                        </Box>
                    </MenuButton>
                    <Portal>
                        <MenuList>
                            <MenuItem onClick={() => {
                                window.location = "/profile/" + SelfService.get().id
                            }}>
                                My profile
                            </MenuItem>
                            <MenuItem onClick={() => {
                                window.location = "/logout"
                            }}>
                                Disconnect
                            </MenuItem>
                        </MenuList>
                    </Portal>
                </Menu>
            </Flex>
        </Flex>
    )
}
export default UserInfo
