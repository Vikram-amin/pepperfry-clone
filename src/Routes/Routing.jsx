
import React from 'react'
import { Home } from "../Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { MainCart } from '../Components/Cart/MainCart.jsx';
import { MainCheckout } from '../Components/Checkout/MainCheckout';
import { MainProductDetail } from '../Components/ProductDetails/MainProductDetail';
import MainProductList from '../Components/ProductList/MainProductList';
<<<<<<< HEAD
import { MainAddress } from '../Components/Address/MainAddress';
=======
import { MainAddress } from "../Components/Address/MainAddress";
>>>>>>> 039035f31ed13b2ffa388c8f4b270e7786336e71



const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<MainCart />} />
        <Route path="/productlist" element={<MainProductList />} />
<<<<<<< HEAD
        <Route path="/checkout" element={<MainCheckout />} />
        <Route path="/address" element={<MainAddress />} />
=======
>>>>>>> 039035f31ed13b2ffa388c8f4b270e7786336e71
        <Route path="/productlist/:id" element={<MainProductDetail />} />
        <Route path="/address" element={<MainAddress />} />
        <Route path="/checkout" element={<MainCheckout />} />
      </Routes>
    </div>
  );
}

export { Routing }