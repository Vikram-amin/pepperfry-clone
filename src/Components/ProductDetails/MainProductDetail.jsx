import React from "react";
import { Link } from "react-router-dom";
import "../../style/detail.css"
import { Slider } from "./Slider";
import { connect, useSelector } from "react-redux";


export const MainProductDetail = () =>{
    const product = useSelector((state) => state.product.currentItem);

    const [pincode, setPincode] = React.useState("");
    const handlerChange =(e) =>{
        setPincode(e.target.value)
    }

    // console.log(product.img)
    return (
      <>
        <div className="detail">
          <div className="img">
            <Slider {...product} />
          </div>
          <div className="data">
            <h3>{product.name}</h3>
            <h5 className="company">{product.madeBy}</h5>
            <h2>₹{product.offer_price}</h2>
            <h5>Save ₹{product.total_savings}</h5>
            <div className="line"></div>
            <h4>
              Last Day to <a href="">Earn Cashback upto 5%</a>
            </h4>
            <a href="">EMI option</a>
            <br />
            <img
              className="offer"
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_Web_VIPCoupon_2X_01042022_es.jpg"
              alt=""
            />
            <br />
            <label htmlFor="">DELIVERY &emsp; &emsp; &emsp; &emsp;</label>
            <input
              type="number"
              placeholder="Enter a Pincode"
              value={pincode}
              onChange={(e) => handlerChange(e)}
              className="pincode"
            />
            <button className="pinBtn">APPLY</button>
            <h5 className="del">
              Delivery charges as applicable <b>Pincode Required</b>
            </h5>
            <h5 className="del">
              Assembly Charges as applicable <b>Pincode Required</b>
            </h5>
            <div className="button">
              <button className="add">ADD TO CART</button>

              <Link to={`/cart`}>
                <button className="buy">BUY NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
}
// const mapStateToProps=state=>{
//     return {
//         currentItem: state.products.currentItem
//     }
// }

// export default connect(mapStateToProps)(MainProductDetail);