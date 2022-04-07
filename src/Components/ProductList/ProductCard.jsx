import React from "react";
import "../../style/product.css"
import { Button } from "./CartButton";
import { connect, useDispatch } from "react-redux";
import {loadCurrentItem} from "../../Redux/Product/product-action"
import { Link } from "react-router-dom";

const ProductCard = (item) =>{
    const dispatch = useDispatch();
    var id = item.items.id

    return(
        <div className="card">
            <img src={item.items.img[0]} alt="product image" />
            <Button>ADD TO CART</Button>
            <Link to={'/productlist/'+id}>    
                <Button onClick={()=>dispatch(loadCurrentItem(item.items))}>VIEW</Button>
            </Link>
            <h4>{item.items.name}</h4>
            <h5>{item.items.brand}</h5>
            <h4>₹{item.items.offer_price}</h4>
        </div>
    )
}
const mapDispatchToProps = (dispatch) =>{
    return{
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    };
}
export default connect(null, mapDispatchToProps)(ProductCard);