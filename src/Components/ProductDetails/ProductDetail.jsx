import React from "react";
import "../../style/detail.css"
export const ProductDetail = () =>{
    var productData = JSON.parse(localStorage.getItem("data"));
    var product = productData[0];
    var slide = document.getElementById("slider");
    return(
        <>
        <div className="detail">
            <div className="img">
                <div className="slider-box">
                    <div id="slider">
                        <img src={product.img[0]} alt="" />
                        <img src={product.img[1]} alt="" />
                        <img src={product.img[2]} alt="" />
                        <img src={product.img[3]} alt="" />
                    </div>
                    <div className="indicator">
                        <button onClick={()=>{slide.style.transform = "translateX(0px)"}}></button>
                        <button onClick={()=>{slide.style.transform = "translateX(-100%)"}}></button>
                        <button onClick={()=>{slide.style.transform = "translateX(-200%)"}}></button>
                        <button onClick={()=>{slide.style.transform = "translateX(-300%)"}}></button>
                    </div>
                </div>
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
                <label htmlFor="">DELIVERY &emsp; &emsp; &emsp; &emsp;</label>
                <span></span>
                <span></span>
                <input type="text" value={"Enter a Pincode"} className="pincode" />
                <button className="pinBtn">APPLY</button>
                <h5 className="del">Delivery charges as applicable <b>Pincode Required</b></h5>
                <h5 className="del">Assembly Charges as applicable <b>Pincode Required</b></h5>
            </div>
        </div>
        </>
    )
}