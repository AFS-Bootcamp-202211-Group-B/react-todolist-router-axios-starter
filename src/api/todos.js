import axios from "axios";

const api = axios.create({
    baseURL: "https://63996dd416b0fdad773c6c12.mockapi.io",
});

export const getTodos = () => {
    return api.get("/todos"); 
};

export const postTodos = (todo) => {
    return api.post("/todos", todo); 
};

export const updateTodoApi = (todo) => {
    return api.put("/todos/" + todo.id, todo ); 
};

export const deleteTodoApi = (id) => {
    return api.delete("/todos/" + id); 
};


// step1: postTodo({todo})