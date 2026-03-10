import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Verify from "./pages/Verify";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Blog from "./pages/Blog";
import Multimedia from "./pages/Multimedia";
import Research from "./pages/Research";
import Products from "./pages/Products";
import "./style.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/verify" element={<Verify />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/blog" element={<Blog />} />
        <Route path="/admin/multimedia" element={<Multimedia />} />
        <Route path="/admin/research" element={<Research />} />
        <Route path="/admin/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}