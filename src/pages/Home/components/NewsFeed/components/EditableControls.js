import React from 'react'
import {Button, ButtonGroup, IconButton, useEditable} from "@chakra-ui/react";
import {FaCheck, FaCross} from "react-icons/fa";

const EditableControls = () => {

    const {
        isEditing,
        getSubmitButtonProps,
        getCancelButtonProps,
        getEditButtonProps
    } = useEditable();

    return isEditing ? (
            <ButtonGroup>
                <IconButton icon={<FaCheck/>} {...getSubmitButtonProps()}/>
                <IconButton icon={<FaCross/>} {...getCancelButtonProps()}/>
            </ButtonGroup>
        ) :
        (
            <Button {...getEditButtonProps()}>
                Edit
            </Button>
        )
}
export default EditableControls
