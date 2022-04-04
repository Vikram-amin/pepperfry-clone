import React from 'react'
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter'
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar'
import { CartPage } from './CartPage'



const Cart = () => {
  return (
    <div>
      <CheckoutNavbar />
        <CartPage/>
      <CheckoutFooter />
    </div>
  );
}



export { Cart }