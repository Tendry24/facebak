import './App.css';

import NavBar from './component/NavBar/NavBar';
import MainLayout from "./component/MainLayout";
import {Box, Flex} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";
import SimpleSidebar from './component/LeftSider/LeftSider';
import {getUserById} from "./services/fetcher";
import {StorageProvider} from "./services/storage";


function App() {
    const [self, setSelf] = useState({
        username: "Not Connected",
        photo: "/user.jpg"
    });
    useEffect(() => {
        getUserById("7d54249c-552d-4f56-a298-51c97f2a51b9").then((res) => {
            setSelf(res.data)
            StorageProvider.setItem("self", res.data)
        }).catch(
            e => {
                console.log(e);
                StorageProvider.setItem("self", self)
            }
        )
    }, []);
    return (
        <Box>
            <NavBar/>
            <Flex
                mt={"60px"}
                h={"calc(100vh - 60px)"}
                overflow={"hidden"}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={"row"}
                w={"full"}
                marginTop={"60px"}
            >
                <SimpleSidebar/>
                <MainLayout/>
            </Flex>
        </Box>
    );
}

export default App;
