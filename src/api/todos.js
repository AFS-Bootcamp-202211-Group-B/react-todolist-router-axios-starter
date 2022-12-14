import axios from "axios";

const api = axios.create({
    baseURL: 'https://63996b3b16b0fdad773c1928.mockapi.io/api/v1'
})

const getAllTodos = ()=>api.get("/todos")

export {getAllTodos}