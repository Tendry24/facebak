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

const getPostReactions = async (postId) => {
    return await  fetch.get(`/posts/${postId}/reactions`)
}

const postReactions = async (postId, selfId) => {
    return await fetch.post(`/posts/${postId}/reactions`, {
        userId: selfId,
        type: 'LIKE'
    })
}

const postComments = async (postId, selfId, comment) => {
    return await fetch.put(`/posts/${postId}/comments`, {
        content: comment,
        userId: selfId
    })
}

export {
    getAllPosts,
    getAllUsers,
    getUserById,
    getPostComments,
    getPostReactions,
    postReactions,
    postComments
}