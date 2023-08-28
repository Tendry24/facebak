import {colors} from "../../common/colors";
import {
    Box,
    Flex,
    Heading,
} from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import UserInfo from "./UserInfo";
import {SelfService} from "../../services/selfService";

const NavBar = () => {
    const self = SelfService.get();

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
            <UserInfo username={self.username} src={self.photo} isActive/>
        </Flex>
    )
}

export default NavBar;
