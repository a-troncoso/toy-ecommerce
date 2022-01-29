import * as types from "./productTypes";

export const fetchProducts = () => (dispatch) =>
  dispatch({
    type: types.FETCH_PRODUCTS,
    payload: { productList: [] },
  });
