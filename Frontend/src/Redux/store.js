import { createStore, combineReducers, applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


import productReducer from '../Redux/Product/product-reducer.js'

const rootReducer = combineReducers({
  product: productReducer
});

let initialState = {};
const middleware = [thunk]; 

 const store = createStore(
   rootReducer,
   initialState,
   composeWithDevTools(applyMiddleware(...middleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

export { store };
