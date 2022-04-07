import * as actionTypes from "./product-types";

export const addToCart = (itemID) =>{
    return{
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}
export const loadCurrentItem = (itemID) =>{
    return{
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: itemID
    }
}