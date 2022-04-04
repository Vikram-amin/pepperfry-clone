import React from 'react';
import {  Header, Sale, LeftText, RightText, Dummy, DummyLeft, DummyRight, TopNav, Nav, NavLogo, SearchBar} from './NavbarElements';
import Images from './logo.png';

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
            <NavLogo to="/"><img src={Images} alt={"logo"} height={35} width={170}/></NavLogo>
          </div>
          <div>
            <SearchBar placeholder="Your door to happiness opens with a search"></SearchBar>
          </div>
        </TopNav>

      </Nav>
      {/* <NavMenu>
        <NavItem>
          <NavLink>Furniture</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Sofas & Recliners</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Cabinetry</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Beds</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Mattress</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Furnishings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Decor</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Lighting</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Appliances</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Modular</NavLink>
        </NavItem>
      </NavMenu> */}
    </>
  )
}

export default Navbar;