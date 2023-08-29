import React from 'react'
import {Avatar, AvatarBadge, Box, Flex, Heading, Text} from "@chakra-ui/react";
import {SelfService} from "../../../services/selfService";
import {MdPhotoCamera} from "react-icons/md";
import {colors} from "../../../common/colors";

const AvatarInfo = ({user, isSelf}) => {
    const self = user;

    return (
        <Flex direction={"row"} flexWrap={"nowrap"} alignItems={"center"} gap={5} w={"max-content"}>
            <Avatar size={"2xl"} src={self.photo} name={self.username} >
                {
                    isSelf ? (
                        <AvatarBadge
                            boxSize='1em'
                            bgColor={colors.hex.light}
                            borderWidth={6}
                            _hover={{
                                cursor: "pointer"
                            }}
                        >
                            <MdPhotoCamera size={"20px"}/>
                        </AvatarBadge>
                    ) : ''
                }
            </Avatar>
            <Box>
                <Heading>
                    {self.username}
                </Heading>
                <Text colorScheme={colors.hex.gray}>
                    Joined Facebak at: { self.joinedAt }
                </Text>
            </Box>
        </Flex>
    )
}
export default AvatarInfo
