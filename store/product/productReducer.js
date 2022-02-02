import { combineReducers } from "redux";
import * as types from "./productTypes";

const allProductsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_ALL_PRODUCTS:
      return payload;
    default:
      return state;
  }
};

const featuredProductsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.GENERATE_FEATURED_PRODUCTS:
      return payload;
    default:
      return state;
  }
};

const detailReducer = (
  state = { image: "https://via.placeholder.com/500" },
  { type, payload }
) => {
  switch (type) {
    case types.FETCH_PRODUCT_DETAIL:
      return payload;
    default:
      return state;
  }
};

const reducers = {
  all: allProductsReducer,
  featured: featuredProductsReducer,
  detail: detailReducer,
};

export default combineReducers(reducers);
