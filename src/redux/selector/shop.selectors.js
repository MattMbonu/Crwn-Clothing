import { createSelector } from "reselect";
import Collection from "../../pages/collection/Collection";

const selectShop = state => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  shop => shop.shopData
);
export const selectShopDataForPreview = createSelector(
  [selectShopData],
  shopData => Object.keys(shopData).map(key => shopData[key])
);

export const selectCollection = collectionUrlParam => {
  return createSelector(
    [selectShopData],
    shopData => shopData[collectionUrlParam]
  );
};
