import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import productReducer from "./Product/product_reducer.js";
import productDetailsReducer from "./ProductDetails/reducer.js";

const rootReducer = combineReducers({
  products: productReducer,
  productDetails : productDetailsReducer,
});

let initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store };
