import React from 'react'
import {Flex} from "@chakra-ui/react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import {StorageProvider} from "../services/storage";
import Logout from "../pages/Logout/Logout";
import SocialProfileSimple from "../pages/Profile/Profile";

const PrivateRoute = ({component: Component, ...props}) => {
    // check if the user is logged in
    const isAuthenticated = StorageProvider.getItem("self") !== null;

    return (
        isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Navigate
                to={{
                    pathname: '/login',
                    state: {from: props.location},
                }}
                replace
            />
        )
    )
};

const MainLayout = () => {
    return (
        <Flex
            w={"75%"}
            h={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<PrivateRoute component={Home}/>}/>
                    <Route path={"/profile"} element={<PrivateRoute component={SocialProfileSimple}/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/signup"} element={<SignUp/>}/>
                    <Route path={"/logout"} element={<Logout/>}/>
                </Routes>
            </BrowserRouter>
        </Flex>
    )
}
export default MainLayout
