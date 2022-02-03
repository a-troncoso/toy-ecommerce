import { combineReducers } from "redux";
import * as types from "./billingTypes";

const detailReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case types.SAVE_BILLING_DETAIL:
      return payload;
    default:
      return state;
  }
};

const reducers = {
  detail: detailReducer,
};

export default combineReducers(reducers);
