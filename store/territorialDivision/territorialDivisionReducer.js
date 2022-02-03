import { combineReducers } from "redux";
import { processTerritorialDivisions } from "./territorialDivisionUtils";
import * as types from "./territorialDivisionTypes";

const regionsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_REGIONS:
      return processTerritorialDivisions(payload);
    default:
      return state;
  }
};

const provincesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_PROVINCES:
      return processTerritorialDivisions(payload);
    default:
      return state;
  }
};

const communesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_COMMUNES:
      return processTerritorialDivisions(payload);
    default:
      return state;
  }
};

const reducers = {
  regions: regionsReducer,
  provinces: provincesReducer,
  communes: communesReducer,
};

export default combineReducers(reducers);
