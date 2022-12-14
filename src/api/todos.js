import axios from "axios";

const api = axios.create({
    baseURL: 'https://63996b3b16b0fdad773c1928.mockapi.io/api/v1'
})

const getAllTodos = () => api.get("/todos")

const createTodo = (todoObj) => api.post("/todos", todoObj)

const deleteTodo = (todoId) => api.delete(`/todos/${todoId}`)

const toggleTodo = (todoObj) => api.put(`/todos/${todoObj.id}`, { done: !todoObj.done })


export { getAllTodos, createTodo, deleteTodo, toggleTodo }