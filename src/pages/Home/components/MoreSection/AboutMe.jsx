import { Divider, Flex, Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";

// Pour les trois points
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import { BiEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";


const AboutMe = () => {
    const [pesronAttrubue, setPesronAttrubue] = React.useState([
        {name: "Name", value: "Axel"},
        {name: "Biographie", value: "Est un etudiant en Web2 en L1, Travail dur et bien, Est employée"},
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
            <Flex
                justifyContent={"space-around"}
                alignItems={"center"}
                width={"100%"}>
                <Heading size={"sm"}>About Me</Heading>
                <Menu>
                    <MenuButton as={IconButton} icon={<BsThreeDots />} variant="ghost" />
                    <MenuList>
                        <MenuItem icon={<BiEditAlt />} onClick={() => console.log('Modifier')}>Modifier</MenuItem>
                        <MenuItem icon={<AiOutlineDelete />} onClick={() => console.log('Supprimer')}>Supprimer</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Divider color="blue.500" size="lg" />
            {pesronAttrubue.map(attribu=>{ 
                return <Text ><Text fontSize={"18px"} textDecoration={"underline"}>{attribu.name} :</Text>{attribu.value}</Text>
            })}
        </Flex>
    )
};
export default AboutMe;