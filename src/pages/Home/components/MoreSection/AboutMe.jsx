import { Divider, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const AboutMe = () => {
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
        </Flex>
    )
};
export default AboutMe;