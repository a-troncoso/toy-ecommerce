import { combineReducers } from "redux";
import * as types from "./cartTypes";
import { genUpdatedCart, calculateSubtotalAmount } from "./cartUtils";

const productsInCartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_PRODUCT:
      return genUpdatedCart("add", {
        cart: state,
        product: payload,
      });
    case types.REMOVE_PRODUCT:
      return genUpdatedCart("remove", {
        cart: state,
        product: payload,
      });
    default:
      return state;
  }
};

const subtotalAmountReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.UPDATE_SUBTOTAL_AMOUNT:
      return calculateSubtotalAmount(payload);
    default:
      return state;
  }
};

const dispatchCostReducer = (state = 3000, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

const reducers = {
  products: productsInCartReducer,
  subtotalAmount: subtotalAmountReducer,
  dispatchCost: dispatchCostReducer,
};

export default combineReducers(reducers);
