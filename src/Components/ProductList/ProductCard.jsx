import React from "react";
import "../../style/product.css"
import { Button } from "./CartButton";
export const ProductCard = (item) =>{
    return(
        <div className="card">
            <img src={item.items.src} alt="product image" />
            <Button>ADD TO CART</Button>
            <h4>{item.items.title}</h4>
            <h5>{item.items.company}</h5>
            <h4>{item.items.price}</h4>
        </div>
    )
}