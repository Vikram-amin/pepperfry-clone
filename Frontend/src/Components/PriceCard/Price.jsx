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
import { connect } from "react-redux";




// const sofas = {
//   id: 1,
//   name: "Esteban 3 Seater Half Leather Sofa in Grey Colour",
//   img: "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
//   madeBy: "CasaCraft by Pepperfry",
//   price: "1,13,999",
//   actual_price: "1,84,999",
// };

const Price = ({cart}) => {
  const [price, setPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
    const [discount, setDiscount] = useState(0);
     const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    let discount = 0;

    cart.forEach((item) => {
      // console.log(item.qty,"hjfghf")
      items += item.qty;
      price += item.qty * item.price;
      discount = item.actual_price - item.price;
   
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
              <div className="totalPrice">₹ {totalPrice}</div>
              <div className="tax">(Inclusive of all taxes)</div>
            </div>
          </TotalPrice>

          <Hr />
        </PriceContainer>
      </PriceWraper>

    </PriceDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
  };
};

export default connect(mapStateToProps)(Price);
