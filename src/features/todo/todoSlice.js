import { createSlice } from "@reduxjs/toolkit";

const initTodos = [
  {
    id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
    text: "todo example",
    done: false,
  },
  {
    id: "dd53dc26-b061-6b40-dd99-82b85dd2ce90",
    text: "first todo item",
    done: false,
  },
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
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    },
    deleteTodo: (state, action) => {
      let index = state.findIndex(element => element.id === action.payload);
      if (index > -1) { // only splice array when item is found
        state.splice(index, 1); // 2nd parameter means remove one item only
      }
      //return state.filter((todo) => todo.id !== action.payload);
    },
    addTodos: (state,action) => {
      return action.payload;
    },
    postTodos: (state,action) => {
      return action.payload;
    },
    updateTodo: (state, action) => {
      console.log(action.payload)
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      )
    }
  },
});

export const { addTodo, toggleTodo, deleteTodo,addTodos,postTodos,updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
