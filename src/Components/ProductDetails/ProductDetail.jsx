import React from "react";
import "../../style/detail.css"
import { Slider } from "./Slider";
export const ProductDetail = () =>{
    var productData = JSON.parse(localStorage.getItem("data"));
    const [pincode, setPincode] = React.useState("");
    var product = productData[0];
    const handlerChange =(e) =>{
        setPincode(e.target.value)
    }
    return(
        <>
        <div className="detail">
            <div className="img">
                <Slider />
            </div>
            <div className="data">
                <h3>{product.name}</h3>
                <h5 className="company">{product.madeBy}</h5>
                <h2>₹{product.offer_price}</h2>
                <h5>Save ₹{product.total_savings}</h5>
                <div className="line"></div>
                <h4>Last Day to <a href="">Earn Cashback upto 5%</a></h4>
                <a href="">EMI option</a>
                <br />
                <img className="offer" src="https://ii2.pepperfry.com/media/wysiwyg/banners/Promo_Web_VIPCoupon_2X_01042022_es.jpg" alt="" />
                <br />
                <label htmlFor="">DELIVERY &emsp; &emsp; &emsp; &emsp;</label>
                <input type="text" placeholder="Enter a Pincode" value={pincode} onChange={(e)=>handlerChange(e)} className="pincode" />
                <button className="pinBtn">APPLY</button>
                <h5 className="del">Delivery charges as applicable <b>Pincode Required</b></h5>
                <h5 className="del">Assembly Charges as applicable <b>Pincode Required</b></h5>
                <div className="button">
                    <button className="add">ADD TO CART</button>
                    <button className="buy">BUY NOW</button>
                </div>
            </div>
        </div>
        </>
    )
}