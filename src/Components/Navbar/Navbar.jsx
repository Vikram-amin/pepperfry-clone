import React from 'react';
import {  Header, Sale, LeftText, RightText, Dummy, DummyLeft, DummyRight, TopNav, Nav, NavLogo, SearchBar} from './NavbarCSS';
import Images from '../../Images/logo.png';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Link  } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
  var user = JSON.parse(localStorage.getItem('userData'));
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
            <NavLogo to="/"><img src={Images} alt={"logo"}/></NavLogo>
          </div>
          <div>
            <SearchBar placeholder="Your door to happiness opens with a search"></SearchBar>
          </div>
          <div className="iconDiv">
            <div className="iconOne">
              <img src="https://ii1.pepperfry.com/images/svg/web21-header-help-icon.svg" alt={"help"} className="help" />
            </div>
            <div className="iconOne">
              <Link to={"/login"}>
              <PermIdentityOutlinedIcon className="icon" />
              <h6 style={{margin:"0%"}}>{user.name}</h6>
              </Link>
            </div>
            <div className="iconOne">
              <FavoriteBorderOutlinedIcon className="icon" />
            </div>
            <div className="iconOne">
              <Link to="/cart">
                <ShoppingCartOutlinedIcon className="icon" />
              </Link>
            </div>
          </div>
        </TopNav>
        <DropdownMenu />
      </Nav>
    </>
  )
}

export default Navbar;