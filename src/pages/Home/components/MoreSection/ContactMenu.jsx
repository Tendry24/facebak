import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Input } from "@chakra-ui/react";
import { colors } from "../../../../common/colors";

const ContactMenu = () => {
    return (
        <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            width={"100%"}>
            <Text
                width={"40%"}>Contact</Text>          
            <Input width={"40%"}/>
            <IconButton icon={
                <BiSearchAlt
                    width={"20%"}
                    color={colors.rgba.base(1)}
                />
            } aria-label="Boire un café" />
        </Flex>
    )
};
export default ContactMenu;