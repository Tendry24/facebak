import { Divider, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import UserRepresentation from "./UserRepresentation";
import ContactMenu from "./ContactMenu";
import axios from "axios";
import { TbMoodEmpty } from "react-icons/tb";
import { getAllUsers } from "../../../../services/fetcher";
import { colors } from "../../../../common/colors";

const ListeUser = () => {
    const [listePerson, setListePerson, addInListePerson] = useListeUser([]);

    React.useEffect(() => {
        getAllUsers()
            .then(result=>{
                setListePerson(result.data);
            })
    }, []);

    return (
        <Flex
            flexDir={"column"}
            overflow={"auto"}
            alignItems={"center"}
            height={"100%"}
            padding={"5px"}
            margin={"5px"}
            gap={"8px"}>
            <ContactMenu />
            <Divider color="blue.500" size="lg" />
            {listePerson.map((person, index)=>{
                person.name = person.username;
                return <UserRepresentation key={`${index}-person`} person={person}/>
            })}
            {listePerson.length == 0 ? (<TbMoodEmpty fontSize={"4em"} color={colors.rgba.dark(.5)} />) :(<></>)}
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

export default ListeUser;