import axios from "axios";

const api = axios.create({
    //baseURL: "https://63996dd416b0fdad773c6c12.mockapi.io"
    baseURL: "http://localhost:8080",
});

export const getTodos = () => {
    return api.get("/todos"); 
};

export const postTodos = (todo) => {
    return api.post("/todos", todo); 
};

export const updateTodoApi = (todo) => {
    return api.put("/todos/" + todo.id, { done: !todo.done } ); 
};

export const updateTodoTextApi = (todo) => {
    return api.put("/todos/" + todo.id, { text: todo.text } ); 
};

export const deleteTodoApi = (id) => {
    return api.delete("/todos/" + id); 
};

// step1: postTodo({todo})