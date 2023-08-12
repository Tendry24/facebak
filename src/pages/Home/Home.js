import React, {createContext, useState} from 'react'
import {Box, Flex} from "@chakra-ui/react";
import NewsFeed from "./components/NewsFeed/NewsFeed";

let PostContext = null;
const Home = () => {
    const [posts, setPosts] = useState([]);
    PostContext = createContext(null);
    return (
        <PostContext.Provider value={{
            posts,
            setPosts
        }}>
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
        </PostContext.Provider>
    )
}
export default Home;
export {
    PostContext
}