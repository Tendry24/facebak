import React from 'react'
import {Box, Flex} from "@chakra-ui/react";

const Home = () => {
    return (
        <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDir={"row"}
            width={"100%"}
            h={"100%"}
        >
            <Box
                border={"2px"}
                height={"100%"}
                w={"75%"}
            >
                Newsfeed
            </Box>
            <Box
                border={"2px"}
                height={"100%"}
                w={"25%"}
            >
                More
            </Box>
        </Flex>
    )
}
export default Home
