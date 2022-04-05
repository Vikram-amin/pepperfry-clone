
import React from 'react'
import { Home } from "../Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from '../Components/Checkout/Checkout';
import { MainCart } from '../Components/Cart/MainCart';
import {ProductDetail} from "../Components/ProductDetails/ProductDetail";
import {ProductList} from "../Components/ProductList/ProductList"
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<MainCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ProductDetails" element={<ProductDetail />} />
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export { Routing }