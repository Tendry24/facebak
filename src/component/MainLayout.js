import React from 'react'
import {Flex} from "@chakra-ui/react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Home/Home";
import SignUp from '../pages/SignUp/components/form/SignUpLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/signUp",
        element: <SignUp/>
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
