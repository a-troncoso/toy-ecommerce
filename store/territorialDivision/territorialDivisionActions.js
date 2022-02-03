import {
  fetchRegions,
  fetchCommunes,
  fetchProvinces,
} from "./territorialDivisionAPI";
import * as types from "./territorialDivisionTypes";

export const fetchRegionsAction = () => async (dispatch) => {
  const response = await fetchRegions();

  dispatch({
    type: types.FETCH_REGIONS,
    payload: response,
  });
  try {
  } catch (e) {
    console.error(e);
  }
};

export const fetchProvincesAction = (regionCode) => async (dispatch) => {
  const response = await fetchProvinces(regionCode);

  dispatch({
    type: types.FETCH_PROVINCES,
    payload: response,
  });
  try {
  } catch (e) {
    console.error(e);
  }
};

export const fetchCommunesAction =
  (regionCode, provinceCode) => async (dispatch) => {
    const response = await fetchCommunes(regionCode, provinceCode);

    dispatch({
      type: types.FETCH_COMMUNES,
      payload: response,
    });
    try {
    } catch (e) {
      console.error(e);
    }
  };
