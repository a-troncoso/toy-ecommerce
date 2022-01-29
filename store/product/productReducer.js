import { combineReducers } from "redux";
import * as types from "./productTypes";

const initialProductListState = {
  productList: "product List",
};

const productListReducer = (
  state = initialProductListState,
  { type, payload }
) => {
  switch (type) {
    case types.FETCH_PRODUCTS:
      return {
        productList: payload.productList,
      };
    default:
      return state;
  }
};

const reducers = {
  productList: productListReducer,
};

export default combineReducers(reducers);
