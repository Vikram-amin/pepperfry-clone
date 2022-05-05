import { Grid } from "../../Utils/Common.js";
import React,{useEffect,useState} from "react";
import {
  Blue,
  Green,
  Orange,
  PriceContainer,
  PriceWraper,
  TotalPrice,
  Hr,
  PriceDiv,
} from "./PriceCSS";
import { useSelector, useDispatch } from "react-redux";



const Price = ({cart}) => {
  const { cartItems } = useSelector((state) => state.cart);
  const [price, setPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    let discount = 0;

    cartItems.forEach((item) => {
      // console.log(item.qty,"hjfghf")
      items += item.quantity;
      price += item.quantity * item.price;
      discount = item.price - item.price;
    });

    setTotalItem(items);
    setPrice(price);
    setDiscount(discount)
    setTotalPrice (price + 99 + 1500)
  }, [cart, price, totalItem, setTotalItem, setPrice,discount,setDiscount]);

  return (
    <PriceDiv>
      <PriceWraper>
        <PriceContainer>
          <div>
            <div className="cardDisplay">
              <div>Cart Value</div>
              <div>₹ {price}</div>
            </div>

            <div className="cardDisplay">
              <Green>Retail Discount </Green>
              <Green>(-) ₹ {discount}</Green>
            </div>

            <div className="cardDisplay">
              <Blue>Cashback/Refund Credits Redeemed</Blue>
              <Blue>(-) ₹{price}</Blue>
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
              <div className="totalPrice">
                ₹
                {cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}
                
              </div>
              <div className="tax">(Inclusive of all taxes)</div>
            </div>
          </TotalPrice>

          <Hr />
        </PriceContainer>
      </PriceWraper>
    </PriceDiv>
  );
};


export default Price;
