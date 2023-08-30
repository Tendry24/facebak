import React from 'react'
import {Avatar, Card, Input, useDisclosure} from "@chakra-ui/react";
import {StorageProvider} from "../../../../../services/storage";
import PostEditorModal from "./PostEditorModal";
import {SelfService} from "../../../../../services/selfService";

const AddPost = ({setPosts}) => {
    const self = SelfService.get();
    const {isOpen, onClose, onOpen} = useDisclosure();
    return (
        <>
            <Card
                w={"95%"}
                alignItems={"center"}
                justifyContent={"center"}
                m={2}
                p={2}
                direction={"row"}
                flexWrap={"nowrap"}
                gap={2}
            >
                <Avatar name={self.username} src={self.photo}/>
                <Input readOnly _hover={{
                    cursor: "pointer"
                }}
                       placeholder={"What's on your mind ? ..."}
                       onClick={onOpen}
                />
            </Card>
            <PostEditorModal disclosure={{isOpen, onClose}} setPosts={setPosts}/>
        </>
    )
}
export default AddPost
