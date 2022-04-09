import { createStore, combineReducers } from "redux";
import {shopReducer} from '../Redux/ShopingCart/reducer.js'
import productReducer from '../Redux/Product/product-reducer.js'



const rootReducer = combineReducers({
  product: productReducer
});

 const store = createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

export { store };
