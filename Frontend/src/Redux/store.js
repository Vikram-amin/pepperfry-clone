import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import productReducer from "./Product/product_reducer.js";
import productDetailsReducer from "./ProductDetails/reducer.js";
import { addressReducer } from "./Address/reducer.js";
import { loginReducer } from "./Login/reducer.js";
import { cartReducer } from "./Cart/reducer.js";

const rootReducer = combineReducers({
  products: productReducer,
  productDetails : productDetailsReducer,
  login : loginReducer,
  cart : cartReducer,
  address : addressReducer,
  user : loginReducer,
});

let initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store };
