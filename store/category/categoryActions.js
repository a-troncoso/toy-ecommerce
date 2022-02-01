import { fetchAllCategories } from "./categoryAPI";
import * as types from "./categoryTypes";

// import { processProducts, genFeaturedProducts } from "./categoryUtils";

export const fetchAllCategoriesAction = () => async (dispatch) => {
  try {
    const response = await fetchAllCategories();

    dispatch({
      type: types.FETCH_ALL_CATEGORIES,
      payload: response.amiibo,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: types.FETCH_ALL_CATEGORIES,
      payload: [],
    });
  }
};
