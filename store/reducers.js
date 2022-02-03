import { combineReducers } from "redux";

import productReducer from "./product/productReducer";
import categoryReducer from "./category/categoryReducer";
import cartReducer from "./cart/cartReducer";
import territorialDivisionReducer from "./territorialDivision/territorialDivisionReducer";
import billingReducer from "./billing/billingReducer";

const reducers = {
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  territorialDivision: territorialDivisionReducer,
  billing: billingReducer,
};

export default combineReducers(reducers);
