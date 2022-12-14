import { createSlice } from "@reduxjs/toolkit";

const initTodos = [
  // {
  //   id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
  //   text: "todo example",
  //   done: false,
  // },
  // {
  //   id: "dd53dc26-b061-6b40-dd99-82b85dd2ce90",
  //   text: "first todo item",
  //   done: false,
  // },
  // {
  //   id: "dd53dc26-b061-6b40-dd99-82b85dd2gs11",
  //   text: "done item",
  //   done: true,
  // },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState: initTodos,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },
    toggleTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    addTodos: (state, action) => {
      return action.payload;
    },
    updateTodosText: (state, action) => {
      state.splice(action.payload.id - 1, 1);
      state.push(action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, addTodos, updateTodosText } = todoSlice.actions;

export default todoSlice.reducer;
