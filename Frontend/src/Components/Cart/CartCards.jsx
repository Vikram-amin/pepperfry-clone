import React from 'react'
import { CardContainer, CardIcon, CardLeft, CardMid, CardRight, Orange } from "./CartCSS";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { BsLayers } from "react-icons/bs";
import {Flex} from '../../Utils/Common'
import safe from '../../Images/safe.svg'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { adjustQuenty, decrement, increment, removeFromCart } from '../../Redux/Product/product-action';
import { connect } from 'react-redux';




const CartCards = ({ item, adjustQty, removeFromCarts ,increment,decrement}) => {

//     const [count, setCount] = React.useState(item.qty);


// React.useEffect(() => {
//  adjustQty(item.id, count);
// }, [count]); 
 
console.log(item.quantity);

  
  return (
    <div>
      <CardContainer>
        <CardLeft>
          <img src={item.img[0]} alt="" />
          <div> only 2 left </div>
        </CardLeft>

        <CardMid>
          <p className="name">{item.name}</p>
          <p>
            <Orange className="month">12 Months' Warranty, 100% Genuine</Orange>
          </p>

          <div className="spanItem">
            <div className="flexset">
              <CalendarMonthIcon className="calenderIcon" />
              <span> Delivery By</span>
            </div>
            <p>Tue, 26 Apr</p>
            <p>Charges FREE For Today</p>
          </div>
          <br />

          <div className="spanItem">
            <div className="flexset">
              <BsLayers className="calenderIcon" />
              <span>Assembly</span>
            </div>
            <p>Offered By Pepperfry</p>
            <p>Charges ₹ 449 </p>
          </div>

          <br />
          <div>
            <Flex>
              <img className="Safeitemsimg" src={safe} alt="" />
              <div className="Safeitems">
                <Orange> Full Furniture Protection </Orange>
                <p>For Only ₹ 1,834</p>
                <p>Learn More?</p>
              </div>
            </Flex>
          </div>
        </CardMid>

        <CardRight>
          <Flex>
            <button onClick={() => decrement(item.id)}> - </button>
            <div className="quantity"> {item.qty}</div>
            <button onClick={() => increment(item.id)}> + </button>
          </Flex>

          <div className="qprice"> ₹ {item.actual_price}</div>
          <Orange>₹ {item.price}</Orange>

          <div className="add">+ Add</div>
        </CardRight>

        <CardIcon>
          <span>
            <DeleteIcon onClick={() => removeFromCarts(item.id)} />
          </span>

          <span>
            <FavoriteBorderIcon />
          </span>
        </CardIcon>
      </CardContainer>
    </div>
  );
};




const mapDispatchToProps = (dispatch) => {
  return {
    // adjustQty: (id, value) => dispatch(adjustQuenty(id, value)),
    increment: (id) => dispatch(increment(id)),
    decrement: (id) => dispatch(decrement(id)),
    removeFromCarts: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartCards);




