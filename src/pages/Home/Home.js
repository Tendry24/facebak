import React, {createContext, useState} from 'react'
import {Box, Flex} from "@chakra-ui/react";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import MoreSection from './components/MoreSection/MoreSection';

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
                <MoreSection />
            </Flex>
        )
}
export default Home;