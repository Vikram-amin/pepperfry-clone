import { createStore, combineReducers } from "redux";
import {shopReducer} from '../Redux/ShopingCart/reducer.js'

const rootReducer = combineReducers({
  shop: shopReducer
});

 const store = createStore(
   rootReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

export { store };
