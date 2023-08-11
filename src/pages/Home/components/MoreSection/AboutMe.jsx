import { Divider, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";

const AboutMe = () => {
    const [pesronAttrubue, setPesronAttrubue] = React.useState([
        {name: "Nom", value: "Rakoto"},
        {name: "Prenom", value: "Axel"},
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
            <Text>About me</Text>
            <Divider color="blue.500" size="lg" />
            {pesronAttrubue.map(attribu=>{
                return <Text>{attribu.name} : {attribu.value}</Text>
            })}
        </Flex>
    )
};
export default AboutMe;