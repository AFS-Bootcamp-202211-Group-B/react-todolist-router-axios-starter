import axios from "axios";

const api = axios.create({
    // baseURL: "https://63996b7a16b0fdad773c200d.mockapi.io"
    baseURL: "http://localhost:8080"
});

const getTodos = () => {
    return api.get("/todos");
};

const postTodos = (data) => {
    return api.post("/todos", data);
};

const putTodos = (data) => {
    return api.put(`/todos/${data.id}`, data);
};

const deleteTodos = (id) => {
    return api.delete(`/todos/${id}`);
};



export {getTodos, postTodos, putTodos, deleteTodos}