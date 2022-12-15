import { createSlice } from "@reduxjs/toolkit";

const initTodos = [];

export const todoSlice = createSlice({
    name: "todo",
    initialState: initTodos,
    reducers: {
        addTodo: (state, action) => {
            state.push({ id: Date.now(), ...action.payload });
        },
        updateTodo: (state, action) => {
            return state.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo
            );
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        addTodos: (state, action) => {
            return action.payload;
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo, addTodos, updateTodo } =
    todoSlice.actions;

export default todoSlice.reducer;
