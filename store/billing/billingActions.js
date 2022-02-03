import * as types from "./billingTypes";

export const saveBillingDetail = (billingData) => async (dispatch) => {
  try {
    dispatch({
      type: types.SAVE_BILLING_DETAIL,
      payload: billingData,
    });
  } catch (e) {
    console.error(e);
  }
};
