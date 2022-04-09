import React from "react";
import "../../style/product.css"
import { Button } from "./CartButton";
import { connect, useDispatch } from "react-redux";
import {loadCurrentItem} from "../../Redux/Product/product-action"
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/Product/product-action";

const ProductCard = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="card">
      <img src={product.img[0]} alt="product image" />
      <button className="img-btn">+4</button>
      <Button onClick={() => addToCart(product.id)}>ADD TO CART</Button>

      <Link to={"/productlist/" + product.id}>
        <Button onClick={() => loadCurrentItem(product)}>VIEW</Button>
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



const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);

