import React, {useState} from 'react'
import {
    Button, Editable, EditableInput, EditablePreview, EditableTextarea, Flex,
    Heading,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, useToast,
} from "@chakra-ui/react";
import {StorageProvider} from "../../../../../services/storage";
import {colors} from "../../../../../common/colors";
import {sendPost} from "../../../../../services/fetcher";

const PostEditorModal = ({disclosure, setPosts}) => {
    const [post, setPost] = useState({
        title: "",
        content: "",
        userId: StorageProvider.getItem("self").id
    });

    const toast = useToast();

    return (
        <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose}>
            <ModalOverlay/>
            <ModalContent width={"70%"} maxW={"800px"}>
                <ModalHeader>
                    <Heading>New post</Heading>
                </ModalHeader>
                <ModalBody>
                    <Flex direction={"column"}
                        gap={2}
                    >
                        <Editable
                            placeholder={"Post Title"}
                            fontSize={"2xl"}
                            fontWeight={"bold"}
                            borderWidth={2}
                            borderColor={colors.hex.light}
                            p={2}
                            borderRadius={8}
                            value={post.title}
                            onChange={(nextValue) => {
                                setPost(prevState => ({
                                    ...prevState,
                                    title: nextValue
                                }))
                            }}
                        >
                            <EditablePreview/>
                            <EditableInput/>
                        </Editable>
                        <Editable
                            placeholder={"Put your content here"}
                            bgColor={colors.hex.light}
                            minH={"250px"}
                            p={2}
                            borderRadius={8}
                            value={post.content}
                            onChange={(nextValue) => {
                                setPost(prevState => ({
                                    ...prevState,
                                    content: nextValue
                                }))
                            }}
                        >
                            <EditablePreview/>
                            <EditableTextarea minH={"250px"}/>
                        </Editable>
                    </Flex>
                </ModalBody>
                <ModalFooter
                    justifyContent={"end"}
                    flexWrap={"nowrap"}
                    gap={2}
                    w={"100%"}
                >
                    <Button onClick={() => {
                        disclosure.onClose()
                    }}>
                        Cancel
                    </Button>
                    <Button bgColor={colors.hex.light}
                        onClick={()=> {
                            sendPost(post).then(res => {
                                toast({
                                    title: "Posted successfully",
                                    status: "success",
                                    duration: 3000,
                                    isClosable: true
                                });
                                setPosts(prevState => ([
                                    res.data,
                                    ...prevState
                                ]))
                                disclosure.onClose();
                            }).catch(e => {
                                toast({
                                    title: "An error occurred",
                                    description: e.response.data.message,
                                    status: "error",
                                    duration: 3000,
                                    isClosable: true
                                })
                            })
                        }}
                    >
                        Submit
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
export default PostEditorModal
