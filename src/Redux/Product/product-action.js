import * as actionTypes from "./product-types";

export const addToCart = (itemID) =>{
    return{
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart = (itemID) => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id: itemID,
  },
});

export const increment = (itemID) => ({
  type: actionTypes.INCREMENT,
  payload: {
    id: itemID,
  },
});
// decrement the item
export const decrement = (itemID) => ({
  type: actionTypes.DECREMENT,
  payload: {
    id: itemID,
  },
});

export const adjustQuenty = (itemID,value) => {
    return {
      type: actionTypes.ADJUST_QUT,
      payload: {
        id: itemID,
        quantity : value,
      },
    };
}

export const loadCurrentItem = (item) => ({
  type : actionTypes.LOAD_CURRENT_ITEM,
  payload : item,
});
export const getUser = (data) =>{
  return{
      type: actionTypes.GET_USER,
      payload:data
  }
};
export const setUser = (data) =>{
  return{
      type: actionTypes.SET_USER,
      payload:data
  }
};
