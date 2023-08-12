import React from 'react'
import {
    Avatar, Box, Button, Flex,
    Heading, Input,
    InputGroup,
    InputLeftElement, InputRightElement, Modal,
    ModalBody, ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Textarea
} from "@chakra-ui/react";
import {colors} from "../../../../common/colors";
import {IoSend, IoClose} from "react-icons/io5";

const CommentsModal = ({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent bgColor={colors.hex.light}>
                <ModalHeader>
                    <Heading>Comments</Heading>
                    <ModalCloseButton>
                        <IoClose size={"25px"}/>
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    All comments goes here
                </ModalBody>
                <ModalFooter
                    w={"100%"}
                    h={"60px"}
                >
                    <Flex
                        flexDir={"row"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"100%"}
                        gap={2}
                    >
                        <Box
                            borderColor={"black"}
                            mb={4}
                        >
                            <Avatar name={"Kirisaki_VK"} size={"sm"}/>
                        </Box>
                        <InputGroup
                            mb={4}
                        >
                            <Textarea
                                placeholder={"Write your comments here"}
                                resize={"none"}
                                rows={1}
                            />
                            <InputRightElement
                                w={"fit-content"}
                                padding={1}
                            >
                                <Button
                                    size={"sm"}
                                >
                                    <IoSend/>
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
export default CommentsModal
