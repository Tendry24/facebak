import React from 'react'
import {Box, Flex} from "@chakra-ui/react";
import PostCard from "../PostCard/PostCard";

const NewsFeed = () => {
    return (
        <Flex
            border={"2px"}
            height={"100%"}
            w={"75%"}
            flexDir={"column"}
            overflow={"auto"}
            alignItems={"center"}
        >
            <PostCard
                author={"Kirisaki VK"}
                content={"Test Component"}
                date={"Today"}
                comments={"15"}
                likes={"60"}
                imageSrc={"https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
                isLoaded
            />
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </Flex>
    )
}
export default NewsFeed
