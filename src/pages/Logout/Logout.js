import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import {StorageProvider} from "../../services/storage";
import {effect} from "@chakra-ui/react";

const Logout = () => {
    const navigate = useNavigate();
    StorageProvider.deleteItem("self");

    useEffect(() => {
       navigate("/login")
    }, []);

    return (
        <div>Logout</div>
    )
}
export default Logout
