import React from 'react'
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter'
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar'
import { CartCard } from './CartCard'


const Cart = () => {
  return (
    <div>
      <CheckoutNavbar/>
      <CartCard/>
      <CheckoutFooter/>
    </div>
  )
}

export { Cart }