import icon from "./logo192.png";
import {colors} from "../../common/colors";
import {
    Box,
    Flex,
    InputGroup,
    Input,
    InputLeftElement,
    InputRightElement, Button, Text, Heading, Avatar
} from "@chakra-ui/react";
import {FiSearch} from "react-icons/fi";

const navBar = () => {
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
            <Box>
                <InputGroup
                    w={"fit-content"}
                    borderColor={colors.hex.base}
                    _focus={{
                        border: "none"
                    }}
                >
                    <InputLeftElement>
                        <FiSearch/>
                    </InputLeftElement>
                    <Input
                        placeholder={"Search on Facebak"}
                        _hover={{
                            borderColor: colors.hex.base
                        }}
                    />
                    <InputRightElement
                        w={"fit-content"}
                        padding={"8px"}
                    >
                        <Button
                            size={"xs"}
                        >
                            Search
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
            <Flex
                flexDir={"row"}
                alignItems={"center"}
                gap={2}
                justifyContent={"center"}
            >
                <Avatar name={"Kirisaki VK"} />
                <Box mt={2}>
                    <Heading size={"sm"}>Kirisaki VK</Heading>
                    <Text size={"xs"} color={colors.hex.gray}>Online</Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default navBar;
