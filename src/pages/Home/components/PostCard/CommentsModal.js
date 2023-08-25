import React, {useEffect, useState} from 'react'
import {
    Avatar, Box, Button, Flex,
    Heading, Input,
    InputGroup,
    InputLeftElement, InputRightElement, Modal,
    ModalBody, ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Skeleton, SkeletonCircle, SkeletonText, Text, Textarea, useBoolean
} from "@chakra-ui/react";
import {colors} from "../../../../common/colors";
import {IoSend, IoClose} from "react-icons/io5";
import {getPostComments} from "../../../../services/fetcher";
import {BiCircle} from "react-icons/bi";
import {BsFillCircleFill} from "react-icons/bs";
import Comments from "./Comments";

const CommentsModal = ({isOpen, onClose, postId}) => {
    const [comments, setComments] = useState([]);
    const [commentIsLoaded, {on}] = useBoolean(false);
    useEffect(() => {
        getPostComments(postId)
            .then(res => {
                setComments(res.data);
                on();
                console.log(comments)
            })
            .catch(e => console.log(e))
    }, []);

    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset={"scale"} isCentered>
            <ModalOverlay/>
            <ModalContent bgColor={colors.hex.light} width={"70%"} maxW={"800px"}>
                <ModalHeader>
                    <Heading>Comments</Heading>
                    <ModalCloseButton>
                        <IoClose size={"25px"}/>
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody maxH={"90%"} overflow={"auto"}>
                    {
                        commentIsLoaded ?
                            comments.length != 0 && comments.map((comment,i) => (
                                <Comments
                                    user={comment.user}
                                    comment={comment.content}
                                    date={comment.updatedAt}
                                    isLoaded={commentIsLoaded}
                                    key={i}
                                />
                            )) :
                            <Comments/>
                    }
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
