
import React from 'react'
import { Home } from "../Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { MainCart } from '../Components/Cart/MainCart.jsx';
import { MainCheckout } from '../Components/Checkout/MainCheckout';
import { MainProductDetail } from '../Components/ProductDetails/MainProductDetail';
import MainProductList from '../Components/ProductList/MainProductList';
import { MainAddress } from "../Components/Address/MainAddress";
import Popup from "../Components/Login/Popup"
import ThankYouPage from '../Components/ThankYouPage';



const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<MainCart />} />
        <Route path="/productlist" element={<MainProductList />} />
        <Route path="/productlist/:id" element={<MainProductDetail />} />
        <Route path="/address" element={<MainAddress />} />
        <Route path="/checkout" element={<MainCheckout />} />
        <Route path="/login" element={<Popup />} />
        <Route path="/paymentdone" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

export { Routing }