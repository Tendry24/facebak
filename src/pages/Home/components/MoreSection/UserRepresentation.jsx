import { Flex, Avatar, Button, Text } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa"
import { colors } from "../../../../common/colors";

const UserRepresentation = ({person}) => {
    return (
        <Button
            width={"100%"}
            height={"3em"}
            transition={"1s"}
            padding={"auto"}>
            <Flex
                alignItems={"centre"}
                justifyContent={"space-between"}
                width={"100%"}
                height={"3em"}
                transition={"1s"}
                padding={"2px"}
                margin={"auto"}>
                    
                <Avatar name={person.name} height={"2em"} width={"2em"} />
                <Text textAlign={"center"} alignItems={"center"} justifyContent={"center"} padding={"10px"}>{person.name}</Text>
                {person.isOnLine ? (
                    <FaCircle style={{ color: 'green', fontSize: '10px' }} width={"10%"} />
                ) : (
                    <></>
                )}
        
            </Flex>
        </Button>
    )
};
export default UserRepresentation;