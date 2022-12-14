import "./App.css";
import TodoList from "./features/todo/TodoList";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import DoneListPage from "./pages/DoneListPage";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">

      <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<TodoList />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/done" element={<DoneListPage />} />
      </Route>
      
      </Routes>
    </div>
  );
}

export default App;
