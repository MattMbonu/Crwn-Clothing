import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import shop from "./shop";
import user from "./user";
import cart from "./cart";
import directory from "./directory";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  shop,
  user,
  cart,
  directory
});
export default persistReducer(persistConfig, rootReducer);
