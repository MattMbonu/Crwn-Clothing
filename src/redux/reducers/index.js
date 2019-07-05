import { combineReducers } from "redux";
import shop from "./shop";
import user from "./user";
import cart from "./cart";

export default combineReducers({
  shop,
  user,
  cart
});
