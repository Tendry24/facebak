import React from 'react'
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
import EditUserField from "./EditUserField";
import useInput from "../../../hooks/useInput";
import {colors} from "../../../common/colors";
import {editUser} from "../../../services/fetcher";
import {StorageProvider} from "../../../services/storage";

const ConfirmPasswordModal = ({isOpen, onClose, user, closeParent}) => {
    const [password, setPassword, modifyPassword, clearPassword] = useInput("");
    const toast = useToast();

    const submit = () => {
        const final = {
            ...StorageProvider.getItem("self"),
            photo: user.photo,
            password,
            confirmNewPassword: password
        }

        editUser(final).then(res => {
            StorageProvider.setItem("self", {
                token: final.token,
                ...res.data
            });
            onClose();
            closeParent();
            window.location.reload();
        }).catch(e => {
            console.log(final)
            toast(
                {
                    status: "error",
                    title: "An error occurred",
                    description: e.response.data.message,
                    duration: 3000
                }
            )
        })
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>
                    <Heading>
                        Confirm your password for changes
                    </Heading>
                </ModalHeader>
                <ModalBody>
                    <EditUserField
                        required
                        value={password}
                        label={"Password"}
                        placeholder={"Password"}
                        type={"password"}
                        onChange={modifyPassword}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button bgColor={colors.hex.light}
                        onClick={submit}
                    >
                        Submit
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
export default ConfirmPasswordModal
