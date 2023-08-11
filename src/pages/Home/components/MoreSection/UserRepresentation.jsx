import { Flex } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa"

const UserRepresentation = ({person}) => {
    return (
    <Flex
        alignItems={"centre"}
        justifyContent={"space-between"}
        width={"100%"}
        height={"30px"}>
        <Flex
            overflow={"hidden"}
            width={"90%"}>
            {person.name}
        </Flex>
        {person.isOnLine ? (
            <FaCircle style={{ color: 'green', fontSize: '14px' }} width={"10%"} />
        ) : (
            <></>
        )}
    </Flex>
    )
};
export default UserRepresentation;