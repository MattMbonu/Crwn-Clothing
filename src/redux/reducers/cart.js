import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM } from "../actions/types";
import { addCartItem } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_CART_ITEM: {
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, payload)
      };
    }
    default:
      return state;
  }
}
