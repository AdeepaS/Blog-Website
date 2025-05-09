import axios from "axios";

const URL = "http://localhost:3000"

export async function getPosts() {
    const responce = await axios.get(`${URL}/posts`)

    if (responce.status ===200){
        return responce.data
    }else{
        return
    }
}

export async function getPost(id) {
    const responce = await axios.get(`${URL}/posts/${id}`)

    if (responce.status ===200){
        return responce.data
    }else{
        return
    }
}

export async function createPost(post) {
    
    const responce = await axios.post(`${URL}/posts`,post)
    return responce
}

export async function updatePost(id,post) {
    const responce = await axios.put(`${URL}/posts/${id}`,post)
    return responce
}

export async function deletePost(id) {
    const responce = await axios.delete(`${URL}/posts`)

    return responce
}

