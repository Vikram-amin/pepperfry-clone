import React from 'react'
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { Button, CartCountHeading, CartHeader, CartLeft, CartPageWrapper, CartRight, CheckBoxDiv, CoupenDiv, Emi,  PriceContainer} from './CartCSS';
import {Flex} from '../../Utils/Common.js'
import { CartCards } from './CartCards';
import { Price } from '../PriceCard/Price';
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import LocationOnIcon from "@mui/icons-material/LocationOn";



const sofas = 
  {
    id: 1,
    name: "Esteban 3 Seater Half Leather Sofa in Grey Colour",
    img: "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
    madeBy: "CasaCraft by Pepperfry",
    price: "1,13,999",
    actual_price: "1,84,999",
  }


const CartPage= () => {
  return (
    <>
      <CartCountHeading>
        <h2>IN YOUR CART(3 Items)</h2>
      </CartCountHeading>
      <CartPageWrapper>
        <CartLeft>
          <CartHeader>
            <Flex>
              <LocationOnIcon /> Enter Your Pincode For Delivery & Assembly
              Information
            </Flex>
          </CartHeader>

          <div>
            {/* cartcard */}
            <CartCards />
          </div>
        </CartLeft>

        <CartRight>
          <CoupenDiv>
            <ConfirmationNumberIcon /> <span> Apply Coupen</span>
          </CoupenDiv>

          <PriceContainer>
            {/* PriceCard */}
            <Price />

            <Emi>
              <p>
                No Cost EMI Available Starting <span> ₹ 63,184/month.</span>
                EMI Starting <span>₹ 17,846/month</span>
              </p>
            </Emi>
          </PriceContainer>

          <br />
          <CheckBoxDiv>
            <Flex>
              <Checkbox size="large" />
              <span>Contribute Rs.99 For COVID Relief Through GiveIndia.</span>
            </Flex>

            <Flex>
              <Checkbox size="large" />
              <span>
                Use GSTIN For Business Purchase (Optional) Claim Tax Credit By
                Entering Your Companies GSTIN.
              </span>
            </Flex>
            <div className="bp">
              None Of The Items In Your Cart Are Available For Business Purchase
            </div>
          </CheckBoxDiv>

          <Link to={`/address`}>
            <Button>PLACE ORDER</Button>
          </Link>
          
        </CartRight>
      </CartPageWrapper>
    </>
  );
}

export { CartPage }