import { Divider, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import UserRepresentation from "./UserRepresentation";
import ContactMenu from "./ContactMenu";

const ListeUser = () => {
    const [listePerson, setListePerson, addInListePerson] = useListeUser([
        {name:"Tendry Axel", isOnLine:true},
        {name:"tendry"},
        {name:"kirisaki"},
    ]);

    React.useEffect(() => {
        fetchUser(setListePerson)
    }, []);

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
            {listePerson.length == 0 ? (<Spinner margin={"auto"}/>) :(<></>)}
        </Flex>
    )
};

function useListeUser (arg) {
    const [listePerson, setListePerson] = React.useState(arg);

    const add = (user) => {
        setListePerson([...listePerson, user])
    };

    return [listePerson, setListePerson, add]

};

const fetchUser = async (setListePerson) => {
    try {
      const response = await fetch('http://127.0.0.1:8080/users');
      const data = await response.json();
      setListePerson(data);
    } catch (error) {
        console.error(error);
    }
};

export default ListeUser;