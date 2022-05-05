import React from 'react'
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter'
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar'
import CartPage from './CartPage';
import { useSelector, useDispatch } from "react-redux";







const MainCart = () => {
    const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <CheckoutNavbar />

      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <h1>No Product in Your Cart</h1>
          <h1>No Product in Your Cart</h1>
          <h1>No Product in Your Cart</h1>
          <h1>No Product in Your Cart</h1>
        </div>
      ) : (
        <CartPage />
      )}
      <CheckoutFooter />
    </div>
  );
}



export { MainCart }