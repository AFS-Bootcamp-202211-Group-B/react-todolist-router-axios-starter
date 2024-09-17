import axios from "axios";

const api = axios.create({
    // baseURL: 'https://63996b3b16b0fdad773c1928.mockapi.io/api/v1'
    baseURL: 'http://localhost:8080'
})

const getAllTodos = () => api.get("/todos")

const createTodo = (todoObj) => api.post("/todos", todoObj)

const deleteTodo = (todoId) => api.delete(`/todos/${todoId}`)

const toggleTodo = (todoObj) => api.put(`/todos/${todoObj.id}`, { done: !todoObj.done })

const updateTodoText = (todoObj) => api.put(`/todos/${todoObj.id}`, { text: todoObj.text })


export { getAllTodos, createTodo, deleteTodo, toggleTodo, updateTodoText }