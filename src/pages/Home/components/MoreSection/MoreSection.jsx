import { Flex } from "@chakra-ui/react";
import React from "react";
import AboutMe from "./AboutMe";
import ListeUser from "./ListeUser";

const MoreSection = () => {
    return (
        <Flex
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            height={"100%"}>
            <AboutMe />
            <ListeUser />
        </Flex>
    )
};
export default MoreSection;