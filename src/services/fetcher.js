import axios from "axios";

const fetch = axios.create({
    baseURL: "http://localhost:8080"
});

const getAllUsers = async () => {
    return await fetch.get("/users");
}

const getAllPosts = async () => {
    return await fetch.get("/posts")
}

const getUserById = async (id) => {
    return await fetch.get(`/users/${id}`)
}

const getPostComments = async (postId) => {
    return await fetch.get(`/posts/${postId}/comments`)
}


export {
    getAllPosts,
    getAllUsers,
    getUserById,
    getPostComments
}