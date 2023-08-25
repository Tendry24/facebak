import './App.css';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import NavBar from './component/NavBar/NavBar';
import MainLayout from "./component/MainLayout";
import {Box, Flex} from "@chakra-ui/react";
import React from "react";
import LeftSider from "./component/LeftSider/LeftSider";
import SimpleSidebar from './component/LeftSider/LeftSider';



function App() {
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
