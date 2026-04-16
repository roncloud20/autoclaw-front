import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/contact";
import Register from "./pages/Register";
import Products from "./pages/Products";
import VerifyEmail from "./pages/VerifyEmail";
import ProductDetail from "./pages/ProductDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
