import axios from "axios";

const api = axios.create({
    baseURL: "https://63996b3729930e2bb3d236ed.mockapi.io/",
});

export const getTodos = () => {
    return api.get("/todos");
};

export const postTodo = (todo) => {
    return api.post("/todos", todo);
};

export const updateTodoApi = (todo) => {
    return api.put("/todos/" + todo.id, todo);
};

export const deleteTodoApi = (id) => {
    return api.delete("/todos/" + id);
};
