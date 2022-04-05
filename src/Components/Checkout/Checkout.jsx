import React from 'react'
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter';
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar';
import { MainAddress } from '../Address/MainAddress'
import { ShippingDetails } from './ShippingDetails';

function Checkout() {
  return (
    <div>
      <CheckoutNavbar />

      <MainAddress />
      <ShippingDetails/>

      <CheckoutFooter />
    </div>
  );
}

export default Checkout