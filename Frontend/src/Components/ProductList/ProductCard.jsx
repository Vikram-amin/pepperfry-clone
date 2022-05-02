import React from "react";
import "../../style/product.css"
import { Button } from "./ProductListCSS";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.img[0]} alt="product image" />
      
      <button className="img-btn">+4</button>

      <Button >ADD TO CART</Button>
      <Link to={"/productlist/" + product.id}>
        <Button > VIEW </Button>
      </Link>

      <h4>{product.name}</h4>
      <h5 className="card-brand">{product.brand}</h5>
      <h4 className="card-price">₹{product.offer_price}</h4>
      <h4 className="card-savings">{product.total_savings}</h4>
      <h4 className="card-price">Actual Price : <strike>{product.actual_price}</strike></h4>
      <h6>Ships in 1 day</h6>
    </div>
  );
};


export default ProductCard;






