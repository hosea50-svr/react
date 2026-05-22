import "./App.css";
import CreatePost from "./Api";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Edit from "./pages/Edit";
import BlogDetail from "./pages/BlogDetail";
import ContactPage from "./pages/ContactPage";
// import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
        <Route path="/" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />}/>
        <Route path="/blog/:id" element={<BlogDetail />} />  
        <Route path="/contact" element={<ContactPage />} />  
    </Routes>
  );
}

export default App;