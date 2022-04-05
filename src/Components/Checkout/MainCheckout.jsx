import React from 'react'
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter'
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar'
import { MainAddress} from '../Address/MainAddress'

const MainCheckout = () => {
  return (
    <div>
      <CheckoutNavbar />
      <MainAddress/>
      <CheckoutFooter />
    </div>
  );
}

export { MainCheckout }