import React from 'react'
import { Link } from "react-router-dom";
import {IoLocationOutline }  from "react-icons/io5"
import { BsFillBookmarksFill } from "react-icons/bs";
import { Blue, CartCountHeading, CartHeader, CartLeft, CartPageWrapper, CartRight, CheckBoxDiv, Emi, Green, Hr, Orange, PriceContainer, PriceWraper, TotalPrice } from './CartCSS';
import {Flex} from '../../Utils/Common.js'

const sofas = [
  {
    id: 1,
    name: "Esteban 3 Seater Half Leather Sofa in Grey Colour",
    img: "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
    madeBy: "CasaCraft by Pepperfry",
    price: "1,13,999",
    actual_price: "1,84,999",
  },
  {
    id: 2,
    name: "Amelia 2 Seater Sofa in Charcoal Grey Colour",
    img:  "https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-2-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-2-seater-sofa-in-charcoal-grey-colo-mc0vev.jpg",
    
    madeBy: "CasaCraft by Pepperfry",
    offer_price: "1,13,999",
    actual_price: "1,84,999",
  },
];

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
              <IoLocationOutline /> Enter Your Pincode For Delivery & Assembly
              Information <span> 576225</span> <span>Change</span>
            </Flex>
          </CartHeader>

          <div></div>
        </CartLeft>

        <CartRight>
          <PriceWraper>
            <PriceContainer>
              <div>
                <div className="cardDisplay">
                  <div>Cart Value</div>
                  <div>₹ {sofas.price}</div>
                </div>

                <div className="cardDisplay">
                  <Green>Retail Discount </Green>
                  <Green>(-) ₹ {sofas.price}</Green>
                </div>

                <div className="cardDisplay">
                  <Blue>Cashback/Refund Credits Redeemed</Blue>
                  <Blue>(-) ₹{sofas.price}</Blue>
                </div>

                <div className="cardDisplay">
                  <div>
                    Delivery <Orange> (FREE) </Orange>{" "}
                  </div>
                  <div> ₹ 0 </div>
                </div>

                <div className="cardDisplay">
                  <div>Assembly</div>
                  <div>₹ 1500</div>
                </div>

                <div className="cardDisplay">
                  <div>GiveIndia</div>
                  <div>₹ 99</div>
                </div>
              </div>

              <Hr />

              <TotalPrice>
                <div className="total"> Total</div>
                <div>
                  <div className="totalPrice">₹ dsgfd{sofas.price}</div>
                  <div className="tax">(Inclusive of all taxes)</div>
                </div>
              </TotalPrice>

              <Hr />

              <Emi>
                <p>
                  No Cost EMI Available Starting <span> ₹ 63,184/month.</span>
                  EMI Starting <span>₹ 17,846/month</span>
                </p>
              </Emi>
            </PriceContainer>

            <CheckBoxDiv>
              <div>Contribute Rs.99 For COVID Relief Through GiveIndia.</div>
              <div>
                Use GSTIN For Business Purchase (Optional) Claim Tax Credit By
                Entering Your Companies GSTIN.
              </div>
            </CheckBoxDiv>
          </PriceWraper>
        </CartRight>
      </CartPageWrapper>
    </>
  );
}

export { CartPage }