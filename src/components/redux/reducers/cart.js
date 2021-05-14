import { UPDATE_CART } from "../actions/types";

const INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_CART:
      return { ...state, cartItems: action.payload };
    default:
      return state;
  }
};
