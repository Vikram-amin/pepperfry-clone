import { ADD_TO_CART, ADJUST_QUT, LOAD_CURRENT_ITEM, REMOVE_FROM_CART } from "./actionType";

const initaialState = {
  products : [],
  cart : [],
  currentItem : null,
};

const shopReducer = (state = initaialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {};

    case REMOVE_FROM_CART:
      return {};

    case ADJUST_QUT:
      return {};

    case LOAD_CURRENT_ITEM:
      return {};

    default:
      return state;
  }
};

export { shopReducer };