import React, {createContext, useState} from 'react'
import {Box, Flex} from "@chakra-ui/react";
import NewsFeed from "./components/NewsFeed/NewsFeed";

const Home = () => {
    return (
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"row"}
                width={"100%"}
                h={"100%"}
            >
                <NewsFeed/>
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
export default Home;