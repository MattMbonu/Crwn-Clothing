import SHOP_DATA from "./shopData";
const initialState = {
  shopData: SHOP_DATA
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}
