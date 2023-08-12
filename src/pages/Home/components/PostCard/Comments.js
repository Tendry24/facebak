import React, {useEffect, useState} from 'react'
import {Avatar, Box, Flex, Heading, Skeleton, SkeletonCircle, SkeletonText, Text} from "@chakra-ui/react";
import {BsFillCircleFill} from "react-icons/bs";
import {colors} from "../../../../common/colors";
import {getUserById} from "../../../../services/fetcher";

const Comments = ({
    isLoaded,
    user,
    comment,
    date
                  }) => {
    return (
        <Flex gap={2} flexWrap={"nowrap"}>
            <SkeletonCircle isLoaded={isLoaded}>
                <Avatar name={user.username} src={user.photo} size={"sm"}/>
            </SkeletonCircle>
            <Box
                borderWidth={"2px"}
                borderRadius={"md"}
                padding={4}
            >
                <Skeleton
                    isLoaded={isLoaded}
                    w={"fit-content"}
                    lineHeight={4}
                >
                    <Flex
                        flexDir={"row"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        flexWrap={"nowrap"}
                        gap={2}
                        width={"fit-content"}
                    >
                        <Heading as={"h3"} size={"sm"}>{user.username}</Heading>
                        <BsFillCircleFill
                            color={colors.rgba.gray(.6)}
                            size={"5px"}
                            style={{
                                marginBottom: "5px"
                            }}
                        />
                        <Text color={colors.hex.gray}>{date}</Text>
                    </Flex>
                </Skeleton>
                <SkeletonText
                    noOfLines={2}
                    skeletonHeight={4}
                    mt={2}
                    isLoaded={isLoaded}
                >
                    <Text>
                        {comment}
                    </Text>
                </SkeletonText>
            </Box>
        </Flex>
    )
}
export default Comments
