import * as types from "./cartTypes";

export const addProductToCart = (product) => async (dispatch) => {
  try {
    dispatch({
      type: types.ADD_PRODUCT,
      payload: product,
    });
  } catch (e) {
    console.error(e);
  }
};

export const removeProductToCart = (product) => async (dispatch) => {
  try {
    dispatch({
      type: types.REMOVE_PRODUCT,
      payload: product,
    });
  } catch (e) {
    console.error(e);
  }
};

export const updateSubtotalAmount = (products) => async (dispatch) => {
  try {
    dispatch({
      type: types.UPDATE_SUBTOTAL_AMOUNT,
      payload: products,
    });
  } catch (e) {
    console.error(e);
  }
};
