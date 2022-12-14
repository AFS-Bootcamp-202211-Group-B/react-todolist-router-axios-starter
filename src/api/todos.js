import axios from "axios";

const api = axios.create({
    baseURL: "https://63996b7a16b0fdad773c200d.mockapi.io"
});

const getTodos = () => {
    return api.get("/todos");
};

const postTodos = (data) => {
    return api.post("/todos", data);
};


export {getTodos, postTodos}