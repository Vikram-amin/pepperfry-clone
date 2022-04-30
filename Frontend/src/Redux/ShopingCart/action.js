import { ADD_TO_CART, ADJUST_QUT, LOAD_CURRENT_ITEM, REMOVE_FROM_CART } from "./actionType";


export const addToCart = (itemID) => ({
  type: ADD_TO_CART,
  payload : {
      id : itemID,
  }
});

export const removeFromCart = (itemID) => ({
  type: REMOVE_FROM_CART,
  payload: {
    id: itemID,
  },
});

export const adjustQuenty = (itemID,value) => {
    return {
      type: ADJUST_QUT,
      payload: {
        id: itemID,
        quantity : value,
      },
    };
}

export const loadCurrentItem = (item) => ({
  type : LOAD_CURRENT_ITEM,
  payload : item,
});