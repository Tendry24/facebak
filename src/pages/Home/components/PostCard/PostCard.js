import React, {useEffect, useState} from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Flex,
    Avatar,
    Box,
    Heading,
    IconButton,
    Button,
    Text,
    Badge,
    Image,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    useDisclosure
} from "@chakra-ui/react";
import {BsThreeDotsVertical} from "react-icons/bs";
import {BiLike, BiChat} from "react-icons/bi";
import {colors} from "../../../../common/colors";
import CommentsModal from "./CommentsModal";
import {getPostComments, getPostReactions, getUserById, postReactions} from "../../../../services/fetcher";
import {StorageProvider} from "../../../../services/storage"

const PostCard = ({
    title,
    authorId,
    date,
    content,
    postId,
    imageSrc,
    isLoaded
}) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isAuthorLoaded, setIsAuthorLoaded] = useState(false);
    const [author, setAuthor] = useState("");
    const [comments, setComments] = useState([]);
    const [reactions, setReactions] = useState([]);
    const self = StorageProvider.getItem("self")

    useEffect(() => {
        return () => {
            getUserById(authorId).then((res) => {
                setAuthor(res.data);
                setIsAuthorLoaded(true);
            }).catch(e => console.log(e))

            getPostComments(postId).then((res) => {
                setComments(res.data);
            }).catch(e => console.log(e));

            getPostReactions(postId).then((res) => {
                setReactions(res.data.filter(
                    (element) => {
                        return element.type === 'LIKE'
                    }
                ));
            }).catch(e=> console.log(e));
        };
    }, [reactions, comments]);

    const react = () => {
        postReactions(postId, self.id).then(r => {
            setReactions(prevState => [...prevState, r.data])
        }).catch(e=> console.log(e))
    }

    return (
        <>
            <Card
                w={"95%"}
                m={"2"}
                borderWidth={"2px"}
                borderRadius={"lg"}
                borderColor={colors.hex.light}
            >
                <CardHeader>
                    <Flex spacing='4'>
                        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <SkeletonCircle size={"50px"} isLoaded={isAuthorLoaded}>
                                <Avatar src={author.photo} name={author.username} />
                            </SkeletonCircle>
                            <SkeletonText
                                noOfLines={2}
                                spacing={2}
                                skeletonHeight={4}
                                isLoaded={isAuthorLoaded}
                            >
                                <Box>
                                    <Heading size='sm'>{author.username}</Heading>
                                    <Text color={colors.hex.gray}>{date}</Text>
                                </Box>
                            </SkeletonText>
                        </Flex>
                        <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                            icon={<BsThreeDotsVertical />}
                        />
                    </Flex>
                </CardHeader>
                <CardBody>
                    {title && <Heading size={"md"} my={3}>{title}</Heading>}
                    <SkeletonText
                        noOfLines={3}
                        spacing={2}
                        skeletonHeight={5}
                        isLoaded={isLoaded}
                    >
                        <Text>
                            {
                                content
                            }
                        </Text>
                    </SkeletonText>
                </CardBody>
                {
                    imageSrc &&
                    <Skeleton
                        borderRadius={"md"}
                        padding={4}
                        isLoaded={isLoaded}
                    >
                        <Image
                            src={imageSrc}
                            borderRadius={"md"}
                        />
                    </Skeleton>
                }
                <CardFooter
                    justify='center'
                    gap={4}
                    flexWrap='nowrap'
                    sx={{
                        '& > button': {
                            minW: '136px',
                        },
                    }}
                >
                    <Skeleton
                        borderRadius={"md"}
                        w={"48%"}
                        isLoaded={isLoaded}
                    >
                        <Button w={"100%"} flex='1' variant='ghost' bgColor={colors.hex.light} leftIcon={
                            <Flex
                                flexDir={"row"}
                                flexWrap={"nowrap"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                gap={"2"}
                            >
                                {
                                    reactions.length > 0 ?
                                        <Badge>{reactions.length}</Badge>:
                                        ''
                                }
                                <BiLike/>
                            </Flex>
                        }
                            onClick={react}
                        >
                            Like
                        </Button>
                    </Skeleton>
                    <Skeleton
                        borderRadius={"md"}
                        w={"48%"}
                        isLoaded={isLoaded}
                    >
                        <Button w={"100%"} flex='1' variant='ghost' bgColor={colors.hex.light} leftIcon={
                            <Flex
                                flexDir={"row"}
                                flexWrap={"nowrap"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                gap={2}
                            >
                                {
                                    comments.length > 0 ?
                                        <Badge>{comments.length}</Badge>:
                                        ''
                                }
                                <BiChat/>
                            </Flex>
                        }
                            onClick={onOpen}
                        >
                            Comment
                        </Button>
                    </Skeleton>
                </CardFooter>
            </Card>
            <CommentsModal postId={postId} isOpen={isOpen} onClose={onClose} self={self}/>
        </>
    )
}
export default PostCard
