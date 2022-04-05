import React from 'react'
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter'
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar'
import { CartPage } from './CartPage'



const MainCart = () => {
  return (
    <div>
      <CheckoutNavbar />
        <CartPage/>
      <CheckoutFooter />
    </div>
  );
}



export { MainCart }