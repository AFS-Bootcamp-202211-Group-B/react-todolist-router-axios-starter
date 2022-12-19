import axios from "axios";

const api = axios.create({
    baseURL:" http://localhost:8080/"
});

export const getTodos = () => {
    return api.get("/todos");
};

export const postTodos = (text) => {
    return api.post("/todos", {
        text: text,
        done: false
    })
};

export const putTodos = (todo) => {
    return api.put(`/todos/${todo.id}`,{
        done: !todo.done
    })
};

export const deleteTodos = (id) => {
    return api.delete(`/todos/${id}`);
}; 

export const putTodoText = (todo) => {
    return api.put(`/todos/${todo.id}`,{
        text: todo.text
    })
}