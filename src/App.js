import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import FloatingCart from './Components/FloatingCart/FloatingCart';

import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import ShoppingCart from './Pages/ShopppingCart/ShoppingCart';
import Products from './Pages/Products/Products';
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <FloatingCart />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/panier' element={<ShoppingCart />} />
        <Route path='/produits' element={<Products />} />
        <Route path='/produits/:id' element={<ProductShowcase />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

