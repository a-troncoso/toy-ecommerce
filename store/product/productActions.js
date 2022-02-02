import { fetchAllProducts, fetchProductDetail } from "./productAPI";
import * as types from "./productTypes";

import {
  processProducts,
  genFeaturedProducts,
  processProduct,
} from "./productUtils";

export const fetchAllProductsAction = () => async (dispatch) => {
  try {
    const response = await fetchAllProducts();
    const allProducts = processProducts(response.amiibo);
    const featuredProducts = genFeaturedProducts(allProducts);

    dispatch({
      type: types.FETCH_ALL_PRODUCTS,
      payload: allProducts,
    });

    dispatch({
      type: types.GENERATE_FEATURED_PRODUCTS,
      payload: featuredProducts,
    });
  } catch (e) {
    console.error(e);
    dispatch({
      type: types.FETCH_ALL_PRODUCTS,
      payload: [],
    });

    dispatch({
      type: types.GENERATE_FEATURED_PRODUCTS,
      payload: [],
    });
  }
};

export const fetchProductDetailsAction = (productId) => async (dispatch) => {
  try {
    const response = await fetchProductDetail(productId);
    const product = processProduct(response.amiibo);

    dispatch({
      type: types.FETCH_PRODUCT_DETAIL,
      payload: product,
    });
  } catch (e) {
    console.error(e);
  }
};
