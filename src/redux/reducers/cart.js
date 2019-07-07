import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  REMOVE_SINGLE_ITEM
} from "../actions/types";
import { addCartItem, removeSingleItem } from "./cart.utils";

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
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, payload)
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== payload)
      };
    case REMOVE_SINGLE_ITEM:
      return {
        ...state,
        cartItems: removeSingleItem(state.cartItems, payload)
      };
    default:
      return state;
  }
}
