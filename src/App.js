import './App.css';

import NavBar from './component/NavBar/NavBar';
import MainLayout from "./component/MainLayout";
import {Box, Flex} from "@chakra-ui/react";
import React, {createContext, useContext, useEffect, useState} from "react";
import SimpleSidebar from './component/LeftSider/LeftSider';
import {getUserById} from "./services/fetcher";

export const SelfContext = createContext({
    username: "Not Found",
    photo: "photo"
});

function App() {
    const [self, setSelf] = useState({
        username: "user-not_found",
        photo: "user_profile"
    });
    useEffect(() => {
        getUserById("7d54249c-552d-4f56-a298-51c97f2a51b8").then((res) => {
            setSelf(res.data)
        }).catch(e=> console.log(e))
    }, []);
    return (
        <SelfContext.Provider value={self}>
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
        </SelfContext.Provider>
    );
}

export default App;
