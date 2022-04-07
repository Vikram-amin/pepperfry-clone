
import React from 'react'
import { Home } from "../Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { MainCart } from '../Components/Cart/MainCart.jsx';
import { MainCheckout } from '../Components/Checkout/MainCheckout';
import { MainProductDetail } from '../Components/ProductDetails/MainProductDetail';
import MainProductList from '../Components/ProductList/MainProductList';



const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<MainCart />} />
        <Route path="/productlist" element={<MainProductList />} />
        <Route path="/checkout" element={<MainCheckout />} />
        <Route path="/productlist/:id" element={<MainProductDetail />} />
      </Routes>
    </div>
  );
}

export { Routing }