import {colors} from "../../common/colors";
import {
    Box,
    Flex,
    Text,
    Heading,
    Avatar
} from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";

const NavBar = () => {
    return(
        <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            bgColor={colors.rgba.light(0.7)}
            backdropFilter={"blur(4px)"}
            position={"fixed"}
            w={"100%"}
            h={"60px"}
            padding={3}
            top={0}
        >
            <Box>
                <Heading size={"md"}>Facebak</Heading>
            </Box>
            <SearchBar/>
            <UserInfo username={"Kirisaki VK"} isActive/>
        </Flex>
    )
}

export default NavBar;
