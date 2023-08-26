import React from 'react'
import {
    Button, Editable, EditableInput, EditablePreview, Flex,
    Heading, Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, useEditable
} from "@chakra-ui/react";
import EditableControls from "./EditableControls";

const PostEditorModal = ({disclosure}) => {

    return (
        <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose}>
            <ModalOverlay/>
            <ModalContent width={"70%"} maxW={"800px"}>
                <ModalHeader>
                    <Heading>New post</Heading>
                </ModalHeader>
                <ModalBody>
                    <Editable
                        defaultValue={"Post title"}
                    >
                        <EditablePreview/>
                        <Input as={EditableInput}/>
                        <EditableControls/>
                    </Editable>
                </ModalBody>
                <ModalFooter
                    justifyContent={"end"}
                    flexWrap={"nowrap"}
                    gap={2}
                    w={"100%"}
                >
                    <Button colorScheme={"pink"} onClick={() => {
                        disclosure.onClose()
                    }}>
                        Cancel
                    </Button>
                    <Button>
                        Submit
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
export default PostEditorModal
