import { createSelector } from "reselect";

//input selector
const selectCart = state => state.cart;

//output selector

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartIemsCount = createSelector(
  [selectCartItems],
  items =>
    items.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0)
);

export const selectHiddenCart = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  items =>
    items.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0)
);
