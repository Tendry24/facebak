import React from 'react'
import {Flex} from "@chakra-ui/react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "signup",
        element: <SignUp/>
    }
])

const MainLayout = () => {
    return (
        <Flex
            w={"75%"}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <RouterProvider router={router}/>
        </Flex>
    )
}
export default MainLayout
