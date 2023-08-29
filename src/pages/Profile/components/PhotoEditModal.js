import React, {useState} from 'react'
import {
    Avatar,
    Button, Center,
    Flex,
    Heading,
    Modal, ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, useDisclosure
} from "@chakra-ui/react";
import EditUserField from "./EditUserField";
import useInput from "../../../hooks/useInput";
import {colors} from "../../../common/colors";
import ConfirmPasswordModal from "./ConfirmPasswordModal";
import {StorageProvider} from "../../../services/storage";

const PhotoEditModal = ({onClose, isOpen, user}) => {
    const [tempUser, setTempUser] = useState(user);
    const [photoLink, setPhotoLink, modifyPhotoLink, clearPhotoLink] = useInput(user.photo);
    const passwordDisclosure = useDisclosure();

    const submit = () => {
        setTempUser(prevState => ({
            ...prevState,
            token: StorageProvider.getItem("self").token,
            photo: photoLink
        }));

        passwordDisclosure.onOpen();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    <Heading>
                        Edit photo profile
                    </Heading>
                </ModalHeader>
                <ModalBody>
                    <Flex
                        direction={"column"}
                        p={6}
                        alignItems={"center"}
                    >
                        <Avatar name={user.username} size={"2xl"} src={photoLink}/>
                        <Center>
                            <Heading as={"h2"}>Preview</Heading>
                        </Center>
                        <EditUserField
                            value={photoLink}
                            onChange={modifyPhotoLink}
                            placeholder={user.photo}
                            label={"Photo link"}
                            type={"text"}
                        />
                    </Flex>
                </ModalBody>
                <ModalFooter gap={2}>
                    <Button onClick={onClose}>
                        Cancel
                    </Button>
                    <Button bgColor={colors.hex.light} onClick={submit} >
                        Submit
                        <ConfirmPasswordModal
                            isOpen={passwordDisclosure.isOpen}
                            onClose={passwordDisclosure.onClose}
                            user={tempUser}
                            closeParent={onClose}
                        />
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
export default PhotoEditModal
