import React, {useContext, useEffect, useState} from 'react'
import {Box, Flex} from "@chakra-ui/react";
import PostCard from "../PostCard/PostCard";
import {getAllPosts} from "../../../../services/fetcher";

const NewsFeed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getAllPosts().then((res) => {
            setPosts(res.data);
        })
    }, []);
    return (
        <Flex
            border={"2px"}
            height={"100%"}
            w={"75%"}
            flexDir={"column"}
            overflow={"auto"}
            alignItems={"center"}
        >
            {
                posts ?
                    posts.map((e, i) => (
                        <PostCard
                            author={e.userId}
                            content={e.content}
                            date={e.updatedAt}
                            key={i}
                            isLoaded
                        />
                    )) : <PostCard/>
            }
        </Flex>
    )
}
export default NewsFeed
