import axios from "axios";
import { ADDRESS_INFO_SAVE, ADD_TO_CART, REMOVE_CART_ITEM } from "./actionType";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://backend-mhwg.onrender.com/api/v1/product/${id}`
  );

  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      image: data.product.images[0].url,
      stock: data.product.Stock,
      discount: data.product.discount_percentage,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: ADDRESS_INFO_SAVE,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
