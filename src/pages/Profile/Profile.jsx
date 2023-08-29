import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue, Flex, Divider,
} from '@chakra-ui/react'
import AvatarInfo from "./components/AvatarInfo";
import AvatarActions from "./components/AvatarActions";
import {SelfService} from "../../services/selfService";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserById} from "../../services/fetcher";

export default function SocialProfileSimple() {
    const {uid} = useParams();
    const self = SelfService.get();
    const isSelf = uid === self.id;
    const [user, setUser] = useState({
        username: "",
        bio: "",
        photo: ""
    });

    useEffect(() => {
        getUserById(uid).then(res => {
            setUser(res.data);
        }).catch(e => {
            console.log(e);
        })
    }, []);


    return (
        <Flex
            direction={"column"}
            flexWrap={"nowrap"}
            w={"full"}
            h={"full"}
            alignItems={"center"}
            m={2}
            p={2}
        >
            <Flex
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                mt={8}
                w={"full"}
                mb={8}
            >
                <AvatarInfo user={user} isSelf={isSelf}/>
                <AvatarActions isSelf={isSelf} user={user}/>
            </Flex>
            <Divider/>
            <Box w={"full"} p={2} mt={6}>
                <Heading size={"lg"}>
                    Bio
                </Heading>
                <Text>
                    {user.bio}
                </Text>
            </Box>
        </Flex>
    )
}
