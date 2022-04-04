import React from 'react'
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter';
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar';

function Checkout() {
  return (
    <div>
      <CheckoutNavbar />
      <CheckoutFooter/>
    </div>
  );
}

export default Checkout