import { Divider, Flex, Spinner } from "@chakra-ui/react";
import React, { useState } from "react";
import UserRepresentation from "./UserRepresentation";
import ContactMenu from "./ContactMenu";
import axios from "axios";
import { TbMoodEmpty } from "react-icons/tb";
import { getAllUsers } from "../../../../services/fetcher";
import { colors } from "../../../../common/colors";
import { ilike, inputIsNull } from "../../../../services/utils";
import useInput from "../../../../hooks/useInput";

const ListeUser = () => {
    const [listePerson, setListePerson, addInListePerson] = useListeUser([]);
    const [search, setSearch, modifySearch] = useInput("");

    React.useEffect(() => {
        getAllUsers()
            .then(result=>{
                if (inputIsNull(search)){
                    setListePerson(result.data);
                } else {
                    setListePerson(result.data.filter(v=>ilike(v.username, search)))
                }
            })
            .catch(e => {
                console.log(e);
            })
    }, [search]);

    return (
        <Flex
            flexDir={"column"}
            overflow={"auto"}
            alignItems={"center"}
            height={"100%"}
            padding={"5px"}
            margin={"5px"}
            gap={"8px"}>
            <ContactMenu search={search} modifySearch={modifySearch} />
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