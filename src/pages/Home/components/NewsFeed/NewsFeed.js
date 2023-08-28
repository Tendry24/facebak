import React, {useEffect, useState} from 'react'
import {Divider, Flex} from "@chakra-ui/react";
import PostCard from "../PostCard/PostCard";
import {getAllPosts} from "../../../../services/fetcher";
import AddPost from "./components/AddPost";

const NewsFeed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getAllPosts().then((res) => {
            setPosts(res.data);
        })
            .catch(e => console.log(e));
    }, []);
    return (
        <Flex
            height={"100%"}
            w={"75%"}
            flexDir={"column"}
            overflow={"auto"}
            alignItems={"center"}
        >
            <AddPost/>
            <Divider w={"50%"}/>
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
