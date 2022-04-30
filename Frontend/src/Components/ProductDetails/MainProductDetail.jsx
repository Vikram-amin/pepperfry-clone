import React from "react";
import { Link } from "react-router-dom";
import "../../style/detail.css"
import { Slider } from "./Slider";
import { connect, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FavoriteBorderOutlined } from "@mui/icons-material";

export const MainProductDetail = () =>{
    const product = useSelector((state) => state.product.currentItem);

    const [pincode, setPincode] = React.useState("");
    const handlerChange =(e) =>{
        setPincode(e.target.value)
    }

    // console.log(product.img)
    return (
      <>
      <Navbar />
      <br />
      <br />
        <div className="detail">
          <div className="img">
            <Slider {...product} />
          </div>
          <div className="data">
            <div className="product-name">
            <h2>{product.name}</h2>
            <FavoriteBorderOutlined className="heart"/>
            </div>
            <h4 className="company">{product.madeBy}</h4>
            <br />
            <h6>36 Month's Warranty</h6>
            <br />
            <h1>₹{product.offer_price}</h1>
            <h5>Save ₹{product.total_savings}</h5>
            <div className="line"></div>
            <br />
            <h4>
              Last Day to <a href="">Earn Cashback upto 5%</a>
            </h4>

            <a href="">EMI option</a>
            <br />
            <br />
            <img
              className="offer"
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_Web_VIPCoupon_2X_01042022_es.jpg"
              alt=""
            />
            <br /><br />
            <label htmlFor="">DELIVERY &emsp; &emsp; &emsp; &emsp;Enter Pincode to get Delivery Date, Assembly Information and other details</label>
            <h6></h6>
            <input
              type="number"
              placeholder="Enter a Pincode"
              value={pincode}
              onChange={(e) => handlerChange(e)}
              className="pincode"
            />
            <button className="pinBtn">APPLY</button>
            <br />
            <br />
            <h4 className="del">
              Delivery charges as applicable <b>Pincode Required</b>
            </h4>
            <h4 className="del">
              Assembly Charges as applicable <b>Pincode Required</b>
            </h4>
            <br />
            <div className="button">
              <button className="add">ADD TO CART</button>

              <Link to={`/cart`}>
                <button className="buy">BUY NOW</button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}
// const mapStateToProps=state=>{
//     return {
//         currentItem: state.products.currentItem
//     }
// }

// export default connect(mapStateToProps)(MainProductDetail);