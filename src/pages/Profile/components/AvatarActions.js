import React from 'react'
import {Box, Button, Flex, useDisclosure} from "@chakra-ui/react";
import {colors} from "../../../common/colors";
import {FaUserEdit, FaUserPlus} from "react-icons/fa";
import {HiDotsHorizontal} from "react-icons/hi";
import EditUserModal from "./EditUserModal";

const AvatarActions = ({isSelf, user}) => {
    const {onOpen, onClose, isOpen} = useDisclosure()
    return (
        <Flex flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
        >
            {
                isSelf ? (
                    <>
                        <Button
                            bgColor={colors.hex.light}
                            leftIcon={<FaUserEdit/>}
                            onClick={() => {
                                onOpen()
                            }}
                        >
                            Edit Profile
                        </Button>
                        <EditUserModal onClose={onClose} isOpen={isOpen} user={user}/>
                    </>
                ) : (
                    <>
                        <Button bgColor={colors.hex.light} leftIcon={<FaUserPlus/>} w={"100%"}>
                            Follow
                        </Button>
                        <Button leftIcon={<HiDotsHorizontal/>} w={"100%"}>
                            More
                        </Button>
                    </>
                )
            }
        </Flex>
    )
}
export default AvatarActions
