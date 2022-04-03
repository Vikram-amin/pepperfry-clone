import React from 'react'
import { NavbarWrapper } from './CheckoutNavbarCSS'
import logo from "../../Images/logo.svg";

const CheckoutNavbar = () => {
  return (
    <>
    <NavbarWrapper>
        <img src={logo} alt="" />

     </NavbarWrapper>
    </>
  )
}

export { CheckoutNavbar }