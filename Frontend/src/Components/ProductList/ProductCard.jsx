import React from "react";
import "../../style/product.css"
import { Button, CardWrapper } from "./ProductListCSS";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "../../Redux/Cart/action";


const ProductCard = ({ product }) => {

   const dispatch = useDispatch();
  
const options = {
  value: product.ratings,
  readOnly: true,
  precision: 0.5,
};

const addToCartHandler = () => {
  dispatch(addItemsToCart(product._id,1));
};

  return (
    <CardWrapper>
      <Link to={`/product/${product._id}`}>
        <img src={product.images[0].url[0]} alt="productImage" />
      </Link>

      <div>
        <Rating {...options} /> ({product.numOfRatings})
      </div>

      <Button onClick={addToCartHandler}>ADD TO CART</Button>

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






