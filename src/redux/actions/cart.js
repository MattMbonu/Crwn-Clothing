import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  REMOVE_SINGLE_ITEM
} from "./types";

export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });
export const addCartItem = item => ({ type: ADD_CART_ITEM, payload: item });
export const removeCartItem = id => ({ type: REMOVE_CART_ITEM, payload: id });
export const removeSingleItem = item => ({
  type: REMOVE_SINGLE_ITEM,
  payload: item
});
