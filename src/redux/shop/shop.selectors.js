import { createSelector } from "reselect";

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectShopCollection = createSelector(
    [
        selectShopCollections,
        (state, collectionId) => collectionId
    ],
    (collections, collectionId) => collections[collectionId]
)
