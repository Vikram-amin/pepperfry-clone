import React from 'react';
import {  Header, Sale, LeftText, RightText, Dummy, DummyLeft, DummyRight, TopNav, Nav, NavLogo, SearchBar, NavMenu} from './NavbarCSS';
import Images from '../../Images/logo.png';

const Navbar = () => {
  return (
    <>
      <Header>
        <Sale>
          <LeftText>Shubh Aarambh Sale | Up to 60% Off | Use Code <span>SHUBH</span></LeftText>
          <RightText>Extra 20% Cashback On All Orders | T&C Apply <a href="/">Sign Up</a></RightText>
        </Sale>
      </Header>
      <Dummy>
        <DummyLeft>
            <span>Sell on Pepperfry</span>
            <span>Become a Franchisee</span>
            <span>Buy in Bulk</span>
            <span>Find a Studio</span>
        </DummyLeft>
        <DummyRight>
          <p>Enter Pincode</p>
          <span>Find Pepperfry Studio</span>
        </DummyRight>
      </Dummy>
      <Nav>
        <TopNav>
          <div>
            <NavLogo to="/"><img src={Images} alt={"logo"} height={40} width={168}/></NavLogo>
          </div>
          <div>
            <SearchBar placeholder="Your door to happiness opens with a search"></SearchBar>
          </div>
        </TopNav>
        <NavMenu>
          <div>Furniture</div>
          <div>Sofas & Recliners</div>
          <div>Cabinetry</div>
          <div>Beds</div>
          <div>Mattresses</div>
          <div>Furnishings</div>
          <div>Decor</div>
          <div>Lighting</div>
          <div>Appliances</div>
          <div>Modular</div>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar;