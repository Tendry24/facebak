import { Divider, Flex } from "@chakra-ui/react";
import React from "react";

import ContactMenu from "./ContactMenu";
import UserRepresentation from "./UserRepresentation";

const MoreSection = () => {
    const [listePerson, setListePerson] = React.useState([
        {name:"Tendry Axel", isOnLine:true},
        {name:"tendry"},
        {name:"kirisaki"},
    ]);

    return (
        <Flex
            flexDir={"column"}
            overflow={"auto"}
            alignItems={"start"}
            height={"100%"}
            padding={"5px"}
            margin={"5px"}
            gap={"8px"}>
            <ContactMenu />
            <Divider color="blue.500" size="lg" />
            {listePerson.map(person=><UserRepresentation person={person}/>)}
        </Flex>
    )
};
export default MoreSection;