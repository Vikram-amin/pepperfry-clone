import React from 'react'
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter';
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar';
import { MainAddress } from '../Address/MainAddress'

function Checkout() {
  return (
    <div>
      <CheckoutNavbar />

      <MainAddress />

      <CheckoutFooter />
    </div>
  );
}

export default Checkout