import { Flex, Avatar, Button, Text, AvatarBadge } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa"
import { colors } from "../../../../common/colors";

const UserRepresentation = ({person}) => {
    return (
        <Button
            width={"100%"}
            height={"3em"}
            transition={"1s"}>
            <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                width={"full"}
                height={"3em"}
                transition={"1s"}
                padding={"2px"}>
                    
                <Avatar name={person.name} height={"2em"} width={"2em"} > 
                    <AvatarBadge boxSize={"1em"} bg={person.isOnLine ? "green" : "gray"} translate="10px" />
                </Avatar>
                <Text w={"full"} textAlign={"center"} alignItems={"center"} justifyContent={"center"} padding={"10px"}>{person.name}</Text>
            </Flex>
        </Button>
    )
};
export default UserRepresentation;