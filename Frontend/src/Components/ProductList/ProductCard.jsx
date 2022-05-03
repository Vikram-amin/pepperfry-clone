import React from "react";
import "../../style/product.css"
import { Button, CardWrapper } from "./ProductListCSS";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";


const ProductCard = ({ product }) => {
  
const options = {
  value: product.ratings,
  readOnly: true,
  precision: 0.5,
};



  return (
    <CardWrapper>
      <img src={product.images[0].url[0]} alt="productImage" />

      <div>
        <Rating {...options} /> ({product.numOfRatings})
      </div>

      <Button>ADD TO CART</Button>
      {/* <Link to={"/productlist/" + product.id}>
        <Button> VIEW </Button>
      </Link> */}

      <h4>{product.description}</h4>
      <h5 className="card-brand">{product.name}</h5>
      <h4 className="card-price">
        ₹{product.price} <span>₹{product.price}</span>
      </h4>
      <h4 className="card-savings">{product.discount_percentage}% Off</h4>
      <h6>Ships in 1 day</h6>
    </CardWrapper>
  );
};


export default ProductCard;






