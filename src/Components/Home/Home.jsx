import React from 'react'
import { ShippingDetails } from '../Checkout/ShippingDetails'
import { PaymentsCard } from '../PaymentMethodCard/PaymentCard'

const Home = () => {
  return (
    <>
      <ShippingDetails />
      <PaymentsCard />
    </>
  );
}

export { Home }