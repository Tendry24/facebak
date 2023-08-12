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
            .then(e => console.log(e))
            .catch(e => console.log(e));
        console.log(posts)
    }, []);
    return (
        <Flex
            height={"100%"}
            w={"75%"}
            flexDir={"column"}
            overflow={"auto"}
            alignItems={"center"}
        >
            {
                posts.length ?
                    posts.map((e, i) => (
                        <PostCard
                            title={e.title}
                            authorId={e.userId}
                            postId={e.id}
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
