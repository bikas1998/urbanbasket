import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { CartProvider } from "./context/CartContext";
import { CartPage } from "./page/CartPage";
import { ProductsPage } from "./page/ProductsPage";
import "./App.css";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-slate-50">
          <Header />
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="*"
              element={<div className="p-8">Page not found</div>}
            />
          </Routes>
          <Toaster position="top-center" />
        </div>
      </Router>
    </CartProvider>
  );
}
