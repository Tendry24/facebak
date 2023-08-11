import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
import UserRepresentation from "./UserRepresentation";
import ContactMenu from "./ContactMenu";

const ListeUser = () => {
    const [listePerson, addInListePerson] = useListeUser([
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

function useListeUser (arg) {
    const [listePerson, setListePerson] = React.useState(arg);

    const add = (user) => {
        setListePerson([...listePerson, user])
    };

    return [listePerson, add]

};

export default ListeUser;