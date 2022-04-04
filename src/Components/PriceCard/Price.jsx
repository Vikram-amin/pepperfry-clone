import { Grid } from "../../Utils/Common.js";
import React from "react";
import {
  Blue,
  Green,
  Orange,
  PriceContainer,
  PriceWraper,
  TotalPrice,
  CheckBoxDiv,
  Emi,
  Hr,
  PriceDiv,
} from "./PriceCSS";
import Checkbox from "@mui/material/Checkbox";



const sofas = {
  id: 1,
  name: "Esteban 3 Seater Half Leather Sofa in Grey Colour",
  img: "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
  madeBy: "CasaCraft by Pepperfry",
  price: "1,13,999",
  actual_price: "1,84,999",
};

const Price = () => {
  return (
    <PriceDiv>
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
                Delivery <Orange> (FREE) </Orange>
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
              <div className="totalPrice">₹ {sofas.price}</div>
              <div className="tax">(Inclusive of all taxes)</div>
            </div>
          </TotalPrice>

          <Hr />
        </PriceContainer>
      </PriceWraper>

    </PriceDiv>
  );
};

export { Price };
