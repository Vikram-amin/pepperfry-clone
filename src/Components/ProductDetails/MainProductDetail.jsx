import React from "react";
import { Link } from "react-router-dom";
import "../../style/detail.css"
import { Slider } from "./Slider";
import { connect, useSelector } from "react-redux";


export const MainProductDetail = () =>{
    const Items = useSelector(state=> state.currentItem)
    console.log(Items);
    var product =         {
        id: 1,
        name: "Esteban 3 Seater Half Leather Sofa in Grey Colour",
        img: ["https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
                "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-nqijeg.jpg",
                "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-qoh0xi.jpg",
                "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-ra9orm.jpg"],
        madeBy: "CasaCraft by Pepperfry",
        offer_price: "1,13,999",
        actual_price: "1,84,999",
        total_savings: "71,000 (38% Off)",
        price: 113999,
        brand: "CasaCraft"
    }
    const [pincode, setPincode] = React.useState("");
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
                <input type="number" placeholder="Enter a Pincode" value={pincode} onChange={(e)=>handlerChange(e)} className="pincode" />
                <button className="pinBtn">APPLY</button>
                <h5 className="del">Delivery charges as applicable <b>Pincode Required</b></h5>
                <h5 className="del">Assembly Charges as applicable <b>Pincode Required</b></h5>
                <div className="button">
                    <button className="add">ADD TO CART</button>
                    <Link to={`/productlist`}>
                    <button className="buy">BUY NOW</button>
                    </Link>
                    
                </div>
            </div>
        </div>
        </>
    )
}
// const mapStateToProps=state=>{
//     return {
//         currentItem: state.products.currentItem
//     }
// }

// export default connect(mapStateToProps)(MainProductDetail);