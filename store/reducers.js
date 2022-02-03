import { combineReducers } from "redux";

import productReducer from "./product/productReducer";
import categoryReducer from "./category/categoryReducer";
import cartReducer from "./cart/cartReducer";

const reducers = {
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
};

export default combineReducers(reducers);
