import { combineReducers } from "redux";
import * as types from "./categoryTypes";

const allCategoriesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_ALL_CATEGORIES:
      return payload;
    default:
      return state;
  }
};

const reducers = {
  all: allCategoriesReducer,
};

export default combineReducers(reducers);
