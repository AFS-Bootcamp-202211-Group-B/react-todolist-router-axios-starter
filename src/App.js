import "./App.css";
import TodoList from "./features/todo/TodoList";
import { Route, Routes } from "react-router-dom"
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import DoneListPage from "./pages/DoneListPage";
import Layout from "./layout/Layout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoList />}/>        
          <Route path="/about" element={<AboutPage />} />
          <Route path="/done" element={<DoneListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
