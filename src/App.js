import { Route, Routes } from "react-router-dom";
import "./App.css";
import TodoList from "./features/todo/TodoList";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import DoneList from "./features/todo/DoneList";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoList/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        <Route path="/done" element={<DoneList/>}/>
        
      </Routes>

    </div>
  );
}

export default App;
