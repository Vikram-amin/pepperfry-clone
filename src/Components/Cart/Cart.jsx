import React from 'react'
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter'
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar'
import { CartPage } from './CartPage'
import styled from "styled-components";


const Cart = () => {
  return (
    <div>
      <CheckoutNavbar />
        <CartPage/>
      <CheckoutFooter />
    </div>
  );
}

// const CardWrapper = styled.div`
//   margin-top: 500px;
//   width: 85%;
//   margin: auto;
//   border: 1px solid black;
//   display: flex;
// `;

export { Cart }