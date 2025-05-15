import React from "react";
import './global.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./pages/CartFunctionality/CartContext";

import Home from "./pages/Home";
import ProductPage from './pages/ProductPage';
import CartPage from "./pages/CartPage";

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<ProductPage />}/>
                    <Route path="/cart" element={<CartPage />} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;