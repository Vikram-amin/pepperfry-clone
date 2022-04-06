
import React from 'react'
import { Home } from "../Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { MainCart } from '../Components/Cart/MainCart.jsx';
import { MainCheckout } from '../Components/Checkout/MainCheckout';
import { ProductList } from '../Components/ProductList/ProductList';


const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<MainCart />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/checkout" element={<MainCheckout />} />
      </Routes>
    </div>
  );
}

export { Routing }