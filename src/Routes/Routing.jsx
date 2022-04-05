
import React from 'react'
import { Home } from "../Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Checkout from '../Components/Checkout/Checkout';
import { MainCart } from '../Components/Cart/MainCart';

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<MainCart />} />
        <Route path="/ckeckout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export { Routing }