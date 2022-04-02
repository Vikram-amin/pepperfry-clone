import React from "react";

export const ProductCard = (item) =>{

    return(
        <div>
            <img src={item.items.src} alt="product image" />
            <h4>{item.items.title}</h4>
            <h5>{item.items.company}</h5>
            <h4>{item.items.price}</h4>
            
        </div>
    )
}