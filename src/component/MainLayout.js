import React from 'react'
import {Flex} from "@chakra-ui/react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
])

const MainLayout = () => {
    return (
        <Flex
            w={"75%"}
            border={"1px"}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <RouterProvider router={router}/>
        </Flex>
    )
}
export default MainLayout
