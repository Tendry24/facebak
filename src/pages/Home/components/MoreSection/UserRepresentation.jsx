import { Flex } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa"
import { colors } from "../../../../common/colors";

const UserRepresentation = ({person}) => {
    return (
    <Flex
        alignItems={"centre"}
        justifyContent={"space-between"}
        width={"100%"}
        height={"30px"}
        transition={"1s"}
        borderRadius={"2px"}
        padding={"2px"}
        _hover={{background:colors.rgba.base(.5)}}>
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