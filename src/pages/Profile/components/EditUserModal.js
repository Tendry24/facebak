import React, {useState} from 'react'
import {
    Button,
    Heading,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, useToast
} from "@chakra-ui/react";
import useInput from "../../../hooks/useInput";
import EditUserField from "./EditUserField";
import {colors} from "../../../common/colors";
import {editUser} from "../../../services/fetcher";
import {SelfService} from "../../../services/selfService";
import {StorageProvider} from "../../../services/storage";
import {FaCircleInfo} from "react-icons/fa6";

const EditUserModal = ({isOpen, onClose, user}) => {
    const self = SelfService.get();
    const [username, setUsername, modifyUsername, clearUsername] = useInput(user.username);
    const [email, setEmail, modifyEmail, clearEmail] = useInput(user.email);
    const [bio, setBio, modifyBio, clearBio] = useInput(user.bio);
    const [password, setPassword, modifyPassword, clearPassword] = useInput("");
    const [confirmNewPassword, setConfirmPassword, modifyConfirmPassword, clearConfirmPassword] = useInput("");
    const toast = useToast();
    const merge = (oldUser, newUser) => {
        let result = oldUser;
        newUser.username && (result.username = newUser.username);
        newUser.email && (result.email = newUser.email);
        newUser.bio && (result.bio = newUser.bio);
        newUser.password && (result.password = newUser.password);
        newUser.confirmPassword && (result.confirmPassword = newUser.confirmPassword);

        return result;
    }
    const submitChange = () => {
        editUser(merge(
            self
            ,{
            username,
            email,
            bio,
            password,
            confirmNewPassword
        })).then(res => {
            StorageProvider.setItem("self", {
                ...self,
                ...res.data,
                content: ""
            })
            toast({
                status: "success",
                title: "Info modified",
                duration: 3000,
                isClosable: true
            })
            clearAll();
            onClose();
        }).catch(e => {
            toast({
                status: "error",
                title: "There was an error while submitting changes",
                description: e.response.data.message
            })
        })
    }

    const clearAll = () => {
        clearBio();
        clearUsername();
        clearPassword();
        clearEmail();
        clearConfirmPassword();
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    <Heading>
                        Edit your information
                    </Heading>
                </ModalHeader>
                <ModalBody>
                    <EditUserField
                        value={username}
                        label={"Username"}
                        placeholder={user.username}
                        onChange={modifyUsername}
                    />
                    <EditUserField
                        value={email}
                        label={"Email"}
                        placeholder={user.email}
                        onChange={modifyEmail}
                    />
                    <EditUserField
                        value={bio}
                        label={"Bio"}
                        placeholder={user.bio}
                        onChange={modifyBio}
                    />
                    <EditUserField
                        value={password}
                        label={"Password"}
                        placeholder={"Password"}
                        onChange={modifyPassword}
                        type={"password"}
                        required
                    />
                    <EditUserField
                        value={confirmNewPassword}
                        label={"Confirm Password"}
                        placeholder={"Repeat new password"}
                        onChange={modifyConfirmPassword}
                        type={"password"}
                        required
                    />
                </ModalBody>
                <ModalFooter gap={2}>
                    <Button onClick={() => {
                        clearAll();
                        onClose();
                    }}>
                        Cancel
                    </Button>
                    <Button bgColor={colors.hex.light}
                            onClick={submitChange}
                    >
                        Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
export default EditUserModal
